export type MonsterState = StoreState<string[]>;

export interface AppStateModel {
  monster: MonsterState;
}

export interface ErrorModel {
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
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
