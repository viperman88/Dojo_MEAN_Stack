import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GoldService {

  score$: BehaviorSubject<number> = new BehaviorSubject(0);

  attemptList = [];

  constructor() { }

  generateRandomNum(maximum, minimum) {
    const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return num;
  }

}
