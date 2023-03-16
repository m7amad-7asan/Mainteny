import React, {useLayoutEffect} from 'react';
import {Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

import {Box, Text, useTheme} from '@Theme';

const width = Dimensions.get('window').width - 16;

interface ExploreTabProps {
  active: boolean;
  name: string;
  Img: any;
  size: number;
  index: number;
  setActive: (name: string) => void;
}

export const BottomTab: React.FC<ExploreTabProps> = ({
  active,
  name,
  Img,
  index,
  size,
  setActive,
}) => {
  const theme = useTheme();

  const widthValue = useSharedValue(46);
  const textOpacity = useSharedValue(0);
  const textWidth = useSharedValue(0);

  const widthStyle = useAnimatedStyle(() => ({
    width: widthValue.value,
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    width: textWidth.value,
  }));

  useLayoutEffect(() => {
    widthValue.value = withTiming(active ? width / 3 : width / 6, {duration: 300});
    textOpacity.value = withTiming(active ? 1 : 0, {duration: 375});
    textWidth.value = withTiming(active ? 70 : 0, {duration: 300});
  }, [active, index, textOpacity, textWidth, widthValue]);

  return (
    <TouchableWithoutFeedback
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={() => setActive(name)}>
      <Animated.View style={widthStyle}>
        <Box flexDirection="row" alignItems="center" justifyContent="center" height={28}>
          <Box height={size} width={size} marginRight="s">
            <Icon
              name={Img}
              size={size}
              color={active ? theme.colors.Primary : theme.colors.DarkGray}
            />
          </Box>
          <Animated.View
            style={[
              textStyle,
              {
                justifyContent: 'center',
                height: 22,
              },
            ]}>
            <Text variant="Subtitle1" color="Primary">
              {name}
            </Text>
          </Animated.View>
        </Box>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
