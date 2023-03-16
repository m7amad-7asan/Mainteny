import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from '@Theme';

import {Button} from '../button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  description: {
    textAlign: 'center',
  },
});

interface SubslideProps {
  description: string;
  subtitle?: string;
  last?: boolean;
  onPress: () => void;
}

export const Subslide: React.FC<SubslideProps> = ({description, last, onPress}) => {
  return (
    <View style={styles.container}>
      <Text variant="Body2" color="Primary" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get Started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};
