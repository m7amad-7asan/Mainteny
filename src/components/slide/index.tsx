import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import {Text} from '@Theme';

const {width} = Dimensions.get('window');
export const SLIDE_HEIGHT = width / 1.25;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface SlideProps {
  title: string;
}

export const Slide: React.FC<SlideProps> = ({title}) => {
  const transform = [
    {translateY: SLIDE_HEIGHT / 2 - 70},
    {translateX: -width / 2 + 50},
    {rotate: '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="H2" color="Light" opacity={0.75}>
          {title}
        </Text>
      </View>
    </View>
  );
};
