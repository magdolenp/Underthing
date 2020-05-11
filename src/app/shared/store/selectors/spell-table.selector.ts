import { AppStateModel, SpellTableState } from '../../models/app-state.model';
import { createSelector } from '@ngrx/store';

export const $spellTableState = ({
  spellTable,
}: AppStateModel): SpellTableState => spellTable;

export const $spellTableLoaded = createSelector(
  $spellTableState,
  ({ loaded }): boolean => loaded || false,
);

export const $spellTableData = createSelector(
  $spellTableState,
  ({ entity }) => entity,
);
