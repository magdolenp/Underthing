import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import {
  getAllMonstersAction,
  getAllMonstersActionSuccess,
} from '../actions/monster-table.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { errorReport } from '../actions/util.action';
import { MonsterModel } from '../../models/monster.model';

const API_URL = '';

@Injectable()
export class MonsterTableEffect {
  getAllMonsters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllMonstersAction),
      switchMap(({ params }) =>
        this.httpClient.get<Partial<MonsterModel[]>>(`${API_URL}/monsters/${params}`).pipe(
          map(monsters => getAllMonstersActionSuccess({ monsters })),
          catchError(error =>
            of(
              errorReport({
                error: {
                  path: 'Monsters',
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
    private readonly actions$: Actions,
    private readonly httpClient: HttpClient,
  ) {}
}
