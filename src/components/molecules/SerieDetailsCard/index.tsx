/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import { t } from 'i18next';
import React, { FC, useContext, useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { Div, Icon, Tag, Text, ThemeContext } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { CustomCollapse } from '~/components/atoms/CustomCollapse';
import { Serie } from '~/services/TVMazeApi/types/Serie';
import { HtmlText } from '@e-mine/react-native-html-text';

import fonts from '~/shared/theme/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EpisodeModal } from '~/components/organisms/EpisodeModal';

interface SerieDetailsCardProps {
  serie: Serie;
}

export const SerieDetailsCard: FC<SerieDetailsCardProps> = ({ serie }) => {
  const offset = useRef(new Animated.Value(0)).current;
  const { theme } = useContext(ThemeContext);

  const renderContent = () => {
    return (
      <Div mt={12} flex={1}>
        <EpisodeModal visible />
        <Div m={20}>
          <Text fontSize={24} mb={20} fontFamily={fonts.urbanist.bold}>
            {serie.name}
          </Text>
          {serie.schedule.days && serie.schedule.time && (
            <Div>
              <Div flexDir="row" mb={20}>
                <Icon name="clock" fontFamily="SimpleLineIcons" fontSize={20} />
                <Text fontSize={14} fontFamily={fonts.urbanist.bold} ml={6}>
                  {serie.schedule.days.join(' | ')} - {serie.schedule.time}{' '}
                </Text>
              </Div>
            </Div>
          )}
          <HtmlText
            style={{ color: theme.name === 'light' ? '#1a202c' : '#FFFFFF' }}>
            {serie.summary}
          </HtmlText>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {serie.genres.map(item => (
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
          <Text fontSize={24} mb={20} fontFamily={fonts.urbanist.bold}>{`${t(
            TranslationsKeys.Episodes,
          )}`}</Text>
          <CustomCollapse />
          <CustomCollapse />
          <CustomCollapse />
        </Div>
      </Div>
    );
  };

  return (
    <Div flex={1}>
      <AnimatedHeader image={serie.image.original} animatedValue={offset} />
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
