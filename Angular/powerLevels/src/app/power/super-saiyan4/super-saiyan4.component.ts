import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan4',
  templateUrl: './super-saiyan4.component.html',
  styleUrls: ['./super-saiyan4.component.css']
})
export class SuperSaiyan4Component implements OnInit, OnChanges {

  @Input() powerLevel: number;

  currentPower: number;

  ngOnChanges() {
    this.powerLevel = this.powerLevel * 500;
  }

  constructor() { }

  ngOnInit() {
  }

}
