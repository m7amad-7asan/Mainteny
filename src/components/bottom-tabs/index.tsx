import React, {useCallback, useEffect, useState} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Box, useTheme} from '@Theme';

import {BottomTab} from '../tab';

const BottomTabsData = [
  {
    id: 'Home',
    icon: 'home',
    size: 26,
  },
  {
    id: 'Notes',
    icon: 'book',
    size: 30,
  },
  {
    id: 'Settings',
    icon: 'settings',
    size: 26,
  },
];

export const BottomTabs: React.FC<BottomTabBarProps> = ({navigation, state}) => {
  const theme = useTheme();
  const {bottom} = useSafeAreaInsets();

  const [activeTab, setActiveTab] = useState('Home');

  const navigateTo = useCallback(
    (tabName: string) => {
      setActiveTab(tabName);
      navigation.navigate(tabName);
    },
    [navigation],
  );

  useEffect(() => {
    setActiveTab(BottomTabsData[state.index].id);
  }, [state]);

  return (
    <Box backgroundColor="BackgroundGray">
      <Box
        paddingVertical="m"
        paddingHorizontal="s"
        backgroundColor="Light"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        style={{paddingBottom: bottom || theme.spacing.m}}>
        {BottomTabsData.map((tab, index) => (
          <BottomTab
            name={tab.id}
            active={tab.id === activeTab}
            Img={tab.icon}
            size={tab.size}
            key={`bottom-tab-${index}`}
            setActive={navigateTo}
            {...{index}}
          />
        ))}
      </Box>
    </Box>
  );
};
