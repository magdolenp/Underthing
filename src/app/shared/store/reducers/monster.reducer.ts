import { MonsterState } from '../../models/app-state.model';
import { Action } from '@ngrx/store';

const initialState: MonsterState = {
  entities: {},
  errors: null,
  loading: false,
  loaded: false,
};

export function monsterReducer(
  state: MonsterState = initialState,
  action: Action,
): MonsterState {
  return state;
}
