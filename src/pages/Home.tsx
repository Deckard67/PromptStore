import { Link } from 'react-router-dom';

const features = [
  { title: 'Guarda tus prompts', description: 'Organiza tus instrucciones y recupéralos cuando los necesites.' },
  { title: 'Mejora con IA', description: 'Interfaz lista para que diseñes prompts con mejor estructura.' },
  { title: 'Comparte con URL', description: 'Publica tus mejores prompts con una página clara y lista para SEO.' },
];

export function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#f4f3ef' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '42px 22px' }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 11, background: '#5b50e0', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800 }}>P</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>PromptStore</div>
              <div style={{ color: '#6d6b63', fontSize: 13 }}>Tu biblioteca personal de prompts</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/login" className="btn-outline">Entrar</Link>
            <Link to="/register" className="btn-primary">Crear cuenta</Link>
          </div>
        </header>

        <section style={{ display: 'grid', gap: 28, padding: '18px 0' }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#eeecfb', color: '#5b50e0', borderRadius: 999, padding: '8px 16px', fontWeight: 700, fontSize: 13 }}>Biblioteca para tus prompts</div>
            <h1 className="hero-title" style={{ maxWidth: 640, lineHeight: 1.05 }}>Guarda, mejora y comparte tus mejores prompts de IA.</h1>
            <p style={{ maxWidth: 640, lineHeight: 1.7, color: '#5f5c55', fontSize: 17 }}>Deja de perder los prompts que funcionan en notas sueltas. Guárdalos en un solo sitio, edítalos y publícalos con una URL propia.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/register" className="btn-primary">Empezar gratis</Link>
              <Link to="/public/generar-ideas-para-posts" className="btn-outline">Ver prompt público</Link>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 18, background: '#fff', borderRadius: 24, border: '1px solid #e7e4dd', padding: 24 }}>
            {features.map((feature) => (
              <div key={feature.title} style={{ display: 'grid', gap: 8, padding: 18, borderRadius: 18, background: '#f9f6ff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#5b50e0' }}>{feature.title}</div>
                </div>
                <p style={{ margin: 0, color: '#5f5c55', fontSize: 15 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
