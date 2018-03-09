import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  @Input() userInfo;

  vote = 0;

  addVote() {
    this.vote += 1;
  }

  subtractVote() {
    if (this.vote > 0) {
      this.vote -= 1;
    }
  }

  delete() {

  }

  constructor() { }

  ngOnInit() {
  }

}
