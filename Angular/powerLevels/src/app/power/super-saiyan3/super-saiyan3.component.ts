import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan3',
  templateUrl: './super-saiyan3.component.html',
  styleUrls: ['./super-saiyan3.component.css']
})
export class SuperSaiyan3Component implements OnInit, OnChanges {

  @Input() powerLevel: number;

  currentPower: number;

  ngOnChanges() {
    this.powerLevel = this.powerLevel * 250;
  }

  constructor() { }

  ngOnInit() {
  }

}
