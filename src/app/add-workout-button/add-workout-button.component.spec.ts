import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AddWorkoutButtonComponent } from './add-workout-button.component';
import { UserWorkoutFormComponent } from '../user-workout-form/user-workout-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AddWorkoutButtonComponent', () => {
  let component: AddWorkoutButtonComponent;
  let fixture: ComponentFixture<AddWorkoutButtonComponent>;
  let userWorkoutFormComponent: UserWorkoutFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        AddWorkoutButtonComponent,
        UserWorkoutFormComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkoutButtonComponent);
    component = fixture.componentInstance;
    userWorkoutFormComponent = fixture.debugElement.query(
      By.directive(UserWorkoutFormComponent)
    ).componentInstance;
    component.userWorkoutFormComponent = userWorkoutFormComponent;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear(); // Clean localStorage after each test
  });

  // Test Suite Checks Whether Component is Created Or Not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test Suite Checks Whether Input Validation Is Working Correct
  it('should show alert "Please Fill All Fields" if any field is incomplete', () => {
    spyOn(window, 'alert'); // Spy on the alert function

    // Set some fields as empty
    userWorkoutFormComponent.username = '';
    userWorkoutFormComponent.workoutType = 'cycling';
    userWorkoutFormComponent.workoutMinutes = 30;

    fixture.detectChanges(); // Update the view

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(window.alert).toHaveBeenCalledWith('Please Fill All The Fields');
  });

  // Test Suite Checks Whether Button Click Stores The Data In Local Storage , Once Stored In Local Storage Making Form Fields Cleared Or Not
  it('should store workout data in local storage and clear form fields when all fields are filled', () => {
    spyOn(window, 'alert'); // Spy on the alert function
    spyOn(Storage.prototype, 'setItem'); // Spy on localStorage.setItem
    spyOn(userWorkoutFormComponent, 'clearForm'); // Spy on clearForm method

    // Fill the form with valid data
    userWorkoutFormComponent.username = 'John Doe';
    userWorkoutFormComponent.workoutType = 'cycling';
    userWorkoutFormComponent.workoutMinutes = 45;

    fixture.detectChanges(); // Update the view

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    // Verify local storage content
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'workouts',
      JSON.stringify([
        {
          username: 'John Doe',
          workoutType: 'cycling',
          workoutMinutes: 45,
        },
      ])
    );

    // Check alert message and form clearing
    expect(window.alert).toHaveBeenCalledWith('Workout added successfully!');
    expect(userWorkoutFormComponent.clearForm).toHaveBeenCalled();
  });

  it('should clear form fields after adding workout', () => {
    spyOn(userWorkoutFormComponent, 'clearForm'); // Spy on clearForm method

    // Fill the form with valid data
    userWorkoutFormComponent.username = 'John Doe';
    userWorkoutFormComponent.workoutType = 'cycling';
    userWorkoutFormComponent.workoutMinutes = 45;

    fixture.detectChanges(); // Update the view

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    // Ensure the form is cleared
    expect(userWorkoutFormComponent.clearForm).toHaveBeenCalled();
  });
});
