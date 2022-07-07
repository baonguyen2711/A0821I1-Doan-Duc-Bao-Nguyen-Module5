import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = '';
  remainingTime: number=0;
  @Input()
  seconds = 15;
  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes['seconds'].currentValue;
      v = typeof v === 'undefined' ? 15 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 15 : vFixed;
    }
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Dừng lúc ${this.remainingTime} giây`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Hết giờ!';
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `Đếm ngược ${this.remainingTime} giây`;
      }
    }, 1000);
  }
}
