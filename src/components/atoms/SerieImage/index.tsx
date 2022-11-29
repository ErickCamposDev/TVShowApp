import React from 'react';
import { Animated } from 'react-native';
import { Image } from 'react-native-magnus';
import { PLACEHOlDER_POSTER } from '~/shared/constants/images';

interface SerieImageProps {
  source?: string;
  height?: number;
}

export const SerieImage = ({ source, height }: SerieImageProps) => {
  return (
    <Animated.View style={{ height }}>
      <Image
        w={'100%'}
        h={'100%'}
        resizeMode="contain"
        source={{ uri: source || PLACEHOlDER_POSTER }}
      />
    </Animated.View>
  );
};
