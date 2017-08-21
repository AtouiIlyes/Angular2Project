import {Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <menu-list ></menu-list>
    <hr>
    <router-outlet ></router-outlet>

    `

})
export class AppComponent {

}
