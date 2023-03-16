import React, {Fragment, useRef} from 'react';
import {StyleSheet, Dimensions, Image} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AppStackNavigationProps, Slides} from '@Core';
import {Slide, Subslide, SLIDE_HEIGHT, Dot, Footer} from '@Components';
import {Theme, makeStyles, Box, Text, useTheme} from '@Theme';

const {width} = Dimensions.get('window');

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: Dimensions.get('window').height,
    backgroundColor: theme.colors.Light,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: theme.borderRadii.xxxxl,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xxxxl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: theme.colors.Light,
    borderTopLeftRadius: theme.borderRadii.xxxxl,
  },
  pagination: {
    height: theme.borderRadii.xxxxl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const OnboardingAssets = Slides.map((slide) => slide.picture.src);

export const WelcomeScreen: React.FC<AppStackNavigationProps<'Welcome'>> = ({
  navigation,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const scroll = useRef<Animated.ScrollView>(null);

  const {top} = useSafeAreaInsets();
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      x.value = contentOffset.x;
    },
  });

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      Slides.map((_, i) => i * width),
      Slides.map((slide) => slide.color),
    ),
  );

  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  const currentIndex = useDerivedValue(() => x.value / width);
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{translateX: -x.value}],
  }));

  return (
    <Fragment>
      <Box style={styles.container}>
        <Animated.View
          style={[
            background,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: theme.spacing.lg,
              paddingTop: top + theme.spacing.lg,
            },
          ]}>
          <Text variant="H3" color="Light">
            Mainteny
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text variant="Subtitle2" color="Light">
              Skip
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.slider, slider]}>
          {Slides.map(({picture}, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const style = useAnimatedStyle(() => ({
              opacity: interpolate(
                x.value,
                [(index - 1) * width, index * width, (index + 1) * width],
                [0, 1, 0],
                Extrapolate.CLAMP,
              ),
            }));
            return (
              <Animated.View
                style={[styles.underlay, style]}
                key={`slide-images-${index}`}>
                <Box
                  width={Dimensions.get('window').width - 140}
                  height={((Dimensions.get('window').width - 100) * 2) / 2.5}
                  paddingRight="s">
                  <Image
                    source={picture.src}
                    style={{
                      width: undefined,
                      height: undefined,
                      flex: 1,
                    }}
                  />
                </Box>
              </Animated.View>
            );
          })}
          <Animated.ScrollView
            ref={scroll}
            horizontal
            snapToInterval={width}
            decelerationRate="normal"
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
            scrollEventThrottle={16}>
            {Slides.map(({title}, index) => (
              <Slide key={index} {...{title}} />
            ))}
          </Animated.ScrollView>
        </Animated.View>
        <Box style={styles.footer}>
          <Animated.View style={[StyleSheet.absoluteFillObject, background]} />
          <Box style={styles.footerContent}>
            <Box style={styles.pagination}>
              {Slides.map((_, index) => (
                <Dot key={index} currentIndex={currentIndex} {...{index}} />
              ))}
            </Box>
            <Animated.View
              style={[
                {
                  zIndex: 1,
                  flex: 1,
                  flexDirection: 'row',
                  width: width * Slides.length,
                  marginBottom: -50,
                },
                footerStyle,
              ]}>
              {Slides.map(({description}, index) => {
                const last = index === Slides.length - 1;
                return (
                  <Subslide
                    key={index}
                    onPress={() => {
                      if (last) {
                        navigation.navigate('Tabs');
                      } else if (scroll.current) {
                        scroll.current.scrollTo({x: width * (index + 1), animated: true});
                      }
                    }}
                    {...{description, last}}
                  />
                );
              })}
            </Animated.View>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
