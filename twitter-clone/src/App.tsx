import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { useUserStore } from './zustand/UserStore';

function App() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);

  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) {
      navigate('/auth/sign-in');
      return;
    }

    setUser(JSON.parse(user));
    navigate('/home');
  }, [navigate, user, setUser]);

  return (
    <>
      <Header />
      <main className="p-4 w-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
