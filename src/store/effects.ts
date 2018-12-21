import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError, delay } from 'rxjs/operators';

import { Observable, of, from } from 'rxjs'

import { AppState } from './store.config';
import { DemoActionsType, GetMovieListSuccess, GetMovieListError } from './actions';
import { AxiosDmitryService } from '../app/services/axios-dmitry.service';
import { apiUrl } from '../app/services/api.config';


@Injectable()
export class DemoEffects {

  public constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private axiosDmitryService: AxiosDmitryService,
    ) { }
    
    getFilmList () {
      return this.axiosDmitryService.getRequest(apiUrl.movieUrl).then(resp =>resp).catch(err => err);
    }

    @Effect()
    public GetMovieList = this.actions.pipe(
    ofType(DemoActionsType.GetMovieList),
      switchMap(() => from(this.getFilmList ()).pipe(
      map((movieList) => new GetMovieListSuccess(movieList)),
      catchError(() => of(new GetMovieListError('get movie-list error(((')))
    )),
  );

  

}

