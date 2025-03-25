'use client';

import { create } from 'zustand';

interface AuthStore {
  userData: {
    email: string;
    password: string;
    name: string;
    phone: string;
    birth: string;
  };
  isLogin: boolean;

  setUserData: (userData: AuthStore['userData']) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userData: {
    email: '',
    password: '',
    name: '',
    phone: '',
    birth: '',
  },
  isLogin: false,

  setUserData: (userData) => set((state) => ({ ...state, userData })),
  setIsLogin: (isLogin) => set({ isLogin }),
}));
