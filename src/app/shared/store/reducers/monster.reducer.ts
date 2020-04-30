import { MonsterState } from '../../models/app-state.model';
import { Action, createReducer } from '@ngrx/store';

const initialState: MonsterState = {
  entities: {},
  errors: null,
  loading: false,
  loaded: false,
};
const reducer = createReducer(initialState);

export function monsterReducer(
  state: MonsterState = initialState,
  action: Action,
): MonsterState {
  return reducer(state, action);
}
