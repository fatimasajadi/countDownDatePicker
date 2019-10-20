import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent {
  date = 0;
  calcDays = 0;
  calcHours = 0;
  calcMins = 0;
  calcSecs = 0;

  constructor() {
    requestAnimationFrame(this.updateClock);
  }

  updateClock = () => {
    const end = new Date(this.date).getTime();
    const start = Date.now()
    const tRemaining = (end - start) / 1000;
    const rDay = tRemaining % (60 * 60 * 24);
    const rHour = rDay % (60 * 60);

    this.calcDays = Math.floor(tRemaining / (60 * 60 * 24));
    this.calcHours = Math.floor(rDay / (60 * 60));
    this.calcMins = Math.floor(rHour / (60));
    this.calcSecs = Math.floor(rHour % (60));
    requestAnimationFrame(this.updateClock);
  }
}
