import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {Box, Text, useTheme} from '@Theme';
import {Button, Header, InputText} from '@Components';
import {Note, NotesStackNavigationProps} from '@Core';
import {useNotes} from '@Store';
import {useStorage} from '@Hooks';

export const NoteEditScreen: React.FC<NotesStackNavigationProps<'NoteEdit'>> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();

  const {storeNotes} = useStorage();

  const [notes, setNotes] = useNotes((state) => [state.notes, state.setNotes]);
  const [noteTitle, setNoteTitle] = useState<string | undefined>();
  const [noteDescription, setNoteDescription] = useState<string | undefined>();

  useEffect(() => {
    if (route.params.noteID) {
      const note = notes.find((n) => n.id === route.params.noteID)!;
      setNoteTitle(note.title);
      setNoteDescription(note.description);
    }
  }, [notes, route.params.noteID]);

  const save = useCallback(() => {
    if (noteTitle?.length && noteDescription?.length) {
      if (route.params.noteID) {
        const noteIndex = notes.findIndex((note) => note.id === route.params.noteID);
        const result = notes;
        const newNote: Note = {
          id: notes[noteIndex].id,
          title: noteTitle,
          description: noteDescription,
        };
        result.splice(noteIndex, 1, newNote);
        setNotes([...result]);
        storeNotes([...result]);
      } else {
        const newNote: Note = {
          id: (notes.length + 1).toString(),
          title: noteTitle,
          description: noteDescription,
        };
        setNotes([...notes, newNote]);
        storeNotes([...notes, newNote]);
      }
      navigation.goBack();
    }
  }, [
    navigation,
    noteDescription,
    noteTitle,
    notes,
    route.params.noteID,
    setNotes,
    storeNotes,
  ]);

  return (
    <Box flex={1} backgroundColor="BackgroundGray">
      <Header goBack={() => navigation.goBack()} />
      <Box flex={1}>
        <Box backgroundColor="Primary" style={[StyleSheet.absoluteFillObject]} />
        <Box
          flex={1}
          backgroundColor="BackgroundGray"
          borderTopLeftRadius="xxl"
          paddingHorizontal="lg">
          <Box
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            marginTop="lg">
            <Text variant="H6" color="DarkGray">
              {route.params.noteID ? 'Edit' : 'Add'} your note:
            </Text>
          </Box>
          <Box height={44} marginTop="lg">
            <InputText
              value={noteTitle}
              onChangeText={(value: string) => {
                setNoteTitle(value);
              }}
              placeholder="Note Title"
              returnKeyLabel="go"
              returnKeyType="go"
            />
          </Box>
          <Box height={44} marginTop="lg">
            <InputText
              value={noteDescription}
              onChangeText={(value: string) => {
                setNoteDescription(value);
              }}
              placeholder="Note Description"
              returnKeyLabel="go"
              returnKeyType="go"
            />
          </Box>
          <Box flex={1} justifyContent="center">
            <Button
              variant="primary"
              label="Save"
              style={{width: '100%', marginTop: theme.spacing.xl}}
              onPress={save}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
