import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { GithubUser } from './github-user';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  retrieveGithubUser(username: string): Observable<GithubUser> {
    return this.http.get(`https://api.github.com/users/${ username }`)
      .map(response => response.json());
  }
}
