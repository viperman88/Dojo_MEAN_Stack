import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // import the service

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  numbers: number[] = [];

  constructor(private _dataService: DataService) { // inject the service by adding it as a parameter to our component’s constructor method

}

  ngOnInit() { // setting our AlphaComponent’s numbers array to the same value of the DataService numbers array OnInit
    this.numbers = this._dataService.retrieveNumbers();
  }

  pushOne() {
    this._dataService.addNumber(1);
  }

}
