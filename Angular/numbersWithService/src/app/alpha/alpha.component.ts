import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  constructor( private _dataService: DataService ) { }

  onClick(num) {
    this._dataService.randArrayAlpha.push(this._dataService.generateRandomNum());
  }

  ngOnInit() {
  }

}
