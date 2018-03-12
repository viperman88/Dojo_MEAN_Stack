import { Component, OnInit } from '@angular/core';
import { GoldService } from '../../gold.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  private updateScore(updatedScore: number): void {
    this._goldService.score$.next(updatedScore);
  }

  farmClick(score) {
    const clickScore = this._goldService.generateRandomNum(1, 6);
    console.log(clickScore);
    this.updateScore(clickScore);
    this._goldService.attemptList.push(`Earned ${clickScore} gold`);
  }

  caveClick(score) {
    const clickScore = this._goldService.generateRandomNum(4, 11);
    console.log(clickScore);
    this.updateScore(clickScore);
    this._goldService.attemptList.push(`Earned ${clickScore} gold`);
  }

  casinoClick(score) {
    const clickScore = this._goldService.generateRandomNum(-100, 101);
    console.log(clickScore);
    this.updateScore(clickScore);
    if (clickScore < 0) {
      this._goldService.attemptList.push(`Lost ${clickScore} gold`);
    }
    if (clickScore > 0) {
      this._goldService.attemptList.push(`Earned ${clickScore} gold`);
    }
  }

  houseClick(score) {
    const clickScore = this._goldService.generateRandomNum(6, 16);
    console.log(clickScore);
    this.updateScore(clickScore);
    this._goldService.attemptList.push(`Earned ${clickScore} gold`);
  }

}
