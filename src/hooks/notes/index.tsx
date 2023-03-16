import AsyncStorage from '@react-native-async-storage/async-storage';

import {Note} from '@Core';
import {useNotes} from '@Store';

export const useStorage = () => {
  const setNotes = useNotes((state) => state.setNotes);

  const getNotes = async () => {
    const storedNotes = await AsyncStorage.getItem('MaintenyNotes');
    if (storedNotes) {
      const notes = JSON.parse(storedNotes);
      setNotes(notes);
    }
  };

  const storeNotes = async (notes: Note[]) => {
    await AsyncStorage.setItem('MaintenyNotes', JSON.stringify(notes));
  };

  return {
    getNotes,
    storeNotes,
  };
};
