import React, { FC, useEffect } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Div } from 'react-native-magnus';
import { SerieDetailsCard } from '~/components/molecules/SerieDetailsCard';
import { RootStackParamList, SCREENS } from '~/interfaces';
import { getEpisodesThunk } from '~/redux/actions/TVSerieActions';
import { useAppDispatch } from '~/redux/AppStore';

export const SerieDetails: FC<
  StackScreenProps<RootStackParamList, SCREENS.SERIE_DETAILS> | undefined
> = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, SCREENS.SERIE_DETAILS>>();
  const serie = route.params.serie;

  const dispatcher = useAppDispatch();

  useEffect(() => {
    dispatcher(getEpisodesThunk(serie.id));
  }, [serie.id]);

  return (
    <Div flex={1}>
      <SerieDetailsCard serie={serie} />
    </Div>
  );
};
