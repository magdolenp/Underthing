import { MonsterModel } from './monster.model';
import { RouterReducerState } from '@ngrx/router-store/src/reducer';

export type MonsterTableState = StoreStateSingle<MonsterModel[] | null>;
export type MonsterState = StoreState<MonsterModel>;

export interface AppStateModel {
  monsterTable: MonsterTableState;
  router: RouterReducerState;
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
