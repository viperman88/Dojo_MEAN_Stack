import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GoldComponent } from './gold/gold.component';
import { LocationComponent } from './gold/location/location.component';
import { EarningsDispComponent } from './gold/earnings-disp/earnings-disp.component';


@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    LocationComponent,
    EarningsDispComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
