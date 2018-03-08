import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  powerLevel: number;

  update() {
    console.log(this.powerLevel);
  }

  constructor() { }

  ngOnInit() {
    this.powerLevel = 1;
  }

}
