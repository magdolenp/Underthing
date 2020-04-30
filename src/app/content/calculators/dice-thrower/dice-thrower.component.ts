import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

const MAX_DICES = 20;

export interface SelectInterface<T = string> {
  value: T;
  viewValue: string;
}

export enum DICES {
  D4 = 4,
  D6 = 6,
  D8 = 8,
  D10 = 10,
  D12 = 12,
  D20 = 20,
}

@Component({
  selector: 'app-dice-thrower',
  templateUrl: './dice-thrower.component.html',
  styleUrls: ['./dice-thrower.component.scss'],
})
export class DiceThrowerComponent {
  diceForm: FormGroup;
  result: number;

  readonly numberOfDices: SelectInterface<number>[] = [
    ...Array(MAX_DICES).keys(),
  ]
    .map(dice => dice + 1)
    .map(item => ({ value: item, viewValue: String(item) }));
  readonly diceType: SelectInterface<number>[] = [
    ...Object.values(DICES).filter(dice => typeof dice === 'number'),
  ].map(item => ({ value: item, viewValue: String(item) }));

  constructor(private readonly fb: FormBuilder) {
    this.diceForm = this.fb.group({
      numberOfDices: [1, Validators.required],
      diceType: [DICES.D6, Validators.required],
    });
  }

  throw(): void {
    const dices = this.diceForm.value.numberOfDices;
    const type = this.diceForm.value.diceType;
    if (dices != null && type != null) {
      this.result = [...Array(dices).keys()].reduce(
        (sum, _) => sum + Math.floor(Math.random() * type + 1),
        0,
      );
    }
  }
}
