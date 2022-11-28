import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Collapse, Text } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';

const EPISODE_HEIGHT = 40;
export const CustomCollapse: FC = () => {
  const episodes = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
  ];
  const EpisodeItem = ({ item, number }: { item: string; number: number }) => (
    <TouchableOpacity>
      <Text h={EPISODE_HEIGHT}>
        {number} - {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Collapse bg="transparent">
      <Collapse.Header
        bg="transparent"
        active
        fontFamily={fonts.urbanist.bold}
        fontSize={16}
        p="xl"
        px="none">
        Temporada 1
      </Collapse.Header>

      <Collapse.Body mb={20} h={EPISODE_HEIGHT * (episodes.length + 1)}>
        {episodes.map((item, i) => (
          <EpisodeItem number={i + 1} item={item} />
        ))}
      </Collapse.Body>
    </Collapse>
  );
};
