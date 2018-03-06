import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // <-- Import FormsModule
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration Form';
  user: User = new User();
  users: Array<User> = [];
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form);
    this.users.push(this.user);
    console.log(this.users);
    this.user = new User();
    form.resetForm();
  }
}
