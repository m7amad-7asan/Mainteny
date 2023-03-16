import create from 'zustand';

import {Note} from '@Core';

type State = {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
};

export const useNotes = create<State>((set) => ({
  notes: [],
  setNotes: async (notes) => {
    set({notes});
  },
}));
