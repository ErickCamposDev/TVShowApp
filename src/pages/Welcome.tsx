import React, { FC } from 'react';
import { t } from 'i18next';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { WelcomeBackground } from '~/assets/images';
import { SCREENS } from '~/interfaces';
import fonts from '~/shared/theme/fonts';
import { useAppNavigation } from '~/hooks';

interface WelcomeProps {}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const Welcome: FC<WelcomeProps> = ({}) => {
  const navigation = useAppNavigation();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={8}
      source={WelcomeBackground}>
      <Text
        color="gray100"
        fontSize={40}
        textAlign="center"
        fontFamily={fonts.urbanist.bold}>
        {`${t(TranslationsKeys.Welcome)}`}
      </Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.HOME_TAB)}
        bg="red"
        w={'70%'}
        alignSelf="center"
        mt={40}>
        Get Started
      </Button>
    </ImageBackground>
  );
};

export { Welcome };
