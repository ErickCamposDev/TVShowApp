import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { WelcomeBackground } from '~/assets/images';
import fonts from '~/shared/theme/fonts';

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
  return (
    <ImageBackground
      style={styles.backgroundImage}
      blurRadius={8}
      source={WelcomeBackground}>
      <Text fontSize={40} textAlign="center" fontFamily={fonts.urbanist.bold}>
        Welcome to the TV show App
      </Text>
      <Button bg="red" w={'70%'} alignSelf="center" mt={40}>
        Get Started
      </Button>
    </ImageBackground>
  );
};

export { Welcome };
