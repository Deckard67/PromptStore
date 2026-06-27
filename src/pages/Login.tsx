import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      navigate('/app/dashboard');
    } catch (err: any) {
      alert(err.message || 'Error al iniciar sesión')
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f3ef', display: 'grid', placeItems: 'center', padding: '32px 18px' }}>
      <div style={{ width: '100%', maxWidth: 520, background: '#fff', borderRadius: 24, border: '1px solid #e7e4dd', padding: 32, boxShadow: '0 22px 55px -30px rgba(27, 26, 24, 0.25)' }}>
        <div style={{ marginBottom: 26 }}>
          <h1 style={{ fontSize: 32, marginBottom: 10 }}>Entrar</h1>
          <p style={{ color: '#6d6b63', fontSize: 15 }}>Accede a tu biblioteca privada de prompts.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Email
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="ana@promptstore.app"
              required
            />
          </label>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Contraseña
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          <button type="submit" className="btn-primary">Entrar</button>
        </form>

        <p style={{ marginTop: 20, fontSize: 14, color: '#6d6b63' }}>
          ¿No tienes cuenta? <button type="button" onClick={() => navigate('/register')} style={{ border: 'none', background: 'transparent', color: '#5b50e0', fontWeight: 700, cursor: 'pointer' }}>Regístrate</button>
        </p>
      </div>
    </div>
  );
}
