import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addPrompt, editPrompt, getPromptById } from '../../lib/actions/prompts';
import { PromptItem, generateUniqueSlug } from '../lib/promptService';
import { categories } from '../../lib/categories';
import { improvePromptWithAI } from '../lib/aiService';

type PromptEditorProps = {
  refreshPrompts: () => void;
};

export function PromptEditor({ refreshPrompts }: PromptEditorProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [existingPrompt, setExistingPrompt] = useState<PromptItem | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Marketing');
  const [favorite, setFavorite] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState('');
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    const loadPrompt = async () => {
      if (!id || !user?.id) return
      try {
        const promptRecord = await getPromptById(id, user.id)
        if (promptRecord) {
          setExistingPrompt({
            id: promptRecord.id,
            title: promptRecord.title,
            description: promptRecord.description,
            content: promptRecord.content,
            category: promptRecord.category,
            favorite: promptRecord.favorite,
            public: promptRecord.public,
            slug: promptRecord.slug,
          })
          setTitle(promptRecord.title)
          setDescription(promptRecord.description)
          setContent(promptRecord.content)
          setCategory(promptRecord.category)
          setFavorite(promptRecord.favorite)
          setIsPublic(promptRecord.public)
        }
      } catch (error) {
        console.error('Error cargando prompt:', error)
      }
    }

    loadPrompt()
  }, [id, user?.id])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user?.id) return

    setLoading(true)

    try {
      if (existingPrompt) {
        await editPrompt(
          existingPrompt.id,
          {
            title,
            description,
            content,
            category,
            favorite,
            public: isPublic,
            slug: existingPrompt.slug,
          },
          user.id,
        )
      } else {
        const slug = await generateUniqueSlug(title)
        await addPrompt({
          user_id: user.id,
          title,
          description,
          content,
          category,
          favorite,
          public: isPublic,
          slug,
        })
      }

      await refreshPrompts()
      navigate('/app/library')
    } catch (error) {
      console.error('Error guardando prompt:', error)
      alert('No se pudo guardar el prompt')
    } finally {
      setLoading(false)
    }
  };

  const handleImprovePrompt = async () => {
    if (!content.trim()) {
      setAiError('Escribe un prompt antes de mejorarlo con IA.')
      return
    }

    setAiLoading(true)
    setAiError('')

    try {
      const result = await improvePromptWithAI({
        title,
        description,
        content,
        category,
      })
      setAiResult(result.improvedContent)
    } catch (error) {
      console.error('Error mejorando prompt:', error)
      setAiError(error instanceof Error ? error.message : 'No se pudo mejorar el prompt.')
    } finally {
      setAiLoading(false)
    }
  }

  const handleUseAiResult = () => {
    setContent(aiResult)
    setAiResult('')
    setAiError('')
  }

  return (
    <div className="page-section">
      <div style={{ display: 'grid', gap: 20 }}>
        <div>
          <p style={{ color: '#5b5b56', fontWeight: 700, margin: 0 }}>Editor de prompt</p>
          <h1 style={{ margin: '10px 0 0', fontSize: 32 }}>{existingPrompt ? 'Editar prompt' : 'Crear prompt'}</h1>
          <p style={{ margin: '10px 0 0', color: '#6d6b63' }}>Define título, descripción y el texto de tu prompt.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Título
            <input className="input-field" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Título para tu prompt" required />
          </label>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Descripción breve
            <textarea className="textarea-field" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Descripción corta" rows={4} required />
          </label>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Texto del prompt
            <textarea className="textarea-field" value={content} onChange={(event) => setContent(event.target.value)} placeholder="Escribe aquí tu prompt" rows={6} required />
          </label>
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" className="btn-outline" onClick={handleImprovePrompt} disabled={aiLoading}>
                {aiLoading ? 'Mejorando con IA...' : 'Mejorar con IA'}
              </button>
              {aiError ? <span style={{ color: '#b23b3b', fontSize: 14, fontWeight: 700 }}>{aiError}</span> : null}
            </div>
            {aiResult ? (
              <div className="card" style={{ padding: 18, display: 'grid', gap: 14 }}>
                <div>
                  <p style={{ color: '#5b5b56', fontWeight: 700, margin: 0 }}>Resultado IA</p>
                  <p style={{ margin: '6px 0 0', color: '#6d6b63', fontSize: 14 }}>Revisa la versión mejorada antes de aplicarla.</p>
                </div>
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.65, color: '#34312b', background: '#fbfaf7', border: '1px solid #e7e4dd', borderRadius: 14, padding: 16 }}>
                  {aiResult}
                </div>
                <div>
                  <button type="button" className="btn-primary" onClick={handleUseAiResult}>Usar esta versión</button>
                </div>
              </div>
            ) : null}
          </div>
          <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
              Categoría
              <select className="select-field" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option>Marketing</option>
                <option>Ventas</option>
                <option>Productividad</option>
                <option>Creatividad</option>
              </select>
            </label>
            <div style={{ display: 'grid', gap: 16 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#4a473f', fontWeight: 700 }}>
                <input type="checkbox" checked={favorite} onChange={(event) => setFavorite(event.target.checked)} />
                Favorito
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#4a473f', fontWeight: 700 }}>
                <input type="checkbox" checked={isPublic} onChange={(event) => setIsPublic(event.target.checked)} />
                Público
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="submit" className="btn-primary">Guardar prompt</button>
            <button type="button" className="btn-outline" onClick={() => navigate('/app/library')}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
