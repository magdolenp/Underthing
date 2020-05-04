import { Action, createReducer, on } from '@ngrx/store';
import { DiceState } from '../../models/app-state.model';
import { diceRollAction } from '../actions/dice.action';
import { DiceModel } from '../../models/dice.model';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { rollDice } from '../../utils';

export const getDiceId = (dice: DiceModel): number => dice.timestamp.getTime();

export const diceAdapter: EntityAdapter<DiceModel> = createEntityAdapter<
  DiceModel
>({
  selectId: getDiceId,
});

const initialState: DiceState = {
  data: diceAdapter.getInitialState(),
  errors: null,
  loading: false,
  loaded: false,
};
const reducer = createReducer(
  initialState,

  on(diceRollAction, (state, { diceType, timestamp }) => ({
    ...state,
    data: diceAdapter.addOne(
      { type: diceType, value: rollDice(diceType), timestamp },
      state.data,
    ),
  })),
);

export function diceReducer(
  state: DiceState = initialState,
  action: Action,
): DiceState {
  return reducer(state, action);
}
