import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  number: number;
  // tslint:disable-next-line:no-input-rename
  @Input('evenNumberInput') currentNumber: {value: number};
  constructor() { }

  ngOnInit(): void {
  }

}
