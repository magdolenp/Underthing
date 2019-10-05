import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from '../app.utils';
import { HomeComponent } from './content/home/home.component';
import { CalculatorsComponent } from './content/calculators/calculators.component';
import { TestingComponent } from './content/testing/testing.component';
import { AboutComponent } from './content/about/about.component';
import { WorldComponent } from './content/world/world.component';

const routes: Routes = [
  {
    path: RoutePaths.Home,
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: RoutePaths.World,
    component: WorldComponent,
    data: { title: 'World' },
  },
  {
    path: RoutePaths.Calculators,
    component: CalculatorsComponent,
    data: { title: 'Calculators' },
  },
  {
    path: RoutePaths.Test,
    component: TestingComponent,
    data: { title: 'Test' },
  },
  {
    path: RoutePaths.About,
    component: AboutComponent,
    data: { title: 'About' },
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
