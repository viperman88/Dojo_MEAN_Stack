import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  randArrayAlpha: number[] = [];
  randArrayBeta: number[] = [];

  generateRandomNum() {
    const num = Math.floor((Math.random() * 10) + 1);
    return num;
  }

}
