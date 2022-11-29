import React, { FC } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { Div } from 'react-native-magnus';
import { useAppSelector } from '~/redux/AppStore';
import { addAlpha } from '~/utils';

interface LoadingModalProps {}

export const LoadingModal: FC<LoadingModalProps> = ({}) => {
  const { isLoading } = useAppSelector(state => state.loading);
  return (
    <Modal transparent visible={isLoading}>
      <Div
        justifyContent="center"
        alignItems="center"
        flex={1}
        bg={addAlpha('#000000', 0.7)}>
        <Div
          justifyContent="center"
          alignItems="center"
          bg="gray100"
          rounded={4}
          w={100}
          h={100}>
          <ActivityIndicator size="large" />
        </Div>
      </Div>
    </Modal>
  );
};
