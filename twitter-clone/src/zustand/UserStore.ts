import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IUser } from '../interfaces/User';
import { Nullable } from '../utils/nullableType';

interface IUserState {
  user: Nullable<IUser>;
  setUser: (user: IUser) => void;
}

export const useUserStore = create<IUserState>()(
  devtools(
    (set) => ({
      user: {
        id: null,
        name: null,
        email: null,
      },
      setUser: (user) => set(() => ({ user })),
    }),
    { name: 'userStore' }
  )
);
