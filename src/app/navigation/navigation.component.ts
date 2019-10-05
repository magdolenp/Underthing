import { Component } from '@angular/core';

interface MenuSection {
  name: string;
  section: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  readonly menuSections: MenuSection[] = [
    { name: 'Calculators', section: 'calc' },
    { name: 'About', section: 'about' },
  ];

  constructor() {}
}
