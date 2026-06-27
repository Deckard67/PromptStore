import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
  user: { name: string; email: string };
  onLogout: () => void;
};

const navItems = [
  { label: 'Dashboard', path: '/app/dashboard' },
  { label: 'Biblioteca', path: '/app/library' },
  { label: 'Descubrir público', path: '/app/public' },
  { label: 'Nuevo prompt', path: '/app/editor' },
];

export function Layout({ children, user, onLogout }: LayoutProps) {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', background: '#f5f3ee' }}>
      <header style={{ borderBottom: '1px solid #e6e3dc', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Link to="/app/dashboard" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#1a1916', fontWeight: 800, fontSize: 18 }}>
            <span style={{ width: 30, height: 30, borderRadius: 10, background: '#5b50e0', color: '#fff', display: 'grid', placeItems: 'center' }}>P</span>
            PromptStore
          </Link>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: '#6d6b63', fontSize: 14 }}>{user.name}</span>
            <button type="button" onClick={onLogout} style={{ border: '1px solid #e3dfd6', background: '#fff', borderRadius: 12, padding: '10px 16px', color: '#5b50e0', fontWeight: 700 }}>Cerrar sesión</button>
          </div>
        </div>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 1180, margin: '0 auto', padding: '26px 22px' }}>
        <div style={{ display: 'grid', gap: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
            <div className="card" style={{ padding: 24, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} style={{ padding: '11px 16px', borderRadius: 12, fontWeight: 700, color: location.pathname === item.path ? '#fff' : '#5b50e0', background: location.pathname === item.path ? '#5b50e0' : '#f8f6f0', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
}
