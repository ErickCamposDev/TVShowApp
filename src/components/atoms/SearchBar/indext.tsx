import React from 'react';
import { Input } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';

interface SerieCardProps {
  value: string;
  placeholder: string;
  onChangeText: () => void;
}

export const SerieCard = ({
  placeholder,
  value,
  onChangeText,
}: SerieCardProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      color={'#FFF'}
      fontFamily={fonts.roboto.bold}
    />
  );
};
