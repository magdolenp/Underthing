import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface SelectInterface<T = string> {
  value: T;
  viewValue: string;
}

@Component({
  selector: 'app-dice-thrower',
  templateUrl: './dice-thrower.component.html',
  styleUrls: ['./dice-thrower.component.scss'],
})
export class DiceThrowerComponent {
  diceForm: FormGroup;
  result: number;

  readonly numberOfDices: SelectInterface<number>[] = [...Array(20).keys()]
    .map(dice => dice + 1)
    .map(item => ({ value: item, viewValue: String(item) }));
  readonly diceType: SelectInterface<number>[] = [4, 6, 8, 10, 12, 20].map(
    item => ({ value: item, viewValue: String(item) }),
  );

  constructor(private readonly fb: FormBuilder) {
    this.diceForm = this.fb.group({
      numberOfDices: [1, Validators.required],
      diceType: [6, Validators.required],
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
