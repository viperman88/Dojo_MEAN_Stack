import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-super-saiyan2',
  templateUrl: './super-saiyan2.component.html',
  styleUrls: ['./super-saiyan2.component.css']
})
export class SuperSaiyan2Component implements OnInit, OnChanges {

  @Input() powerLevel: number;

  currentPower: number;

  ngOnChanges() {
    this.powerLevel = this.powerLevel * 150;
  }

  constructor() { }

  ngOnInit() {
  }

}
