import { Component } from '@angular/core';
import { RoutePaths } from '../../app.utils';

interface MenuSection {
  name: string;
  link: RoutePaths;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  readonly menuSections: MenuSection[] = [
    { name: 'Home', link: RoutePaths.Home },
    { name: 'World', link: RoutePaths.World },
    { name: 'Calculators', link: RoutePaths.Calculators },
    { name: 'Test', link: RoutePaths.Test },
    { name: 'About', link: RoutePaths.About },
  ];

}
