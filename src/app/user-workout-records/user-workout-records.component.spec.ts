import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserWorkoutRecordsComponent } from './user-workout-records.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('UserWorkoutRecordsComponent', () => {
  let component: UserWorkoutRecordsComponent;
  let fixture: ComponentFixture<UserWorkoutRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, UserWorkoutRecordsComponent], // Import standalone component here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear(); // Clean localStorage after each test
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display records based on search input field with workout type set to All', () => {
    // Mock data
    const mockWorkouts = [
      { username: 'John Doe', workouts: 'cycling, swimming', numberOfWorkouts: 2, totalWorkoutMinutes: 90 },
      { username: 'Jane Smith', workouts: 'running', numberOfWorkouts: 1, totalWorkoutMinutes: 30 },
      { username: 'Shankara Narayana', workouts: 'cycling', numberOfWorkouts: 1, totalWorkoutMinutes: 45 }
    ];
    localStorage.setItem('workouts', JSON.stringify(mockWorkouts));
    
    component.loadWorkoutData();
    fixture.detectChanges();

    // Set search query to filter by username
    component.searchQuery = 'Shankara Narayana';
    component.selectedWorkoutType = 'all'; // Workout type is set to All
    component.updateFilteredWorkouts();
    fixture.detectChanges();

    // Check if the table displays the correct records
    const displayedRecords = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(displayedRecords.length).toBe(1); // Only one record should match the search query
    expect(displayedRecords[0].nativeElement.textContent).toContain('Shankara Narayana');
  });

});
