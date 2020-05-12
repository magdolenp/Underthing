import { Component } from '@angular/core';
import { DiceEnum } from '../../shared/enums/dice.enum';
import { select, Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/models/app-state.model';
import { diceRollAction } from '../../shared/store/actions/dice.action';
import { Observable } from 'rxjs';
import { $diceRollsHistory } from '../../shared/store/selectors/dice.selector';
import { DiceModel } from '../../shared/models/dice.model';
import { displayTime } from '../../shared/utils';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

interface DiceButtonModel {
  type: DiceEnum;
  icon: string;
  text: string;
}

const ANIMATION_TIME_IN_MS = 600;

@Component({
  selector: 'app-calculators',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(720deg)' })),
      transition(
        'default => rotated',
        animate(ANIMATION_TIME_IN_MS + 'ms ease-in-out'),
      ),
      transition('* <=> *', animate(0)),
    ]),
  ],
})
export class DiceComponent {
  readonly diceRollsHistory$: Observable<DiceModel[]> = this.store.pipe(
    select($diceRollsHistory),
  );
  displayedColumns: string[] = ['type', 'value', 'timestamp'];
  dices: DiceButtonModel[] = [
    {
      type: DiceEnum.D4,
      icon: 'assets/dices/d4-512.png',
      text: 'D4',
    },
    {
      type: DiceEnum.D6,
      icon: 'assets/dices/d6-512.png',
      text: 'D6',
    },
    {
      type: DiceEnum.D8,
      icon: 'assets/dices/d8-512.png',
      text: 'D8',
    },
    {
      type: DiceEnum.D10,
      icon: 'assets/dices/d10-512.png',
      text: 'D10',
    },
    {
      type: DiceEnum.D12,
      icon: 'assets/dices/d12-512.png',
      text: 'D12',
    },
    {
      type: DiceEnum.D20,
      icon: 'assets/dices/d20-512.png',
      text: 'D20',
    },
  ];
  animations = new Array(this.dices.length).fill(false);

  constructor(private readonly store: Store<AppStateModel>) {}

  // @ts-ignore
  rollDice(type: DiceEnum, diceIndex: number): void {
    this.animations = this.animations.map((_, index) => index === diceIndex);
    this.store.dispatch(
      diceRollAction({ diceType: type, timestamp: new Date() }),
    );
    setTimeout(
      () =>
        (this.animations = this.animations.map((item, index) =>
          index === diceIndex ? false : item,
        )),
      ANIMATION_TIME_IN_MS,
    );
  }

  displayTime(timestamp: Date): string {
    return displayTime(timestamp);
  }
}
