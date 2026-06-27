import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUp(email, password, name);
      navigate('/app/dashboard');
    } catch (err: any) {
      alert(err.message || 'Error al registrarse')
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f3ef', display: 'grid', placeItems: 'center', padding: '32px 18px' }}>
      <div style={{ width: '100%', maxWidth: 520, background: '#fff', borderRadius: 24, border: '1px solid #e7e4dd', padding: 32, boxShadow: '0 22px 55px -30px rgba(27, 26, 24, 0.25)' }}>
        <div style={{ marginBottom: 26 }}>
          <h1 style={{ fontSize: 32, marginBottom: 10 }}>Crear cuenta</h1>
          <p style={{ color: '#6d6b63', fontSize: 15 }}>Regístrate y empieza a guardar tus prompts.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
          <label style={{ display: 'grid', gap: 8, fontWeight: 700, color: '#4a473f' }}>
            Nombre
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ana García"
              required
            />
          </label>
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
          <button type="submit" className="btn-primary">Crear cuenta</button>
        </form>

        <p style={{ marginTop: 20, fontSize: 14, color: '#6d6b63' }}>
          ¿Ya tienes cuenta? <button type="button" onClick={() => navigate('/login')} style={{ border: 'none', background: 'transparent', color: '#5b50e0', fontWeight: 700, cursor: 'pointer' }}>Entrar</button>
        </p>
      </div>
    </div>
  );
}
