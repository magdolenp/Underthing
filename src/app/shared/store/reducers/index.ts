import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { monsterTableReducer } from './monster-table.reducer';
import { routerReducer } from '@ngrx/router-store';
import { diceReducer } from './dice.reducer';

export const REDUCERS: ActionReducerMap<AppStateModel> = {
  monsterTable: monsterTableReducer,
  router: routerReducer,
  dice: diceReducer,
};
