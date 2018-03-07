import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Layout App';

  alphaRad = {
    block: 'with a sheet of paper',
    distance: 'short range in air (3 - 5 cm)'
  };
  betaRad = {
    block: 'with lead or thick aluminium',
    distance: 'medium range in air (~15 cm)'
  };
  gammaRad = {
    block: 'attenuated by thick lead',
    distance: 'long range – inverse square law)'
  };
}
