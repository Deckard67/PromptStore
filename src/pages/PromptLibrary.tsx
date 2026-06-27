import { useState } from 'react';
import { Link } from 'react-router-dom';
import { removePrompt, editPrompt } from '../../lib/actions/prompts';
import { PromptItem } from '../lib/promptService';
import { categories } from '../../lib/categories';

type PromptLibraryProps = {
  prompts: PromptItem[];
  refreshPrompts: () => void;
};

export function PromptLibrary({ prompts, refreshPrompts }: PromptLibraryProps) {
  const [busyId, setBusyId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [visibility, setVisibility] = useState('Todos');

  const visiblePrompts = prompts.filter((prompt) => {
    const query = search.trim().toLowerCase()
    const matchesSearch =
      !query ||
      prompt.title.toLowerCase().includes(query) ||
      prompt.description.toLowerCase().includes(query) ||
      prompt.content.toLowerCase().includes(query)
    const matchesCategory = category === 'Todas' || prompt.category === category
    const matchesVisibility =
      visibility === 'Todos' ||
      (visibility === 'Favoritos' && prompt.favorite) ||
      (visibility === 'Públicos' && prompt.public)

    return matchesSearch && matchesCategory && matchesVisibility
  })

  const handleToggleFavorite = async (prompt: PromptItem) => {
    setBusyId(prompt.id)
    try {
      await editPrompt(prompt.id, { favorite: !prompt.favorite })
      await refreshPrompts()
    } catch (error) {
      console.error('Error actualizando favorito:', error)
    } finally {
      setBusyId(null)
    }
  }

  const handleDelete = async (prompt: PromptItem) => {
    if (!window.confirm(`¿Eliminar el prompt “${prompt.title}”?`)) return

    setBusyId(prompt.id)
    try {
      await removePrompt(prompt.id)
      await refreshPrompts()
    } catch (error) {
      console.error('Error eliminando prompt:', error)
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="page-section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
          <div>
            <p style={{ color: '#5b5a52', fontWeight: 700, margin: 0 }}>Biblioteca</p>
            <h1 style={{ margin: '8px 0 0', fontSize: 32 }}>Tus prompts</h1>
          </div>
          <Link to="/app/editor" className="btn-primary">Agregar prompt</Link>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <input className="input-field" placeholder="Buscar prompts" style={{ maxWidth: 320 }} value={search} onChange={(event) => setSearch(event.target.value)} />
          <select className="select-field" style={{ maxWidth: 200 }} value={category} onChange={(event) => setCategory(event.target.value)}>
            <option>Todas</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select className="select-field" style={{ maxWidth: 200 }} value={visibility} onChange={(event) => setVisibility(event.target.value)}>
            <option>Todos</option>
            <option>Favoritos</option>
            <option>Públicos</option>
          </select>
        </div>

        <div style={{ display: 'grid', gap: 16 }}>
          {visiblePrompts.length === 0 ? (
            <div className="card" style={{ padding: 24 }}>
              <p style={{ margin: 0, fontWeight: 700 }}>No hay prompts que coincidan</p>
              <p style={{ margin: '8px 0 0', color: '#6d6b63' }}>Prueba con otra búsqueda o cambia los filtros.</p>
            </div>
          ) : visiblePrompts.map((prompt) => (
            <div key={prompt.id} className="card" style={{ padding: 24, display: 'grid', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'flex-start' }}>
                <div>
                  <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{prompt.title}</p>
                  <p style={{ margin: '10px 0 0', color: '#5f5c55' }}>{prompt.description}</p>
                </div>
                <span className="badge" style={{ background: prompt.favorite ? '#e8f5ef' : '#f2f0ed', color: prompt.favorite ? '#1f8a5b' : '#5f5c55' }}>
                  {prompt.favorite ? 'Favorito' : 'Normal'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: '#eef0ff', color: '#4f49c2' }}>{prompt.category}</span>
                {prompt.public && <span className="badge" style={{ background: '#f3f0f7', color: '#7556c8' }}>Público</span>}
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button type="button" className="btn-outline" onClick={() => handleToggleFavorite(prompt)} disabled={busyId === prompt.id}>
                  {busyId === prompt.id ? '...' : prompt.favorite ? 'Quitar favorito' : 'Marcar favorito'}
                </button>
                <Link to={`/app/prompt/${prompt.id}`} className="btn-outline">Ver detalle</Link>
                <Link to={`/app/editor/${prompt.id}`} className="btn-outline">Editar</Link>
                <button type="button" className="btn-outline" onClick={() => handleDelete(prompt)} disabled={busyId === prompt.id}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
