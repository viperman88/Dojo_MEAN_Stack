import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWitch Board';
  switchArr = [true, true, true, true, true, true, true, true, true, true];

  switchChange(idx) {
    this.switchArr[idx] = !this.switchArr[idx];
  }
}
