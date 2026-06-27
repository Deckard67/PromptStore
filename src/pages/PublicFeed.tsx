import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPublicPrompts } from '../../lib/actions/prompts'
import { PromptItem } from '../lib/promptService'

export function PublicFeed() {
  const [prompts, setPrompts] = useState<PromptItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPublicPrompts = async () => {
      setLoading(true)
      try {
        const promptRecords = await getPublicPrompts()
        setPrompts(
          promptRecords.map((promptRecord) => ({
            id: promptRecord.id,
            user_id: promptRecord.user_id,
            title: promptRecord.title,
            description: promptRecord.description,
            content: promptRecord.content,
            category: promptRecord.category,
            favorite: promptRecord.favorite,
            public: promptRecord.public,
            slug: promptRecord.slug,
          })),
        )
      } catch (error) {
        console.error('Error cargando prompts públicos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPublicPrompts()
  }, [])

  return (
    <div className="page-section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
          <div>
            <p style={{ color: '#5b5a52', fontWeight: 700, margin: 0 }}>Explorar público</p>
            <h1 style={{ margin: '8px 0 0', fontSize: 32 }}>Prompts públicos</h1>
            <p style={{ margin: '10px 0 0', color: '#6d6b63', maxWidth: 680 }}>
              Descubre prompts que otros usuarios han compartido como públicos. Haz clic para ver el detalle o copiar el prompt.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="card" style={{ padding: 24, textAlign: 'center' }}>Cargando prompts públicos...</div>
        ) : prompts.length === 0 ? (
          <div className="card" style={{ padding: 24, textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>No hay prompts públicos disponibles</p>
            <p style={{ marginTop: 12, color: '#6d6b63' }}>Vuelve más tarde o crea un prompt público desde tu biblioteca.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {prompts.map((prompt) => (
              <div key={prompt.id} className="card" style={{ padding: 24, display: 'grid', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{prompt.title}</p>
                    <p style={{ margin: '10px 0 0', color: '#5f5c55' }}>{prompt.description}</p>
                  </div>
                  <span className="badge" style={{ background: '#f3f0f7', color: '#7556c8' }}>Público</span>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <span className="badge" style={{ background: '#eef0ff', color: '#4f49c2' }}>{prompt.category}</span>
                  {prompt.favorite && <span className="badge" style={{ background: '#e8f5ef', color: '#1f7e5b' }}>Favorito</span>}
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <Link to={`/public/${prompt.slug}`} className="btn-outline">Ver prompt</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
