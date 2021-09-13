import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  number: number;
  // tslint:disable-next-line:no-input-rename
  @Input('oddNumberInput') currentNumber: {value: number};
  constructor() { }

  ngOnInit(): void {
  }

}
