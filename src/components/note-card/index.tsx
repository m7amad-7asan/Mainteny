import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Note} from '@Core';
import {ShadowBox} from '@Components';
import {Box, Text, useTheme} from '@Theme';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  note: Note;
  edit?: () => void;
}

export const NoteCard: React.FC<Props> = ({note, edit}) => {
  const theme = useTheme();

  return (
    <ShadowBox>
      <Box
        flex={1}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="Light">
        <Box>
          <Text variant="Subtitle1" color="Primary">
            Note ID: {note.id}
          </Text>
        </Box>
        {edit && (
          <TouchableOpacity onPress={edit}>
            <Icon name="edit" size={20} color={theme.colors.Primary} />
          </TouchableOpacity>
        )}
      </Box>
      <Box flexDirection="row" marginTop="m">
        <Box alignItems="center" width="10%" marginTop="xxs">
          <Box>
            <MaterialIcon size={18} name="description" color={theme.colors.Primary} />
          </Box>
          {new Array(4).fill(4).map((__, idx) => (
            <Box
              key={`trip-dash-${idx}`}
              height={3.5}
              width={1}
              backgroundColor="Primary"
              marginTop="xs"
            />
          ))}
          <Box marginTop="xs">
            <MaterialIcon size={18} name="category" color={theme.colors.Primary} />
          </Box>
        </Box>
        <Box>
          <Box height={46}>
            <Box>
              <Text variant="Subtitle1" color="DarkGray">
                Title
              </Text>
              <Text color="DarkGray" variant="Body1">
                {note.title}
              </Text>
            </Box>
          </Box>
          <Box marginTop="s" paddingRight="lg">
            <Text variant="Subtitle1" color="DarkGray">
              Description
            </Text>
            <Text color="DarkGray" variant="Body1" textAlign="left">
              {note.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </ShadowBox>
  );
};
