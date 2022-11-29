import React, { createRef, FC, useEffect } from 'react';
import { Button, Div, DropdownRef, Text } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '../assets/i18n';
import { DarkModeToggle, Header, I18nDropdown } from '../components';
import { useAppDispatch } from '~/redux/AppStore';
import { getSampleThunk } from '~/redux/actions/SampleActions';

export const Settings: FC = ({}) => {
  const dropdownRef = createRef<DropdownRef>();

  const dispatcher = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatcher(getSampleThunk());
  }, []);

  return (
    <Div flex={1}>
      <Header>{t(TranslationsKeys.Settings)}</Header>
      <Div mt={20} px={24}>
        <DarkModeToggle />
        <Div
          mt={20}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between">
          <Text fontSize={16}>{t(TranslationsKeys.AppLanguage)}</Text>
          <Button bg="red" onPress={() => dropdownRef.current?.open()}>
            {t(TranslationsKeys.Select)}
          </Button>
        </Div>
        <I18nDropdown dropdownRef={dropdownRef} />
      </Div>
    </Div>
  );
};
