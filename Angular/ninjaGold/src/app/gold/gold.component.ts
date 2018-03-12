import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  score = 0;

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
    this._goldService.score$.subscribe((score) => {
      console.log(score);
      this.score += score;
    });
    console.log('gold count', this.score);
  }

}
