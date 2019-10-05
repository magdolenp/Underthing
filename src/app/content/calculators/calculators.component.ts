import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss'],
})
export class CalculatorsComponent {
  groupsForm: FormGroup;
  groupForm: FormArray;
  title = 'DnDCalculator';

  constructor(private readonly fb: FormBuilder) {
    this.groupsForm = this.fb.group({
      groups: this.fb.array([
        this.fb.group({
          name: '',
          numberOfEnemies: ['', Validators.required],
          ac: ['', Validators.required],
          bonus: ['', Validators.required],
          attackMin: ['', Validators.required],
          attackMax: ['', Validators.required],
          result: { value: '', disabled: true },
        }),
      ]),
    });
  }

  get formData() {
    return this.groupsForm.get('groups') as FormArray;
  }

  calculateDamage(index: number): void {
    const form = (this.groupsForm.get('groups') as FormArray).at(
      index,
    ) as FormGroup;
    const numberOfEnemies = Number(form.get('numberOfEnemies').value);
    const ac = Number(form.get('ac').value);
    const bonus = Number(form.get('bonus').value);
    const attackMin = Number(form.get('attackMin').value);
    const attackMax = Number(form.get('attackMax').value);

    let attackers = 0;
    let damage = 0;
    let crit = 0;
    let fail = 0;

    for (let i = 0; i < numberOfEnemies; i++) {
      const attackChance: number = this.dc20() + bonus;
      let isCrit = false;
      if (attackChance === 20) {
        crit++;
        isCrit = true;
      } else if (attackChance === 1) {
        fail++;
      }
      if (attackChance - ac > 0) {
        // is attack
        const hit = this.damage(attackMin, attackMax);
        attackers++;
        damage += hit;
        if (isCrit) {
          damage += hit;
        }
      }
    }

    form
      .get('result')
      .setValue(
        'ATTACK: ' +
          attackers +
          ' / ' +
          numberOfEnemies +
          ' (CRIT: ' +
          crit +
          ' FAIL: ' +
          fail +
          ') -> DAMAGE: ' +
          damage,
      );
  }

  addGroup(): void {
    (this.groupsForm.get('groups') as FormArray).push(
      this.fb.group({
        name: '',
        numberOfEnemies: ['', Validators.required],
        ac: ['', Validators.required],
        bonus: ['', Validators.required],
        attackMin: ['', Validators.required],
        attackMax: ['', Validators.required],
        result: { value: '', disabled: true },
      }),
    );
  }

  deleteGroup(index: number): void {
    (this.groupsForm.get('groups') as FormArray).removeAt(index);
  }

  dc20(): number {
    return Math.floor(Math.random() * 20 + 1);
  }

  damage(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
