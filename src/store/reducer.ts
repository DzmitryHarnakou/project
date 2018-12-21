import { DemoActions, DemoActionsType } from './actions';
import { DemoState } from './types';
import { initial } from './initial';

type State = DemoState;

export const demoReducer = (state: State = initial, action: DemoActions): State => {
  switch (action.type) {

    case DemoActionsType.GetMovieList: {
      return {
        ...state,
        error: undefined,
        isProcessing: true,
      }
    }

    case DemoActionsType.GetMovieListSuccess: {
      return {
        ...state,
        movieList: action.payload,
        isProcessing: false,
      }
    }

    case DemoActionsType.GetMovieListError: {
      return {
        ...state,
        error: action.payload,
        isProcessing: false
      }
    }

    default:
      return state;
  }
}