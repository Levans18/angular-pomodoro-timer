import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  timeLeft: number = 25 * 60; // 25 minutes in seconds
  totalTime: number = 25 * 60; // Total time for the timer
  timerInterval: any = null;
  isRunning: boolean = false;

  get formattedTime(): string {
    const minutes: number = Math.floor(this.timeLeft / 60);
    const seconds: number = this.timeLeft % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  get circumference(): number {
    const radius = 45; // Radius of the circle
    return 2 * Math.PI * radius;
  }

  get progressOffset(): number {
    return this.circumference - (this.timeLeft / this.totalTime) * this.circumference;
  }

  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  startTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.stopTimer();
          alert("Time's up!");
        }
      }, 1000); // Run every second
    }
  }

  stopTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
      this.isRunning = false;
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.timeLeft = this.totalTime; // Reset to the total time
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}