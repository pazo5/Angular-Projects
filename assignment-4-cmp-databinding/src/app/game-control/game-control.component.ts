import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
      }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
