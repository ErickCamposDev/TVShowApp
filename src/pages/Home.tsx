import React, { FC, useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '~/redux/AppStore';
import { SerieCard } from '~/components/atoms/SerieCard';
import { Header } from '~/components';
import { TranslationsKeys } from '~/assets/i18n';
import { FlatList } from 'react-native';
import { getShowsThunk } from '~/redux/actions/TVShowActions';
import { SearchBar } from '~/components/atoms/SearchBar/indext';

export const Home: FC = ({}) => {
  const { t } = useTranslation();
  const { shows } = useAppSelector(state => state.tvShow);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(getShowsThunk('la casa'));
  }, []);

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Home)}</Header>
      <SearchBar
        mb={12}
        mx={20}
        placeholder={t(TranslationsKeys.SearchPlaceholder)}
      />
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        data={shows}
        ItemSeparatorComponent={() => <Div h={12} />}
        renderItem={({ item }) => (
          <SerieCard
            rating={item.rating.average}
            image={item.image?.original}
            name={item.name}
            onPress={() => {}}
          />
        )}
        style={{ flexGrow: 1 }}
      />
    </Div>
  );
};
