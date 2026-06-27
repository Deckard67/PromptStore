import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getPromptById } from '../../lib/actions/prompts';
import { PromptItem } from '../lib/promptService';

type PromptDetailProps = {
  refreshPrompts: () => void;
};

export function PromptDetail({ refreshPrompts }: PromptDetailProps) {
  const { id } = useParams();
  const { user } = useAuth();
  const [prompt, setPrompt] = useState<PromptItem | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadPrompt = async () => {
      if (!id || !user?.id) return
      try {
        const promptRecord = await getPromptById(id, user.id)
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
        console.error('Error cargando prompt:', error)
      }
    }

    loadPrompt()
  }, [id, user?.id])

  useEffect(() => {
    refreshPrompts()
  }, [refreshPrompts])

  const handleCopyPrompt = async () => {
    if (!prompt?.content) return

    await navigator.clipboard.writeText(prompt.content)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  if (!prompt) {
    return (
      <div className="page-section">
        <div className="card" style={{ padding: 30 }}>
          <p style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Prompt no encontrado</p>
          <p style={{ color: '#6d6b63', marginTop: 12 }}>Comprueba que el prompt existe o vuelve a la biblioteca.</p>
          <Link to="/app/library" className="btn-outline" style={{ marginTop: 20, display: 'inline-flex' }}>Volver a biblioteca</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section">
      <div style={{ display: 'grid', gap: 22 }}>
        <div>
          <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Detalle del prompt</p>
          <h1 style={{ margin: '10px 0 0', fontSize: 32 }}>{prompt.title}</h1>
          <p style={{ margin: '10px 0 0', color: '#6d6b63' }}>{prompt.description}</p>
        </div>

        <div className="card" style={{ padding: 24, display: 'grid', gap: 18 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="badge" style={{ background: '#eef0ff', color: '#3d3ac6' }}>{prompt.category}</span>
            {prompt.favorite && <span className="badge" style={{ background: '#e8f5ef', color: '#1f7e5b' }}>Favorito</span>}
            {prompt.public && <span className="badge" style={{ background: '#f3f0f7', color: '#7556c8' }}>Público</span>}
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Texto del prompt</p>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: '#3d3a32' }}>{prompt.content}</pre>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="btn-outline" onClick={handleCopyPrompt}>{copied ? 'Copiado' : 'Copiar prompt'}</button>
            <Link to={`/app/editor/${prompt.id}`} className="btn-outline">Editar</Link>
            <Link to="/app/library" className="btn-outline">Volver</Link>
          </div>
          {prompt.public && (
            <div style={{ padding: 18, borderRadius: 16, background: '#f5f2ff' }}>
              <p style={{ margin: 0, color: '#5b50e0', fontWeight: 700 }}>URL pública</p>
              <p style={{ margin: '8px 0 0', color: '#5f5c55' }}>/public/{prompt.slug}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
