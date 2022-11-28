import { RouteProp, useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Div } from 'react-native-magnus';
import { SerieDetailsCard } from '~/components/molecules/SerieDetailsCard';
import { RootStackParamList, SCREENS } from '~/interfaces';

export const SerieDetails: FC<
  StackScreenProps<RootStackParamList, SCREENS.SERIE_DETAILS> | undefined
> = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, SCREENS.SERIE_DETAILS>>();
  const serie = route.params.serie;
  return (
    <Div flex={1}>
      <SerieDetailsCard serie={serie} />
    </Div>
  );
};
