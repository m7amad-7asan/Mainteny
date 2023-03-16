import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Box, Theme, Text} from '@Theme';

export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor?: keyof Theme['colors'];
  iconRatio?: number;
}

export const RoundedIcon: React.FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}) => {
  const iconSize = iconRatio ? iconRatio * size : 0.7 * size;
  return (
    <Box
      height={size}
      width={size}
      style={{borderRadius: size / 2}}
      justifyContent="center"
      alignItems="center"
      {...{backgroundColor}}>
      <Text style={{width: iconSize, height: iconSize}} {...{color}}>
        <Icon {...{name}} size={iconSize} />
      </Text>
    </Box>
  );
};
