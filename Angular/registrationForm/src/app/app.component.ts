import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  user = new User();
  users = [];
  onSubmit() {
    this.users.push(this.user);
    this.user = new User();
  }
}
