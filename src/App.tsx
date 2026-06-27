import { Navigate, Route, Routes } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { PromptLibrary } from './pages/PromptLibrary';
import { PromptEditor } from './pages/PromptEditor';
import { PromptDetail } from './pages/PromptDetail';
import { PublicFeed } from './pages/PublicFeed';
import { PublicPrompt } from './pages/PublicPrompt';
import { Layout } from './components/Layout';
import { useAuth } from './hooks/useAuth';
import { getUserPrompts, PromptItem } from './lib/promptService';

function App() {
  const { user, loading, signOut } = useAuth();
  const [prompts, setPrompts] = useState<PromptItem[]>([]);

  const loadPrompts = useCallback(async () => {
    if (!user?.id) {
      setPrompts([]);
      return;
    }

    try {
      const userPrompts = await getUserPrompts(user.id);
      setPrompts(userPrompts);
    } catch (error) {
      console.error('Error cargando prompts:', error);
    }
  }, [user?.id]);

  useEffect(() => {
    loadPrompts();
  }, [loadPrompts]);

  const dashboardData = useMemo(
    () => ({
      totalPrompts: prompts.length,
      favorites: prompts.filter((item) => item.favorite).length,
      publicCount: prompts.filter((item) => item.public).length,
    }),
    [prompts],
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/app/*"
        element={
          loading ? (
            <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#555' }}>Cargando sesión...</div>
          ) : user ? (
            <Layout user={{ name: user?.name ?? user?.email ?? 'Usuario', email: user?.email ?? '' }} onLogout={() => signOut()}>
              <Routes>
                <Route path="dashboard" element={<Dashboard data={dashboardData} />} />
                <Route path="library" element={<PromptLibrary prompts={prompts} refreshPrompts={loadPrompts} />} />
                <Route path="public" element={<PublicFeed />} />
                <Route
                  path="prompt/:id"
                  element={<PromptDetail refreshPrompts={loadPrompts} />}
                />
                <Route
                  path="editor/:id?"
                  element={<PromptEditor refreshPrompts={loadPrompts} />}
                />
                <Route path="*" element={<Navigate to="dashboard" />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/public/:slug" element={<PublicPrompt />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
