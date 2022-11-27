import React from 'react';
import { Input, InputProps } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';

interface SerieCardProps extends InputProps {}

export const SearchBar = ({ ...props }: SerieCardProps) => {
  return (
    <Input
      borderWidth={2}
      rounded={12}
      focusBorderColor="red"
      color={'#FFF'}
      fontFamily={fonts.roboto.bold}
      {...props}
    />
  );
};
