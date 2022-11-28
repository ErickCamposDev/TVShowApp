import React, { useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/redux/AppStore';
import { SerieCard } from '~/components/atoms/SerieCard';
import { Header } from '~/components';
import { TranslationsKeys } from '~/assets/i18n';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { getSeriesThunk } from '~/redux/actions/TVSerieActions';
import { SearchBar } from '~/components/atoms/SearchBar/indext';
import { SCREENS } from '~/interfaces';
import { useAppNavigation } from '~/navigation';

export const Home = () => {
  const { t } = useTranslation();
  const { series } = useAppSelector(state => state.tvSerie);
  const dispatcher = useAppDispatch();
  const navigation = useAppNavigation();

  useEffect(() => {
    dispatcher(getSeriesThunk('la casa'));
  }, []);

  const flatListStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
  };

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Home)}</Header>
      <SearchBar
        mb={12}
        mx={20}
        placeholder={t(TranslationsKeys.SearchPlaceholder)}
      />
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
