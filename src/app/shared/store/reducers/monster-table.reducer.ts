import { MonsterTableState } from '../../models/app-state.model';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getAllMonstersAction,
  getAllMonstersActionSuccess,
} from '../actions/monster-table.action';
import { filterArray } from '../../utils';

const initialState: MonsterTableState = {
  entity: null,
  errors: null,
  loading: false,
  loaded: false,
};

const reducer = createReducer(
  initialState,
  on(getAllMonstersAction, state => ({
    ...state,
    loading: true,
  })),
  on(getAllMonstersActionSuccess, (state, { monsters }) => ({
    ...state,
    loading: false,
    loaded: true,
    entity: filterArray(monsters || []),
  })),
);

export function monsterTableReducer(
  state: MonsterTableState,
  action: Action,
): MonsterTableState {
  return reducer(state, action);
}
