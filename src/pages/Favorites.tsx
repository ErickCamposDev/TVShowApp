import React, { FC } from 'react';
import { t } from 'i18next';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { Div } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { Header } from '~/components';
import { SerieCard } from '~/components/atoms/SerieCard';
import { SCREENS } from '~/interfaces';
import { useAppNavigation } from '~/navigation';

export const Favorites: FC = ({}) => {
  const flatListStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
  };

  const navigation = useAppNavigation();
  const series = [];

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Favorites)}</Header>
      <FlatList
        contentContainerStyle={flatListStyle}
        data={series}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Div h={12} />}
        renderItem={({ item }) => (
          <SerieCard
            rating={item.rating.average}
            image={item.image?.original}
            name={item.name}
            onPress={() => {
              navigation.navigate(SCREENS.SERIE_DETAILS, { serie: item });
            }}
          />
        )}
      />
    </Div>
  );
};
