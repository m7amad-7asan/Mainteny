import React, {forwardRef} from 'react';
import {TextInput as RNTextInput, TextInputProps as RNTextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Box, Theme, useTheme} from '@Theme';

interface TextInputProps extends RNTextInputProps {
  icon?: any;
  touched?: boolean;
  error?: string;
  search?: boolean;
  secureTextEntry?: boolean;
  activationCode?: boolean;
  scanQR?: () => void;
}

export const InputText = forwardRef<RNTextInput, TextInputProps>(
  ({touched, error, search, icon, activationCode, scanQR, ...props}, ref) => {
    const theme = useTheme();

    const SIZE: number = theme.borderRadii.lg;

    const borderColor: keyof Theme['colors'] = !touched
      ? 'BackgroundGray'
      : error
      ? 'Error'
      : 'Primary';

    const reColor: keyof Theme['colors'] = !touched
      ? 'DarkGray'
      : error
      ? 'Error'
      : 'Primary';

    const color: string = theme.colors[reColor];

    const IconFamily = search ? Icon : MaterialIcon;

    return (
      <Box
        flexDirection="row"
        height="100%"
        borderColor={borderColor}
        borderBottomWidth={1}
        backgroundColor="Light"
        borderRadius={'s'}
        alignItems="center"
        paddingRight="m"
        style={{
          shadowColor: theme.colors.DarkGray,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
        <Box flex={1} flexDirection="row" alignItems="center" overflow="hidden">
          <IconFamily
            name={icon}
            color={theme.colors.DarkGray}
            size={20}
            style={{marginLeft: theme.spacing.s, marginRight: theme.spacing.xs}}
          />
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            style={{
              color: theme.colors.DarkGray,
              fontWeight: '500',
              fontSize: 16,
              flex: 1,
            }}
            spellCheck={false}
            {...{ref}}
            {...props}
          />
        </Box>
        {activationCode && (
          <TouchableOpacity
            style={{
              height: SIZE / 1.2,
              width: SIZE / 1.2,
              borderRadius: SIZE / 1.2 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={scanQR}>
            <CommunityIcons
              name="qrcode-scan"
              size={0.7 * SIZE}
              color={theme.colors.Primary}
            />
          </TouchableOpacity>
        )}
      </Box>
    );
  },
);
