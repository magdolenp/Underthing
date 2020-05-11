import { createAction, props } from '@ngrx/store';
import { SpellModel } from '../../models/spell.model';

export const getAllSpellsAction = createAction(
  'getAllSpellsAction',
  (
    fields: string = 'slug,name,components,level_int,dnd_class,duration',
    limit: number = 2000,
    ordering: string = 'slug',
  ): { params: string } => ({
    params: `?fields=${fields}&limit=${limit}&ordering=${ordering}`,
  }),
);
export const getAllSpellsActionSuccess = createAction(
  'getAllSpellsActionSuccess',
  props<{ spells: Partial<SpellModel[]> }>(),
);
