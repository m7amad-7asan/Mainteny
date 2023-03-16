import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Box, Text, useTheme} from '@Theme';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  goBack?: () => void;
  profile?: boolean;
  add?: () => void;
}

export const Header: React.FC<Props> = ({goBack, add, profile}) => {
  const theme = useTheme();

  const {top} = useSafeAreaInsets();

  return (
    <Box
      style={{
        paddingTop: top + theme.spacing.m,
        paddingBottom: profile ? 90 : 10,
      }}
      backgroundColor="Primary"
      padding="m"
      borderBottomRightRadius="xxxl"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Box marginVertical="m" width={40}>
        {goBack && (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={goBack}>
            <Icon name="arrow-left" color={theme.colors.Light} size={20} />
            <Text variant="Subtitle1" color="Light">
              Back
            </Text>
          </TouchableOpacity>
        )}
      </Box>
      <Box marginVertical="m" alignItems="center" justifyContent="center">
        <Text variant="H4" color="Light">
          Mainteny
        </Text>
      </Box>
      <Box marginVertical="m" alignItems="flex-end" width={40}>
        {add && (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={add}>
            <Icon name="plus-circle" color={theme.colors.Light} size={24} />
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
};
