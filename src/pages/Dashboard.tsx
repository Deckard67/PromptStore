import { DashboardList } from '../components/dashboard-list'

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

        <DashboardList
          initialMetrics={{
            totalPrompts: data.totalPrompts,
            favoritePrompts: data.favorites,
            publicPrompts: data.publicCount,
            aiUsageLast24h: 0,
          }}
        />
      </div>
    </div>
  );
}
