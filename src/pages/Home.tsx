/* eslint-disable no-spaced-func */
import React, { useCallback, useEffect, useState } from 'react';
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
import { Serie } from '~/services/TVMazeApi/types/Serie';
import { useAppNavigation } from '~/hooks';

const SERIE_CARD_HEIGHT = 249.7;

export const Home = () => {
  const { t } = useTranslation();
  const { series } = useAppSelector(state => state.tvSerie);
  const [page, setPage] = useState(0);
  const [showSearch, setShowSearch] = useState('');
  const dispatcher = useAppDispatch();
  const navigation = useAppNavigation();

  useEffect(() => {
    dispatcher(getSeriesThunk(showSearch, page));
  }, [page, showSearch]);

  const flatListStyle: StyleProp<ViewStyle> = {
    alignItems: 'center',
  };

  const getItemLayout = useCallback<
    (
      data: Serie[] | null | undefined,
      index: number,
    ) => { index: number; offset: number; length: number }
  >(
    (_, index: number) => ({
      index,
      offset: SERIE_CARD_HEIGHT * index,
      length: SERIE_CARD_HEIGHT,
    }),
    [],
  );

  const renderItem = useCallback<({ item }: { item: Serie }) => JSX.Element>(
    ({ item }) => {
      return (
        <SerieCard
          rating={item?.rating?.average}
          image={item.image?.medium}
          name={item.name}
          onPress={() => {
            navigation.navigate(SCREENS.SERIE_DETAILS, { serie: item });
          }}
        />
      );
    },
    [],
  );

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Home)}</Header>
      <SearchBar
        onDebouncedChange={text => {
          setShowSearch(text);
          setPage(0);
        }}
        mb={12}
        mx={20}
        placeholder={t(TranslationsKeys.SearchPlaceholder)}
      />

      <FlatList
        contentContainerStyle={flatListStyle}
        data={series}
        onEndReachedThreshold={0.5}
        onEndReached={() => setPage(prev => prev + 1)}
        numColumns={2}
        maxToRenderPerBatch={6}
        removeClippedSubviews
        getItemLayout={getItemLayout}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <Div h={12} />}
        renderItem={renderItem}
      />
    </Div>
  );
};
