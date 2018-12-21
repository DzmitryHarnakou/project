import { DemoState } from './types';

type State = DemoState;

export const initial: State = {
  movieList:null,
  isProcessing: false,
  error: undefined,
};