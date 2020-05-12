import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from '../app.utils';
import { HomeComponent } from './content/home/home.component';
import { CalculatorsComponent } from './content/calculators/calculators.component';
import { WorldComponent } from './content/world/world.component';
import { MonstersComponent } from './content/monsters/monsters.component';
import { SpellsComponent } from './content/spells/spells.component';
import { MonsterDetailComponent } from './content/monsters/monster-detail/monster-detail.component';

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
    path: `${RoutePaths.Classes}/:class`,
    loadChildren: () =>
      import('./content/classes/classes.module').then(m => m.ClassesModule),
    data: { title: 'Classes' },
  },
  {
    path: RoutePaths.Calculators,
    component: CalculatorsComponent,
    data: { title: 'Calculators' },
  },
  {
    path: RoutePaths.Dice,
    loadChildren: () =>
      import('./content/dice/dice.module').then(m => m.DiceModule),
    data: { title: 'Dices' },
  },
  {
    path: RoutePaths.Monsters,
    component: MonstersComponent,
    data: { title: 'Monsters' },
  },
  {
    path: `${RoutePaths.Monsters}/:slug`,
    component: MonsterDetailComponent,
    data: { title: 'Monster detail' },
  },
  {
    path: RoutePaths.Spells,
    component: SpellsComponent,
    data: { title: 'Spells' },
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
