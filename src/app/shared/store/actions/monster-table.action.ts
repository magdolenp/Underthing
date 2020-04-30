import { createAction, props } from '@ngrx/store';
import { MonsterModel } from '../../models/monster.model';

export const getAllMonstersAction = createAction(
  'getAllMonstersAction',
  (fields: string = 'slug,name,type,size,challenge_rating', limit: number = 2000, ordering: string = 'slug'): { params: string } => ({
    params: `?fields=${fields}&limit=${limit}&ordering=${ordering}`,
  }),
);
export const getAllMonstersActionSuccess = createAction(
  'getAllMonstersActionSuccess',
  props<{ monsters: Partial<MonsterModel[]> }>(),
);
