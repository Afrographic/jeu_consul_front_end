import { Component } from '@angular/core';
import { route_transition } from './utils/animation';
import { set_view_port } from './services/screen_view_port';
import { DB } from './services/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [route_transition]
})
export class AppComponent {
  title = 'Yoba';

  set_view_port_proxy() {
    set_view_port();
    DB.init();
  }

}
