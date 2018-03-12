import { Component, OnInit } from '@angular/core';
import { GoldService } from '../../gold.service';

@Component({
  selector: 'app-earnings-disp',
  templateUrl: './earnings-disp.component.html',
  styleUrls: ['./earnings-disp.component.css']
})
export class EarningsDispComponent implements OnInit {

  constructor(public _goldService: GoldService) { }

  ngOnInit() {
  }

}
