import create from 'zustand';
import localStorage from '@react-native-async-storage/async-storage';

type State = {
  dark: boolean;
  setTheme: (dark: boolean) => void;
};

export const useApp = create<State>((set) => ({
  dark: false,
  setTheme: async (dark) => {
    await localStorage.setItem('MojodatLens-Theme', dark.toString());
    set({dark});
  },
}));
