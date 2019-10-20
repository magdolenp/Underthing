import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { monsterReducer } from './monster.reducer';

export const REDUCERS: ActionReducerMap<AppStateModel> = {
  monster: monsterReducer,
};
