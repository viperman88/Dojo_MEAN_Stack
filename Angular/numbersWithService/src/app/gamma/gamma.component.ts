import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  constructor( private _dataService: DataService ) { }

  difference: number;

  ngOnInit() {
  }

  onClick() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sum = this._dataService.randArrayAlpha.reduce(reducer);

    this.difference = sum - this._dataService.randArrayBeta.reduce(reducer);

    return this.difference;
  }

}
