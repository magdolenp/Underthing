import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import {
  getAllMonstersAction,
  getAllMonstersActionSuccess,
} from '../actions/monster-table.action';
import {
  switchMap,
  map,
  catchError,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { errorReport } from '../actions/util.action';
import { MonsterModel } from '../../models/monster.model';
import { $monsterTableLoaded } from '../selectors/monster-table.selector';
import { Store, select } from '@ngrx/store';
import { AppStateModel } from '../../models/app-state.model';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { TableModel } from '../../models/table.model';

const API_URL = 'https://api.open5e.com';

@Injectable()
export class MonsterTableEffect {
  retrieveAllMonsters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      filter(
        ({
          payload: {
            event: { url },
          },
        }) => url === '/monsters',
      ),
      map(() => getAllMonstersAction()),
    ),
  );

  getAllMonsters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllMonstersAction),
      withLatestFrom(this.store.pipe(select($monsterTableLoaded))),
      filter(([_, loaded]) => !loaded),
      switchMap(([{ params }]) =>
        this.httpClient
          .get<TableModel<MonsterModel>>(`${API_URL}/monsters/${params}`)
          .pipe(
            map(({ results }) =>
              getAllMonstersActionSuccess({ monsters: results }),
            ),
            catchError(error =>
              of(
                errorReport({
                  error: {
                    action: 'getAllMonstersAction',
                    message: 'Could not get all monsters',
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
