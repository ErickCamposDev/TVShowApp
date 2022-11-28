import React, { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import fonts from '~/shared/theme/fonts';

interface EpisodeInfoProps {
  season: number;
  episodeNumber: number;
  episodeName: string;
}

const EpisodeInfo: FC<EpisodeInfoProps> = ({
  season,
  episodeName,
  episodeNumber,
}) => {
  return (
    <Div bg="gray100">
      <Text color="gray900" fontSize={20} fontFamily={fonts.urbanist.bold}>
        S{season} - E{episodeNumber} - {episodeName}{' '}
      </Text>
    </Div>
  );
};

export { EpisodeInfo };
