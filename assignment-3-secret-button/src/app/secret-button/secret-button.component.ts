import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-button',
  templateUrl: './secret-button.component.html',
  styleUrls: ['./secret-button.component.css']
})
export class SecretButtonComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date() + ', click number: ' + (this.log.length + 1));
  }
}
