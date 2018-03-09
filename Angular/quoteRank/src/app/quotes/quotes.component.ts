import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  user = {
    name: '',
    userQuote: '',
    userRating: 0
  };

  users = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.users.push(this.user);
    this.user = {
      name: '',
      userQuote: '',
      userRating: 0
    };
    form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
