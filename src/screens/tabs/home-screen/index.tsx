import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CircularProgress from 'react-native-circular-progress-indicator';

import {Box, Text, useTheme} from '@Theme';
import {Header, NoteCard, ShadowBox} from '@Components';
import {useNotes} from '@Store';

export const HomeScreen = () => {
  const theme = useTheme();

  const notes = useNotes((state) => state.notes);

  return (
    <Box flex={1} backgroundColor="BackgroundGray">
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          minHeight: Dimensions.get('window').height - 50,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <Header />
        <Box flex={1}>
          <Box backgroundColor="Primary" style={[StyleSheet.absoluteFillObject]} />
          <Box flex={1} backgroundColor="BackgroundGray" borderTopLeftRadius="xxl">
            <ShadowBox>
              <Box flex={1} alignItems="center">
                <CircularProgress
                  activeStrokeColor={theme.colors.Error}
                  showProgressValue={false}
                  value={100}
                  radius={80}
                  duration={2000}
                  inActiveStrokeOpacity={0.4}
                  title={notes.length.toString()}
                  subtitle="Notes"
                  titleColor={theme.colors.Warning}
                  titleStyle={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: theme.colors.Primary,
                  }}
                  subtitleStyle={{
                    fontSize: 24,
                    fontWeight: '400',
                    color: theme.colors.Primary,
                  }}
                />
              </Box>
            </ShadowBox>
            {!notes.length ? (
              <Box flex={1} alignItems="center" justifyContent="center">
                <Text variant="Subtitle1" color="Primary">
                  You haven't added any notes yet
                </Text>
              </Box>
            ) : (
              <>
                <Box marginTop="m" marginHorizontal="m">
                  <Text variant="Subtitle1" color="Primary">
                    Lateset Notes
                  </Text>
                </Box>
                {notes.slice(0, 3).map((note) => (
                  <NoteCard note={note} key={`latest-notes-${note.id}`} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
