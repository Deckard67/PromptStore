type DashboardProps = {
  data: {
    totalPrompts: number;
    favorites: number;
    publicCount: number;
  };
};

export function Dashboard({ data }: DashboardProps) {
  return (
    <div className="page-section">
      <div style={{ display: 'grid', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ color: '#5b5a52', fontWeight: 700 }}>Bienvenido de nuevo</p>
          <h1 style={{ margin: 0, fontSize: 34 }}>Tu panel de control</h1>
          <p style={{ margin: 0, color: '#6d6b63', maxWidth: 680 }}>Accede rápidamente a tus prompts, revisa tus favoritos y crea nuevos prompts para usar con herramientas de IA.</p>
        </div>

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div className="card" style={{ padding: 22 }}>
            <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Prompts guardados</p>
            <p style={{ margin: '12px 0 0', fontSize: 32, fontWeight: 800 }}>{data.totalPrompts}</p>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Favoritos</p>
            <p style={{ margin: '12px 0 0', fontSize: 32, fontWeight: 800 }}>{data.favorites}</p>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <p style={{ margin: 0, color: '#5b5a52', fontWeight: 700 }}>Públicos</p>
            <p style={{ margin: '12px 0 0', fontSize: 32, fontWeight: 800 }}>{data.publicCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
