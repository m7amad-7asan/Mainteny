import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/Fontisto';

import {MainTabskNavigationProps} from '@Core';
import {Box, Text, useTheme} from '@Theme';
import {Header} from '@Components';
import {useApp} from '@Store';

const Flags = [
  {
    name: 'en',
    flag: 'https://mychangeab.se/flags/USD.png',
  },
  {
    name: 'ar',
    flag: 'https://mychangeab.se/flags/AED.png',
  },
  {
    name: 'sv',
    flag: 'https://mychangeab.se/flags/SEK.png',
  },
];

export const SettingsScreen: React.FC<MainTabskNavigationProps<'Settings'>> = () => {
  const theme = useTheme();

  const [dark, setTheme] = useApp((state) => [state.dark, state.setTheme]);

  return (
    <Box flex={1} backgroundColor="BackgroundGray">
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{minHeight: Dimensions.get('window').height - 50}}
        showsVerticalScrollIndicator={false}>
        <Header profile />
        <Box flex={1}>
          <Box backgroundColor="Primary" style={[StyleSheet.absoluteFillObject]} />
          <Box
            flex={1}
            backgroundColor="BackgroundGray"
            borderTopLeftRadius="xxl"
            paddingHorizontal="lg">
            <Box
              height={180}
              width={180}
              alignSelf="center"
              style={{marginTop: -90, borderRadius: 90}}
              backgroundColor="LightGray"
              borderWidth={2}
              borderColor="Light"
              overflow="hidden">
              <Box flex={1} alignItems="center" justifyContent="center">
                <Icon name="user" size={100} color={theme.colors.Light} />
              </Box>
            </Box>
            <Box alignItems="center" justifyContent="center" marginVertical="lg">
              <Text variant="Subtitle1" color="Primary">
                Mohammad Hasan
              </Text>
              <Box marginTop="s">
                <Text variant="Body1" color="Primary">
                  mohammad.hasan@gmail.com
                </Text>
              </Box>
            </Box>

            <Box
              height={StyleSheet.hairlineWidth}
              backgroundColor="LightGray"
              marginBottom="m"
            />

            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box flexDirection="row" marginTop="m">
                <Icon name={dark ? 'moon' : 'sun'} size={22} color={theme.colors.Dark} />
                <Box marginLeft="m">
                  <Text variant="Subtitle1" color="Dark">
                    {dark ? 'Dark' : 'Light'} mode
                  </Text>
                </Box>
              </Box>
              <Box>
                <Switch
                  value={dark}
                  onValueChange={(val) => setTheme(val)}
                  trackColor={{
                    false: '#BBB',
                    true: theme.colors.Dark,
                  }}
                  thumbColor={theme.colors.Primary}
                />
              </Box>
            </Box>
            <Box
              marginVertical="lg"
              height={StyleSheet.hairlineWidth}
              backgroundColor="LightGray"
            />
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box flex={1} flexDirection="row">
                <FIcon name="language" size={22} color={theme.colors.Dark} />
                <Box marginLeft="m">
                  <Text variant="Subtitle1" color="Dark">
                    Language
                  </Text>
                </Box>
              </Box>
              <Box
                flex={1}
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center">
                {Flags.map((flag, index) => (
                  <Box
                    height={25}
                    width={36}
                    opacity={index === 0 ? 1 : 0.3}
                    borderRadius="s"
                    overflow="hidden"
                    key={`flag-${flag.name}`}>
                    <Image
                      style={{
                        height: undefined,
                        width: undefined,
                        flex: 1,
                      }}
                      source={{uri: flag.flag}}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              marginVertical="lg"
              height={StyleSheet.hairlineWidth}
              backgroundColor="LightGray"
            />
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <Icon name="help-circle" size={22} color={theme.colors.Dark} />
                <Box marginLeft="m">
                  <Text variant="Subtitle1" color="Dark">
                    About us
                  </Text>
                </Box>
              </Box>
              <Box
                backgroundColor="Primary"
                height={34}
                alignItems="center"
                justifyContent="center"
                paddingVertical="xs"
                paddingHorizontal="lg"
                borderRadius="m">
                <Icon name="link-2" color={theme.colors.Light} size={18} />
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
