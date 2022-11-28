import React, { FC } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Div, Icon, Image, Text } from 'react-native-magnus';
import { EpisodeInfo } from '~/components/atoms/EpisodeInfo';
import { Episode } from '~/services/TVMazeApi/types/Serie';
import { PLACEHOlDER_POSTER } from '~/shared/constants';
import fonts from '~/shared/theme/fonts';
import { addAlpha } from '~/utils';

interface EpisodeModalProps {
  visible: boolean;
  onClosePress: () => void;
  episode: Episode;
}
export const EpisodeModal: FC<EpisodeModalProps> = ({
  visible,
  onClosePress,
  episode,
}) => {
  return (
    <Modal transparent visible={visible}>
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
              uri:
                'https://classic.exame.com/wp-content/uploads/2020/02/how-i-met-your-mother.jpg?quality=70&strip=info&w=1024' ||
                PLACEHOlDER_POSTER,
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
              episodeName="Testand Nome"
              episodeNumber={2}
              season={1}
            />
            <Text
              fontSize={16}
              mt={12}
              mb={6}
              color="gray900"
              fontFamily={fonts.urbanist.bold}>
              Sumary
            </Text>
            <Text color="gray900" fontFamily={fonts.urbanist.medium}>
              {episode?.summary || ''}
            </Text>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};
