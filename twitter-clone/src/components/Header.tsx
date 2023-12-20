import twitterLogo from '/twitter.png';
import { useUserStore } from '../zustand/UserStore';

const Header = () => {
  const currentUser = useUserStore((store) => store.user);
  return (
    <header className="py-2 px-16 bg-stone-400 flex justify-between items-center">
      <img src={twitterLogo} className="h-10 w-10" alt="twitter" />
      <p className="m-0 p-0 text-slate-900">
        {currentUser?.name || 'Log in to display username'}
      </p>
    </header>
  );
};

export default Header;
