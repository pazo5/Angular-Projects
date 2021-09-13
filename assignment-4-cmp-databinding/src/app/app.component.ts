import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalStarted(sentNumber: number) {
    if ((sentNumber % 2) === 0) {
      this.evenNumbers.push(sentNumber);
    } else {
      this.oddNumbers.push(sentNumber);
    }
  }
}
