import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { DemoEffects } from './effects';

import { demoReducer } from './reducer';

const reducers = {
  demo: demoReducer
}

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DemoEffects]),
    StoreDevtoolsModule.instrument({
      // maxAge: 25,
      // logOnly: true
    })
  ]
})
export class DemoStoreModule { }