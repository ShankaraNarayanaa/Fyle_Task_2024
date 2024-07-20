import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserWorkoutFormComponent } from './user-workout-form.component';
import { By } from '@angular/platform-browser';

describe('UserWorkoutFormComponent', () => {
  let component: UserWorkoutFormComponent;
  let fixture: ComponentFixture<UserWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, UserWorkoutFormComponent], // Import UserWorkoutFormComponent as standalone
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept input for username', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[name="username"]')).nativeElement;
    usernameInput.value = 'Test User';
    usernameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.username).toBe('Test User');
  });

  it('should accept input for workout type', () => {
    const workoutTypeSelect = fixture.debugElement.query(By.css('select[name="workoutType"]')).nativeElement;
    workoutTypeSelect.value = 'running';
    workoutTypeSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.workoutType).toBe('running');
  });

  it('should accept input for workout minutes', () => {
    const workoutMinutesInput = fixture.debugElement.query(By.css('input[name="workoutMinutes"]')).nativeElement;
    workoutMinutesInput.value = '45';
    workoutMinutesInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.workoutMinutes).toBe(45);
  });

  it('should return workout data when form is valid', () => {
    component.username = 'Test User';
    component.workoutType = 'running';
    component.workoutMinutes = 45;

    const workoutData = component.getWorkoutData();
    expect(workoutData).toEqual({
      username: 'Test User',
      workoutType: 'running',
      workoutMinutes: 45
    });
  });

  it('should return null when form is invalid', () => {
    component.username = '';
    component.workoutType = '';
    component.workoutMinutes = null;

    const workoutData = component.getWorkoutData();
    expect(workoutData).toBeNull();
  });

  it('should clear the form', () => {
    component.username = 'Test User';
    component.workoutType = 'running';
    component.workoutMinutes = 45;

    component.clearForm();

    expect(component.username).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBeNull();
  });
});
