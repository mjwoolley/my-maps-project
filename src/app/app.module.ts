import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaXVWhgDGAO245jae5iehZvds3gs-Q8Ew',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
