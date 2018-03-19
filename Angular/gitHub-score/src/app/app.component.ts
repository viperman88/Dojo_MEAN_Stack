import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists: boolean = null;
  username: string = null;
  score = 0;

  constructor(private githubService: GithubService) {}

  calculateScore(form: NgForm) {
    this.username = form.value.username;

    this.githubService.retrieveGithubUser(this.username)
      .subscribe(
        user => {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          form.reset();
        },
        (response: Response) => this.userExists = false
      );
    }
}
