import React, { FC } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Div, Icon, Image, Text } from 'react-native-magnus';
import { EpisodeInfo } from '~/components/atoms/EpisodeInfo';
import { Episode } from '~/services/TVMazeApi/types/Serie';
import { PLACEHOlDER_POSTER } from '~/shared/constants';
import fonts from '~/shared/theme/fonts';
import { HtmlText } from '@e-mine/react-native-html-text';
import { addAlpha } from '~/utils';
import { colors } from '~/shared/theme/themes';

interface EpisodeModalProps {
  visible: boolean;
  onClosePress: () => void;
  episode?: Episode;
}
export const EpisodeModal: FC<EpisodeModalProps> = ({
  visible,
  onClosePress,
  episode,
}) => {
  return (
    <Modal onDismiss={onClosePress} transparent visible={visible}>
      <Div
        flex={1}
        bg={addAlpha('#000000', 0.5)}
        px={20}
        justifyContent="center">
        <Div h={'60%'} shadow="md" rounded={12} bg={'gray100'}>
          <Div
            w={'100%'}
            h={200}
            zIndex={2}
            position="absolute"
            bg={addAlpha('#000000', 0.4)}
          />
          <Image
            source={{
              uri: episode?.image?.medium || PLACEHOlDER_POSTER,
            }}
            w={'100%'}
            h={200}
          />
          <Div
            zIndex={3}
            position="absolute"
            h={30}
            bg="transparent"
            right={20}
            top={20}>
            <TouchableOpacity onPress={onClosePress}>
              <Icon
                color="white"
                name="close"
                fontFamily="MaterialIcons"
                fontSize={35}
              />
            </TouchableOpacity>
          </Div>
          <Div bg="gray100" p={20} flex={1}>
            <EpisodeInfo
              episodeName={episode?.name}
              episodeNumber={episode?.number}
              season={episode?.season}
            />
            <Text
              fontSize={16}
              mt={12}
              mb={6}
              color="gray900"
              fontFamily={fonts.urbanist.bold}>
              Sumary
            </Text>
            <HtmlText style={{ color: colors.strongGray }}>
              {episode?.summary || ''}
            </HtmlText>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};
