import { SpellTableState } from '../../models/app-state.model';
import { createReducer, on, Action } from '@ngrx/store';
import { filterArray } from '../../utils';
import {
  getAllSpellsAction,
  getAllSpellsActionSuccess,
} from '../actions/spell-table.action';

const initialState: SpellTableState = {
  entity: null,
  errors: null,
  loading: false,
  loaded: false,
};

const reducer = createReducer(
  initialState,
  on(getAllSpellsAction, state => ({
    ...state,
    loading: true,
  })),
  on(getAllSpellsActionSuccess, (state, { spells }) => ({
    ...state,
    loading: false,
    loaded: true,
    entity: filterArray(spells || []),
  })),
);

export function spellTableReducer(
  state: SpellTableState,
  action: Action,
): SpellTableState {
  return reducer(state, action);
}
