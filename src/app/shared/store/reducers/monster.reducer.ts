import { MonsterState } from '../../models/app-state.model';

const initialState: MonsterState = {
  entities: {},
  errors: null,
  loading: false,
  loaded: false,
};

export function monsterReducer(
  state: MonsterState = initialState,
  action: null,
): MonsterState {
  return state;
}
