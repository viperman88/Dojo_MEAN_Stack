import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {

  @Input() powerLevel: number;

  currentPower: number;

  ngOnChanges() {
    this.currentPower =  this.powerLevel ? this.powerLevel * 1 : 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
