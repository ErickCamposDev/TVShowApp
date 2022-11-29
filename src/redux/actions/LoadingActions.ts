import { createAction } from '@reduxjs/toolkit';
import { withPayloadType } from '../utils';

export const setLoadingAction = createAction(
  'SET_GLOBAL_LOADING',
  withPayloadType<boolean>(),
);
