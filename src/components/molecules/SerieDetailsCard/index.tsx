/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import { t } from 'i18next';
import React, { FC, useContext, useMemo, useRef, useState } from 'react';
import { Animated, ScrollView, TouchableOpacity } from 'react-native';
import { Div, Icon, Tag, Text, ThemeContext } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { Episode, Serie } from '~/services/TVMazeApi/types/Serie';
import { HtmlText } from '@e-mine/react-native-html-text';

import fonts from '~/shared/theme/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EpisodeModal } from '~/components/organisms/EpisodeModal';
import { SessionCollapse } from '~/components/atoms/SessionCollapse';
import { useAppDispatch, useAppSelector } from '~/redux/AppStore';
import {
  deleteFavoriteAction,
  getIsSerieFavoriteThunk,
  setSerieAsFavoriteThunk,
} from '~/redux/actions/FavoriteActions';

interface SerieDetailsCardProps {
  serie: Serie;
}

export const SerieDetailsCard: FC<SerieDetailsCardProps> = ({ serie }) => {
  const offset = useRef(new Animated.Value(0)).current;
  const { theme } = useContext(ThemeContext);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | undefined>();
  const {
    tvSerie: { selectedSerieSeasons },
    favorite: { favorites },
  } = useAppSelector(state => state);
  const dispatcher = useAppDispatch();

  const isFavorite = useMemo(
    () => dispatcher(getIsSerieFavoriteThunk(serie.id)),
    [favorites],
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatcher(deleteFavoriteAction({ serieId: serie.id }));
    } else {
      dispatcher(setSerieAsFavoriteThunk(serie));
    }
  };

  const renderContent = () => {
    return (
      <Div mt={12} flex={1}>
        <EpisodeModal
          episode={selectedEpisode}
          onClosePress={() => {
            setSelectedEpisode(undefined);
          }}
          visible={!!selectedEpisode}
        />
        <Div m={20}>
          <Div
            mb={20}
            alignItems="center"
            justifyContent="space-between"
            flexDir="row">
            <Text fontSize={24} fontFamily={fonts.urbanist.bold}>
              {serie?.name}
            </Text>
            <TouchableOpacity onPress={handleFavorite}>
              <Icon
                fontSize={24}
                color="red"
                fontFamily="FontAwesome"
                name={isFavorite ? 'heart' : 'heart-o'}
              />
            </TouchableOpacity>
          </Div>
          {serie?.schedule?.days && serie?.schedule?.time && (
            <Div>
              <Div flexDir="row" mb={20}>
                <Icon name="clock" fontFamily="SimpleLineIcons" fontSize={20} />
                <Text fontSize={14} fontFamily={fonts.urbanist.bold} ml={6}>
                  {serie?.schedule?.days.join(' | ')} - {serie?.schedule?.time}{' '}
                </Text>
              </Div>
            </Div>
          )}
          <HtmlText
            style={{ color: theme.name === 'light' ? '#1a202c' : '#FFFFFF' }}>
            {serie?.summary}
          </HtmlText>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {serie?.genres.map(item => (
              <Tag
                my={20}
                mr={20}
                borderWidth={1}
                borderColor="red"
                bg="transparent"
                fontFamily={fonts.urbanist.bold}
                key={item}>
                {item}
              </Tag>
            ))}
          </ScrollView>
          <Text fontSize={24} mb={20} fontFamily={fonts.urbanist.bold}>
            {t(TranslationsKeys.Episodes).toString()}
          </Text>
          {selectedSerieSeasons.map(season => (
            <SessionCollapse
              key={`season-${season?.season}`}
              season={season?.season}
              data={season?.episodes}
              onEpisodePress={episode => setSelectedEpisode(episode)}
            />
          ))}
        </Div>
      </Div>
    );
  };

  return (
    <Div flex={1}>
      <AnimatedHeader image={serie?.image?.medium} animatedValue={offset} />
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: HEADER_HEIGHT,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={5}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}>
        {renderContent()}
      </ScrollView>
    </Div>
  );
};

const HEADER_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 100;

const AnimatedHeader = ({ animatedValue, image }: any) => {
  const insets = useSafeAreaInsets();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
      }}>
      <Animated.Image
        source={{ uri: image }}
        resizeMode="cover"
        style={[
          {
            height: HEADER_HEIGHT,
            width: '100%',
          },
          ,
          { height: headerHeight },
        ]}
      />
    </Animated.View>
  );
};
