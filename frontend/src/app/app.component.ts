import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Decode KHQR', url: '/khqr-decode', icon: 'qr-code' },
  ];
  constructor() {}
}
