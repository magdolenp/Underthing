import { createAction, props } from '@ngrx/store';
import { ErrorModel } from '../../models/app-state.model';

export const errorReport = createAction(
  'errorReport',
  props<{ error: ErrorModel }>(),
);
