import { MonsterModel } from './monster.model';
import { RouterReducerState } from '@ngrx/router-store/src/reducer';
import { DiceModel } from './dice.model';
import { EntityState } from '@ngrx/entity';

export type MonsterTableState = StoreStateSingle<MonsterModel[] | null>;
export type DiceState = EntityStoreState<DiceModel>;
export type MonsterState = StoreState<MonsterModel>;

export interface AppStateModel {
  monsterTable: MonsterTableState;
  router: RouterReducerState;
  dice: DiceState;
}

export interface ErrorModel {
  action: string;
  message: string;
  error: {
    error: string;
    code: number;
  };
}

interface BasicStateProps<T, U = ErrorModel> {
  errors: U | null;
  loading: boolean;
  loaded?: boolean;
  metadata?: T;
}

interface StoreState<T, U = void> extends BasicStateProps<U> {
  entities: { [id: string]: T };
}

interface StoreStateSingle<T, U = void> extends BasicStateProps<U> {
  entity?: T;
}

interface EntityStoreState<T, U = void> extends BasicStateProps<U> {
  data: EntityState<T>;
}
