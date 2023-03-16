import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';

import {Box, Text} from '@Theme';

export const Footer = () => {
  return (
    <ImageBackground
      style={{
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
      }}
      source={require('@Assets/images/onBoardingMap.png')}>
      <Box />
      <Text color="Primary" variant="Caption">
        Powered by Mohammad Hasan
      </Text>
    </ImageBackground>
  );
};
