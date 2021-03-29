import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonsterDetailComponent {
  readonly monsterStat: { key: string; value: number }[] = [
    { key: 'strength', value: 24 },
    { key: 'dexterity', value: 19 },
    { key: 'constitution', value: 22 },
    { key: 'intelligence', value: 16 },
    { key: 'wisdom', value: 15 },
    { key: 'charisma', value: 18 },
  ];
  statModifier(stat: number): string {
    const modifier = Math.floor((stat - 10) / 2);
    return `${modifier < 0 ? '' : '+'}${modifier}`;
  }
}
