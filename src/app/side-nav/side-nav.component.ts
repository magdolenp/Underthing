import { Component } from '@angular/core';
import { RoutePaths } from '../../app.utils';

interface MenuSection {
  name: string;
  link: string;
  icon?: string;
  subsection?: MenuSection[];
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
      name: 'Classes',
      link: RoutePaths.Classes,
      icon: 'fas fa-user-tag',
      subsection: [
        {
          name: 'Barbarian',
          link: `${RoutePaths.Classes}/${RoutePaths.Barbarian}`,
        },
        { name: 'Bard', link: `${RoutePaths.Classes}/${RoutePaths.Bard}` },
        { name: 'Cleric', link: `${RoutePaths.Classes}/${RoutePaths.Cleric}` },
        { name: 'Druid', link: `${RoutePaths.Classes}/${RoutePaths.Druid}` },
        {
          name: 'Fighter',
          link: `${RoutePaths.Classes}/${RoutePaths.Fighter}`,
        },
        { name: 'Monk', link: `${RoutePaths.Classes}/${RoutePaths.Monk}` },
        {
          name: 'Paladin',
          link: `${RoutePaths.Classes}/${RoutePaths.Paladin}`,
        },
        { name: 'Ranger', link: `${RoutePaths.Classes}/${RoutePaths.Ranger}` },
        { name: 'Rogue', link: `${RoutePaths.Classes}/${RoutePaths.Rogue}` },
        {
          name: 'Sorcerer',
          link: `${RoutePaths.Classes}/${RoutePaths.Sorcerer}`,
        },
        {
          name: 'Warlock',
          link: `${RoutePaths.Classes}/${RoutePaths.Warlock}`,
        },
        { name: 'Wizard', link: `${RoutePaths.Classes}/${RoutePaths.Wizard}` },
      ],
    },
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
