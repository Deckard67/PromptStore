import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export type DashboardMetrics = {
  totalPrompts: number
  favoritePrompts: number
  publicPrompts: number
  aiUsageLast24h: number
}

type DashboardListProps = {
  initialMetrics: DashboardMetrics
}

const metricCards = (metrics: DashboardMetrics) => [
  {
    label: 'Prompts guardados',
    value: metrics.totalPrompts,
  },
  {
    label: 'Favoritos',
    value: metrics.favoritePrompts,
  },
  {
    label: 'Públicos',
    value: metrics.publicPrompts,
  },
  {
    label: 'Usos de IA 24h',
    value: metrics.aiUsageLast24h,
  },
]

const isMissingTableError = (error: { code?: string; message?: string }) =>
  error.code === '42P01' ||
  error.code === 'PGRST205' ||
  error.message?.toLowerCase().includes('could not find the table')

const loadMetricsFromSupabase = async (userId: string): Promise<DashboardMetrics> => {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  const [promptsResult, aiUsageResult] = await Promise.all([
    supabase
      .from('prompts')
      .select('id, favorite, public')
      .eq('user_id', userId),
    supabase
      .from('ai_usages')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId)
      .gte('created_at', since),
  ])

  if (promptsResult.error) {
    throw promptsResult.error
  }

  if (aiUsageResult.error && !isMissingTableError(aiUsageResult.error)) {
    throw aiUsageResult.error
  }

  const prompts = promptsResult.data ?? []

  return {
    totalPrompts: prompts.length,
    favoritePrompts: prompts.filter((prompt) => prompt.favorite).length,
    publicPrompts: prompts.filter((prompt) => prompt.public).length,
    aiUsageLast24h: aiUsageResult.error ? 0 : aiUsageResult.count ?? 0,
  }
}

export function DashboardList({ initialMetrics }: DashboardListProps) {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loadMetrics = async () => {
    setLoading(true)
    setError('')

    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()

      if (sessionError || !sessionData.session) {
        throw new Error('Necesitas iniciar sesión para cargar las métricas.')
      }

      const data = await loadMetricsFromSupabase(sessionData.session.user.id)

      setMetrics(data)
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : 'No se pudieron cargar las métricas.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
        <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Métricas del dashboard</p>
        <button type="button" className="btn-outline" onClick={loadMetrics} disabled={loading}>
          {loading ? 'Cargando...' : 'Cargar métricas'}
        </button>
      </div>

      {error ? <p style={{ margin: 0, color: '#b23b3b', fontSize: 14, fontWeight: 700 }}>{error}</p> : null}

      <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {metricCards(metrics).map((card) => (
          <div className="card" style={{ padding: 22 }} key={card.label}>
            <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>{card.label}</p>
            <p style={{ margin: '12px 0 0', fontSize: 32, fontWeight: 800 }}>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
