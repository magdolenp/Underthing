import { DiceEnum } from '../enums/dice.enum';

export interface DiceModel {
  type: DiceEnum;
  value: number;
  timestamp: Date;
}
