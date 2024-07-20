import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

interface WorkoutRecord {
  username: string;
  workouts: string;
  numberOfWorkouts: number;
  totalWorkoutMinutes: number;
}

@Component({
  selector: 'app-user-workout-records',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-workout-records.component.html',
  styleUrls: ['./user-workout-records.component.css']
})
export class UserWorkoutRecordsComponent implements OnInit {
  workouts: WorkoutRecord[] = [];
  filteredWorkouts: WorkoutRecord[] = [];
  paginatedWorkouts: WorkoutRecord[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20, 25, 50, 75, 100];
  totalPages: number = 1;
  searchQuery: string = '';
  selectedWorkoutType: string = 'all';
  selectedUser: string | null = null; 

  ngOnInit() {
    this.loadWorkoutData();
    this.updateFilteredWorkouts();
  }

  loadWorkoutData() {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts') || '[]');

    const aggregatedData = storedWorkouts.reduce((acc: { [key: string]: WorkoutRecord }, workout: any) => {
      if (!acc[workout.username]) {
        acc[workout.username] = {
          username: workout.username,
          workouts: '',
          numberOfWorkouts: 0,
          totalWorkoutMinutes: 0,
        };
      }

      acc[workout.username].workouts += workout.workoutType + ', ';
      acc[workout.username].numberOfWorkouts += 1;
      acc[workout.username].totalWorkoutMinutes += workout.workoutMinutes;

      return acc;
    }, {});

    this.workouts = Object.values(aggregatedData).map((record: any) => ({
      ...record,
      workouts: record.workouts.slice(0, -2), // Remove trailing comma and space
    }));

    this.updateFilteredWorkouts();
  }

  updateFilteredWorkouts() {
    this.filteredWorkouts = this.workouts.filter(workout => {
      const matchesName = workout.username.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesType = this.selectedWorkoutType === 'all' || workout.workouts.toLowerCase().includes(this.selectedWorkoutType.toLowerCase());
      return matchesName && matchesType;
    });

    this.totalPages = Math.ceil(this.filteredWorkouts.length / this.pageSize);
    this.updatePaginatedWorkouts();
  }

  updatePaginatedWorkouts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedWorkouts = this.filteredWorkouts.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedWorkouts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedWorkouts();
    }
  }

  onPageSizeChange(event: Event) {
    this.pageSize = +(event.target as HTMLSelectElement).value;
    this.totalPages = Math.ceil(this.filteredWorkouts.length / this.pageSize);
    this.currentPage = 1; // Reset to first page
    this.updatePaginatedWorkouts();
  }

  onSearchQueryChange() {
    this.updateFilteredWorkouts();
  }

  onWorkoutTypeChange() {
    this.updateFilteredWorkouts();
  }
}
