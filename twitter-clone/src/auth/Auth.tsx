import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="h-screen bg-stone-900 p-4">
      <Outlet />
    </div>
  );
};

export default Auth;
