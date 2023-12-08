import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="h-screen bg-stone-900">
      <Outlet />
    </main>
  );
}

export default App;
