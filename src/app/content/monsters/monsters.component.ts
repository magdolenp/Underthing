import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { AppStateModel } from '../../shared/models/app-state.model';
import { combineLatest } from 'rxjs';
import {
  $monsterTableLoaded,
  $monsterTableData,
} from '../../shared/store/selectors/monster-table.selector';
import { filter, take } from 'rxjs/operators';
import { MonsterModel } from '../../shared/models/monster.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../app.utils';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonstersComponent implements AfterViewInit {
  readonly displayedColumns: string[] = [
    'name',
    'type',
    'size',
    'challenge_rating',
  ];
  dataSource: MatTableDataSource<Partial<MonsterModel>>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private readonly store: Store<AppStateModel>,
    private readonly router: Router,
  ) {}

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClick(row: { slug: string }): void {
    this.router.navigateByUrl(`${RoutePaths.Monsters}/${row.slug}`);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      combineLatest(
        this.store.pipe(select($monsterTableLoaded)),
        this.store.pipe(select($monsterTableData)),
      )
        .pipe(
          filter(([loaded, data]) => loaded && data != null),
          take(1),
        )
        .subscribe(([_, data]) => {
          if (data != null) {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        });
    });
  }
}
