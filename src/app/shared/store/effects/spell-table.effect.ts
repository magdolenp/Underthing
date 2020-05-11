import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import {
  filter,
  map,
  withLatestFrom,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { TableModel } from '../../models/table.model';
import { of } from 'rxjs';
import { errorReport } from '../actions/util.action';
import { AppStateModel } from '../../models/app-state.model';
import { HttpClient } from '@angular/common/http';
import { RoutePaths } from '../../../../app.utils';
import {
  getAllSpellsAction,
  getAllSpellsActionSuccess,
} from '../actions/spell-table.action';
import { ApiSpellTable } from '../../models/spell.model';
import { $spellTableLoaded } from '../selectors/spell-table.selector';
import { normalizeSpells } from '../../utils';

const API_URL = 'https://api.open5e.com';

@Injectable()
export class SpellTableEffect {
  retrieveAllSpells$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter(
        ({
          payload: {
            event: { url },
          },
        }) => url === `/${RoutePaths.Spells}`,
      ),
      map(() => getAllSpellsAction()),
    ),
  );

  getAllSpells$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllSpellsAction),
      withLatestFrom(this.store.pipe(select($spellTableLoaded))),
      filter(([_, loaded]) => !loaded),
      switchMap(([{ params }]) =>
        this.httpClient
          .get<TableModel<ApiSpellTable>>(`${API_URL}/spells/${params}`)
          .pipe(
            map(({ results }) =>
              getAllSpellsActionSuccess({ spells: normalizeSpells(results) }),
            ),
            catchError(error =>
              of(
                errorReport({
                  error: {
                    action: 'getAllSpellsAction',
                    message: 'Could not get all spells',
                    error,
                  },
                }),
              ),
            ),
          ),
      ),
    ),
  );

  constructor(
    private readonly store: Store<AppStateModel>,
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient,
  ) {}
}
