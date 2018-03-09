import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // import the service

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  constructor(private _dataService: DataService) { } // inject the service by adding it as a parameter to our component’s constructor method

    numbers: number[] = [];

  ngOnInit() { // setting our BetaComponent’s numbers array to the same value of the DataService numbers array OnInit
    this.numbers = this._dataService.retrieveNumbers();
  }

}
