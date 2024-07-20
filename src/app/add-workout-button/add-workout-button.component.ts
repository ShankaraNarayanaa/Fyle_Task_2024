import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UserWorkoutFormComponent } from '../user-workout-form/user-workout-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-workout-button',
  standalone: true,
  imports: [CommonModule, UserWorkoutFormComponent],
  templateUrl: './add-workout-button.component.html',
  styleUrl: './add-workout-button.component.css'
})
export class AddWorkoutButtonComponent implements AfterViewInit{
  @ViewChild(UserWorkoutFormComponent) userWorkoutFormComponent!: UserWorkoutFormComponent;

  constructor() {}

  ngAfterViewInit() {
    // Ensure ViewChild is properly initialized
    if (!this.userWorkoutFormComponent) {
      console.error('UserWorkoutFormComponent is not initialized');
    }
  }

  addWorkout() {
    const workoutData = this.userWorkoutFormComponent.getWorkoutData();
    if (workoutData) {
      // Store data in local storage
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(workoutData);
      localStorage.setItem('workouts', JSON.stringify(workouts));

      // Clear form
      this.userWorkoutFormComponent.clearForm();

      alert('Workout added successfully!');
    } else {
      alert('Please Fill All The Fields');
    }
  }
}
