import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-workout-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-workout-form.component.html',
  styleUrl: './user-workout-form.component.css'
})
export class UserWorkoutFormComponent {
  username: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  constructor() {}

  getWorkoutData(){
    if (this.username && this.workoutType && this.workoutMinutes !== null) {
      return {
        username: this.username,
        workoutType: this.workoutType,
        workoutMinutes: this.workoutMinutes
      };
    }
    return null;
  }

  clearForm() {
    this.username = '';
    this.workoutType = '';
    this.workoutMinutes = null;
  }
}
