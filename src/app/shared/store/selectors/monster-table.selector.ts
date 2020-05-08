import { AppStateModel, MonsterTableState } from '../../models/app-state.model';
import { createSelector } from '@ngrx/store';

export const $monsterTableState = ({
  monsterTable,
}: AppStateModel): MonsterTableState => monsterTable;

export const $monsterTableLoaded = createSelector(
  $monsterTableState,
  ({ loaded }): boolean => loaded || false,
);

export const $monsterTableData = createSelector(
  $monsterTableState,
  ({ entity }) => entity,
);
