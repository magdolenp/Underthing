import { Component } from '@angular/core';
import { RoutePaths } from '../../app.utils';

interface MenuSection {
  name: string;
  link: RoutePaths;
  icon: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  readonly menuSections: MenuSection[] = [
    { name: 'Home', link: RoutePaths.Home, icon: 'fab fa-d-and-d' },
    { name: 'World', link: RoutePaths.World, icon: 'fas fa-globe-europe' },
    {
      name: 'Calculators',
      link: RoutePaths.Calculators,
      icon: 'fas fa-calculator',
    },
    { name: 'Dice', link: RoutePaths.Dice, icon: 'fas fa-dice' },
    { name: 'Monsters', link: RoutePaths.Monsters, icon: 'fas fa-dragon' },
    { name: 'Spells', link: RoutePaths.Spells, icon: 'fas fa-scroll' },
  ];
}
