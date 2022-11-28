import React, { FC } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Div, Image, Text } from 'react-native-magnus';
import { PLACEHOlDER_POSTER } from '~/shared/constants/images';
import fonts from '~/shared/theme/fonts';

interface SerieCardProps {
  image?: string;
  name: string;
  onPress?: () => void;
  disbled?: boolean;
  rating?: number;
}

const imageWidth = Dimensions.get('screen').width * 0.4;

export const SerieCard: FC<SerieCardProps> = ({
  image,
  rating,
  name,
  onPress,
  disbled,
}) => {
  return (
    <TouchableOpacity disabled={disbled || !onPress} onPress={onPress}>
      <Div my={12} mx={10}>
        <Div>
          <Div position="relative">
            <Image
              resizeMode="cover"
              h={200}
              w={imageWidth}
              rounded={12}
              source={{
                uri: image || PLACEHOlDER_POSTER,
              }}
            />
            {rating && (
              <Div
                bg="red"
                position="absolute"
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
        </Div>
        <Text
          maxW={imageWidth}
          flex={1}
          fontFamily={fonts.urbanist.bold}
          fontSize={20}>
          {name}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};
