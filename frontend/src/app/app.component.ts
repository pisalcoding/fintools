import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Decode KHQR', url: '/khqr-decode', icon: 'qr-code' },
    // { title: 'Create Wedding Invitation KHQR', url: '/evitation', icon: 'mail' },
    { title: 'Loan Simulator', url: '/loan-simulator', icon: 'calculator' },
  ];
  constructor() {}
}
