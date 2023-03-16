import React, {useCallback, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';

import {Note, NotesStackNavigationProps} from '@Core';
import {Box, Text, useTheme} from '@Theme';
import {Header, InputText, NoteCard} from '@Components';
import {useNotes} from '@Store';

export const NotesListScreen: React.FC<NotesStackNavigationProps<'NotesList'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  const [notesToShow, setNotesToShow] = useState<Note[]>([]);

  const notes = useNotes((state) => state.notes);

  useFocusEffect(
    useCallback(() => {
      setNotesToShow(notes);
    }, [notes]),
  );

  const search = useCallback(
    (term: string) => {
      const res = notes.filter((note) =>
        note.title.toLowerCase().includes(term.toLowerCase()),
      );
      setNotesToShow(res);
    },
    [notes],
  );

  return (
    <Box flex={1} backgroundColor="BackgroundGray">
      <FlatList
        contentContainerStyle={{
          minHeight: Dimensions.get('window').height - 50,
          paddingBottom: theme.spacing.m,
        }}
        ListEmptyComponent={
          <Box flex={1} alignItems="center" justifyContent="center">
            <Text variant="Subtitle1" color="Primary">
              You haven't added any notes yet
            </Text>
          </Box>
        }
        ListHeaderComponent={
          <>
            <Header add={() => navigation.navigate('NoteEdit', {})} />
            <Box flex={1}>
              <Box backgroundColor="Primary" style={[StyleSheet.absoluteFillObject]} />
              <Box
                flex={1}
                backgroundColor="BackgroundGray"
                borderTopLeftRadius="xxl"
                paddingHorizontal="m">
                <Box height={44} marginTop="lg">
                  <InputText
                    onChangeText={(value) => {
                      if (value) {
                        search(value);
                      } else {
                        setNotesToShow(notes);
                      }
                    }}
                    placeholder="Search by title"
                    returnKeyLabel="go"
                    returnKeyType="go"
                    search
                    icon="search"
                  />
                </Box>
              </Box>
            </Box>
          </>
        }
        data={notesToShow}
        renderItem={({item}) => (
          <NoteCard
            note={item}
            key={`note-list-${item.id}`}
            edit={() => navigation.navigate('NoteEdit', {noteID: item.id})}
          />
        )}
      />
    </Box>
  );
};
