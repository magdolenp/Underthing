import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from '../app.utils';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: RoutePaths.Wiki,
    component: ContentComponent,
    data: { title: 'Wiki' },
  },
  {
    path: RoutePaths.Calculators,
    component: ContentComponent,
    data: { title: 'Calculators' },
  },
  {
    path: RoutePaths.Test,
    component: ContentComponent,
    data: { title: 'Test' },
  },
  {
    path: RoutePaths.About,
    component: ContentComponent,
    data: { title: 'About' },
  },
  {
    path: '',
    component: ContentComponent,
    data: { title: 'Home' },
  },
  {
    path: '**',
    redirectTo: RoutePaths.Home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
