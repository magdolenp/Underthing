import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
