import React, { FC } from 'react';
import { t } from 'i18next';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { Header } from '~/components';
import { SerieCard } from '~/components/atoms/SerieCard';
import { SCREENS } from '~/interfaces';

import { useAppSelector } from '~/redux/AppStore';
import { useAppNavigation } from '~/hooks';
import fonts from '~/shared/theme/fonts';

export const Favorites: FC = ({}) => {
  const { favorites } = useAppSelector(state => state.favorite);
  const flatListStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
  };

  const navigation = useAppNavigation();

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Favorites)}</Header>
      {favorites.length === 0 ? (
        <Text
          textAlign="center"
          fontFamily={fonts.urbanist.bold}
          fontSize={16}
          mt={30}>
          {t(TranslationsKeys.NoFavorites).toString()}
        </Text>
      ) : (
        <FlatList
          contentContainerStyle={flatListStyle}
          data={favorites}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <Div h={12} />}
          renderItem={({ item }) => (
            <SerieCard
              rating={item?.rating?.average}
              image={item?.image?.medium}
              name={item?.name}
              onPress={() => {
                navigation.navigate(SCREENS.SERIE_DETAILS, { serie: item });
              }}
            />
          )}
        />
      )}
    </Div>
  );
};
