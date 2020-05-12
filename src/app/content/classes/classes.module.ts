import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ClassDetailComponent } from './class-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: ClassDetailComponent }]),
    MatTableModule,
  ],
  declarations: [ClassDetailComponent],
  exports: [],
  providers: [],
})
export class ClassesModule {}
