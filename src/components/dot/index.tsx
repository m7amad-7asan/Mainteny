import React from 'react';
import {View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {useTheme} from '@Theme';

interface DotProps {
  index: number;
  currentIndex: Animated.SharedValue<number>;
}

export const Dot: React.FC<DotProps> = ({index, currentIndex}) => {
  const theme = useTheme();
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );
    const width = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [24, 12, 24],
      Extrapolate.CLAMP,
    );
    const color = interpolateColor(
      currentIndex.value,
      [index - 1, index, index + 1],
      [theme.colors.DarkGray, theme.colors.Primary, theme.colors.DarkGray],
    );
    return {
      opacity,
      backgroundColor: color,
      borderRadius: 4,
      height: 8,
      width: width,
      margin: 4,
    };
  });
  return (
    <Animated.View style={style}>
      <View />
    </Animated.View>
  );
};
