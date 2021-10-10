import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'speedometer' },
    { title: 'Account', url: '/folder/Account', icon: 'person' },
    { title: 'Subscriptions', url: '/folder/Subscription', icon: 'card' },
    { title: 'Settings', url: '/folder/Settings', icon: 'settings' },
    { title: 'Log Out', url: '/folder/Logout', icon: 'log-out' },
  ];

  constructor() {}
}

