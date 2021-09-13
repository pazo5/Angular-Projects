import { Component } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  template: `<p>ERROR!</p>`,
  styles: [`
  p {
    color: darkred;
    padding: 20px;
    border: 1px solid red;
    background: burlywood;
  }`]
})
export class ErrorAlertComponent {

}
