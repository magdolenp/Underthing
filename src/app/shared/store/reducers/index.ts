import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { monsterTableReducer } from './monster-table.reducer';
import { routerReducer } from '@ngrx/router-store';
import { diceReducer } from './dice.reducer';
import { spellTableReducer } from './spell-table.reducer';

export const REDUCERS: ActionReducerMap<AppStateModel> = {
  monsterTable: monsterTableReducer,
  spellTable: spellTableReducer,
  router: routerReducer,
  dice: diceReducer,
};
