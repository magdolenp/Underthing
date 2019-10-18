import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonstersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
