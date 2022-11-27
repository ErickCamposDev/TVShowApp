import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Div, Image, Text } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';

interface SerieCardProps {
  image?: string;
  name: string;
  onPress?: () => void;
  disbled?: boolean;
  rating?: number;
}

const PLACEHOlDER_POSTER =
  'https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png';

export const SerieCard: FC<SerieCardProps> = ({
  image,
  rating,
  name,
  onPress,
  disbled,
}) => {
  return (
    <TouchableOpacity disabled={disbled || !onPress} onPress={onPress}>
      <Div flexDir="row">
        <Div
          h={120}
          pr={20}
          flex={1}
          alignItems="flex-start"
          position="relative">
          <Image
            position="absolute"
            h={'100%'}
            w={'100%'}
            rounded={12}
            source={{
              uri: image || PLACEHOlDER_POSTER,
            }}
          />
          {rating && (
            <Div
              bg={'red'}
              left={8}
              top={8}
              w={45}
              h={30}
              justifyContent="center"
              rounded={10}
              alignItems="center">
              <Text
                color="gray100"
                fontSize={14}
                fontFamily={fonts.urbanist.bold}>
                {rating.toFixed(1)}
              </Text>
            </Div>
          )}
        </Div>
        <Text
          flex={1}
          fontFamily={fonts.urbanist.bold}
          numberOfLines={3}
          fontSize={20}>
          {name}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};
