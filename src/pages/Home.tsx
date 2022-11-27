import React, {createRef, FC, useEffect} from 'react';
import {Div, DropdownRef, Text} from 'react-native-magnus';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '~/redux/AppStore';
import {getSampleThunk} from '~/redux/actions/SampleActions';
import {SerieCard} from '~/components/atoms/SerieCard';

export const Home: FC = ({ }) => {
  const dropdownRef = createRef<DropdownRef>();

  //Get state from store
  const {sample1} = useAppSelector(state => state.sample);
  //Get dispatcher, to dispatch thunk functions Creators
  const dispatcher = useAppDispatch();
  const {t} = useTranslation();

  useEffect(() => {
    dispatcher(getSampleThunk());
  }, []);

  return (
    <Div px={20} flex={1}>
      <SerieCard
        name='La casa de papel La casa de papelLa casa de papel e papel La casa de papelLa casa de pape'
        onPress={() => { }}
      />
    </Div>
  );
};
