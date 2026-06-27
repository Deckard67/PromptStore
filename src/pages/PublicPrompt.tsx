import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPublicPromptBySlug } from '../../lib/actions/prompts';
import { PromptItem } from '../lib/promptService';

export function PublicPrompt() {
  const { slug } = useParams();
  const [prompt, setPrompt] = useState<PromptItem | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadPrompt = async () => {
      if (!slug) return
      try {
        const promptRecord = await getPublicPromptBySlug(slug)
        if (promptRecord) {
          setPrompt({
            id: promptRecord.id,
            title: promptRecord.title,
            description: promptRecord.description,
            content: promptRecord.content,
            category: promptRecord.category,
            favorite: promptRecord.favorite,
            public: promptRecord.public,
            slug: promptRecord.slug,
          })
        }
      } catch (error) {
        console.error('Error cargando prompt público:', error)
      }
    }

    loadPrompt()
  }, [slug])

  if (!prompt) {
    return (
      <div className="page-section">
        <div className="card" style={{ padding: 30 }}>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Prompt público no encontrado</p>
          <p style={{ color: '#6d6b63', marginTop: 12 }}>Este prompt no está disponible o no existe.</p>
          <Link to="/" className="btn-outline" style={{ marginTop: 20, display: 'inline-flex' }}>Volver a inicio</Link>
        </div>
      </div>
    );
  }

  const handleCopyPrompt = async () => {
    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9f7f0', padding: '36px 18px' }}>
      <div className="page-section" style={{ padding: 32 }}>
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#eef0ff', padding: '8px 14px', borderRadius: 999, color: '#3d3ac6', fontWeight: 700, width: 'fit-content' }}>Prompt público</div>
          <h1 style={{ margin: 0, fontSize: 38 }}>{prompt.title}</h1>
          <p style={{ margin: 0, color: '#5f5c55', fontSize: 17 }}>{prompt.description}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="badge" style={{ background: '#eef0ff', color: '#3d3ac6' }}>{prompt.category}</span>
            {prompt.favorite && <span className="badge" style={{ background: '#e8f5ef', color: '#1f7e5b' }}>Favorito</span>}
          </div>
        </div>

        <div className="card" style={{ marginTop: 24, padding: 28 }}>
          <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Texto del prompt</p>
          <pre style={{ margin: '14px 0 0', whiteSpace: 'pre-wrap', lineHeight: 1.7, fontFamily: 'inherit', color: '#3d3a32' }}>{prompt.content}</pre>
          <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="btn-primary" onClick={handleCopyPrompt}>{copied ? 'Copiado' : 'Copiar prompt'}</button>
            <Link to="/" className="btn-outline">Volver a inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
