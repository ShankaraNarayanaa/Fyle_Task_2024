// Imported All The Necessary Packages That Are Used In This Application
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// App Heading Component Imported
import { AppHeadingComponent } from "./app-heading/app-heading.component";

// App User Workout Form component Imported
import { UserWorkoutFormComponent } from "./user-workout-form/user-workout-form.component";

// App Add Workout Component Imported
import { AddWorkoutButtonComponent } from "./add-workout-button/add-workout-button.component";

// App User Workout Records Component Imported
import { UserWorkoutRecordsComponent } from "./user-workout-records/user-workout-records.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeadingComponent, UserWorkoutFormComponent, AddWorkoutButtonComponent, UserWorkoutRecordsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Health-Tracker';
}
