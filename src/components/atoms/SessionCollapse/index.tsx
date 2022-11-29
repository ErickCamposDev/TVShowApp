import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { Collapse, Text } from 'react-native-magnus';
import { TranslationsKeys } from '~/assets/i18n';
import { Episode } from '~/services/TVMazeApi/types/Serie';
import fonts from '~/shared/theme/fonts';

interface SessionCollapseProps {
  data: Episode[];
  season: number;
  onEpisodePress: (episode: Episode) => void;
}

const EPISODE_HEIGHT = 40;
export const SessionCollapse: FC<SessionCollapseProps> = ({
  onEpisodePress,
  season,
  data,
}) => {
  const { t } = useTranslation();
  const EpisodeItem = ({ item, number }: { item: Episode; number: number }) => (
    <TouchableOpacity onPress={() => onEpisodePress(item)}>
      <Text h={EPISODE_HEIGHT}>
        {number} - {item.name}
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
        {`${t(TranslationsKeys.Season)} ${season}`}
      </Collapse.Header>
      <Collapse.Body mb={20} h={EPISODE_HEIGHT * (data.length + 1)}>
        {data.map(item => (
          <EpisodeItem
            key={`episode-${item.id}`}
            number={item.number}
            item={item}
          />
        ))}
      </Collapse.Body>
    </Collapse>
  );
};
