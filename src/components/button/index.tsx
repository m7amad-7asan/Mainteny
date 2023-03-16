import React from 'react';
import {StyleSheet} from 'react-native';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';

import {Text, Theme} from '@Theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ButtonProps {
  variant?: 'default' | 'primary';
  label?: string;
  onPress?: () => void;
  style?: RectButtonProperties['style'];
}

export const Button: React.FC<ButtonProps> = ({variant, label, onPress, style}) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary' ? theme.colors.Primary : theme.colors.BackgroundGray;
  const color = variant === 'primary' ? theme.colors.Light : theme.colors.Natural;
  return (
    <RectButton style={[styles.container, style, {backgroundColor}]} {...{onPress}}>
      <Text variant="Subtitle1" style={{color}}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};
