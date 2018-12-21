import { Action } from '@ngrx/store';

export enum DemoActionsType {
  GetMovieList = '[demo] GetMovieList',
  GetMovieListSuccess = '[demo] GetMovieList (Success)',
  GetMovieListError = '[demo] GetMovieList (Error)',
}

export class GetMovieList implements Action {
  public type = DemoActionsType.GetMovieList;

  public constructor(public payload?: any) { }
}

export class GetMovieListSuccess implements Action {
  public type = DemoActionsType.GetMovieListSuccess;

  public constructor(public payload?: any) { }
}

export class GetMovieListError implements Action {
  public type = DemoActionsType.GetMovieListError;

  public constructor(public payload?: string) { }
}

export type DemoActions =
  | GetMovieList
  | GetMovieListSuccess
  | GetMovieListError;