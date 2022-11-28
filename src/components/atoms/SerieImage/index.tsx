import React from 'react';
import { Animated } from 'react-native';
import { Image } from 'react-native-magnus';

interface SerieImageProps {
  source?: string;
  height?: number;
}

export const SerieImage = ({ source, height }: SerieImageProps) => {
  const PLACEHOlDER_POSTER =
    'https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png';

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
