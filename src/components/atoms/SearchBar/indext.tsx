import React, { useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Input, InputProps } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';
import { debounce } from '~/utils';

interface SerieCardProps extends InputProps {
  onDebouncedChange: (toSearch: string) => void;
}

export const SearchBar = ({ onDebouncedChange, ...props }: SerieCardProps) => {
  const [searchText, setSearchText] = useState('');

  const optimizedSearch = useMemo<(toSearch: string) => void>(
    () => debounce((toSearch: string) => onDebouncedChange(toSearch)),
    [],
  );

  return (
    <Input
      borderWidth={2}
      rounded={12}
      suffix={
        <TouchableOpacity
          onPress={() => {
            setSearchText('');
            optimizedSearch('');
          }}>
          <Icon
            name="close-circle-outline"
            color="gray100"
            fontSize={24}
            fontFamily="Ionicons"
          />
        </TouchableOpacity>
      }
      onChangeText={text => {
        setSearchText(text);
        optimizedSearch(text);
      }}
      value={searchText}
      focusBorderColor="red"
      color={'#FFF'}
      fontFamily={fonts.roboto.bold}
      {...props}
    />
  );
};
