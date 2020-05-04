import { createAction, props } from '@ngrx/store';
import { DiceEnum } from '../../enums/dice.enum';

export const diceRollAction = createAction(
  'diceRollAction',
  props<{ diceType: DiceEnum; timestamp: Date }>(),
);
