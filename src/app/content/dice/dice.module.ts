import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DiceComponent } from './dice.component';
import { diceReducer } from '../../shared/store/reducers/dice.reducer';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: DiceComponent }]),
    StoreModule.forFeature('dice', diceReducer),
    MatTableModule,
  ],
  declarations: [DiceComponent],
  exports: [],
  providers: [],
})
export class DiceModule {}
