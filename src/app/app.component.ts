import { Component } from '@angular/core';
import { TimerComponent } from "./components/timer/timer.component";

@Component({
  selector: 'app-root',
  imports: [TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pomodoro-timer';
}
