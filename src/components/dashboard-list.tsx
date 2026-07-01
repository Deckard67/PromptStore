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

const loadDashboardMetrics = async (): Promise<DashboardMetrics> => {
  const { data, error } = await supabase.functions.invoke<DashboardMetrics>('dashboard-metrics', {
    method: 'GET',
  })

  if (error) {
    throw new Error(error.message || 'No se pudieron cargar las métricas.')
  }

  if (!data) {
    throw new Error('No se pudieron cargar las métricas.')
  }

  return data
}

export function DashboardList({ initialMetrics }: DashboardListProps) {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const loadMetrics = async () => {
    setLoading(true)
    setError('')

    try {
      setMetrics(await loadDashboardMetrics())
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
