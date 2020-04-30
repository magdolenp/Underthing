import { ActionReducerMap } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { monsterTableReducer } from './monster-table.reducer';

export const REDUCERS: ActionReducerMap<AppStateModel> = {
  monsterTable: monsterTableReducer,
};
