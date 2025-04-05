import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerService } from '../../services/timer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  timeLeft$!: Observable<number>;
  isRunning$!: Observable<boolean>;

  private radius: number = 45; // Radius of the circle
  circumference: number = 2 * Math.PI * this.radius; // Calculate circumference
  progressOffset: number = 0; // Initial offset for the progress circle

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timeLeft$ = this.timerService.timeLeft$;
    this.isRunning$ = this.timerService.isRunning$;

    // Subscribe to timeLeft$ to update progressOffset dynamically
    this.timeLeft$.subscribe((timeLeft) => {
      this.updateProgress(timeLeft);
    });
  }
  private updateProgress(timeLeft: number): void {
    const totalTime = this.timerService.totalTime; // Assuming totalTime is defined in TimerService
    this.progressOffset =
      this.circumference - (timeLeft / totalTime) * this.circumference;
  }

  get formattedTime(): string {
    const minutes: number = Math.floor(this.timerService.timeLeft / 60);
    const seconds: number = this.timerService.timeLeft % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }
  private padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
  }

  resetTimer(): void {
    this.timerService.resetTimer();
  }
}