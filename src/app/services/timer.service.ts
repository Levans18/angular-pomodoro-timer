import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private initialTime = 25 * 60; // 25 minutes in seconds
  private timeLeftSubject = new BehaviorSubject<number>(this.initialTime); // 25 minutes in seconds
  private isRunningSubject = new BehaviorSubject<boolean>(false);
  private timerInterval: any = null;

  timeLeft$ = this.timeLeftSubject.asObservable();
  isRunning$ = this.isRunningSubject.asObservable();

  get timeLeft(): number {
    return this.timeLeftSubject.value;
  }

  set timeLeft(value: number) {
    this.timeLeftSubject.next(value);
  }

  get isRunning(): boolean {
    return this.isRunningSubject.value;
  }

  set isRunning(value: boolean) {
    this.isRunningSubject.next(value);
  }

  get totalTime(): number {
    return this.initialTime; // Expose totalTime as a getter
  }
  
  startTimer(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timerInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft -= 1;
        } else {
          this.stopTimer();
          alert("Time's up!");
        }
      }, 1000);
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
    this.timeLeft = 25 * 60; // Reset to 25 minutes
  }
}