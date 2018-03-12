import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GoldComponent } from './gold/gold.component';
import { LocationComponent } from './gold/location/location.component';
import { EarningsDispComponent } from './gold/earnings-disp/earnings-disp.component';
import { GoldService } from './gold.service';

@NgModule({
  declarations: [
    AppComponent,
    GoldComponent,
    LocationComponent,
    EarningsDispComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
