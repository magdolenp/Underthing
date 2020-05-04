import { diceAdapter } from '../reducers/dice.reducer';
import { AppStateModel, DiceState } from '../../models/app-state.model';
import { createSelector } from '@ngrx/store';
import { DiceModel } from '../../models/dice.model';

const HISTORY_LIST_LENGTH = 8;
const { selectAll } = diceAdapter.getSelectors();

export const $diceState = (state: AppStateModel): DiceState => state.dice;

export const $diceRollsList = createSelector(
  $diceState,
  (state: DiceState): DiceModel[] => selectAll(state.data),
);

export const $diceRollsHistory = createSelector(
  $diceRollsList,
  (dices: DiceModel[]): DiceModel[] =>
    dices
      .sort((a: DiceModel, b: DiceModel) =>
        a.timestamp.getTime() < b.timestamp.getTime()
          ? 1
          : b.timestamp.getTime() < a.timestamp.getTime()
          ? -1
          : 0,
      )
      .slice(0, HISTORY_LIST_LENGTH),
);
