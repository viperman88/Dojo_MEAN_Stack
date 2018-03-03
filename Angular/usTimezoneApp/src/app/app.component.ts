import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';
  time = new Date;
  selectedTimezone = null;

  getTimeByZone(timezone) {
    this.time = new Date();
    if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 3);
    } else if (timezone === null) {
      this.time = null;
      console.log('Clear time worked properly');
    }
    this.selectedTimezone = timezone;
  }
}
