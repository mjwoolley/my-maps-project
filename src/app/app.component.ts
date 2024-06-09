import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-maps-project';
  lat = 39.95542259919365;
  lng = -75.60517807342492;
  zoom = 8;
}
