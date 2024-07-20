import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppHeadingComponent } from './app-heading.component';

describe('AppHeadingComponent', () => {
  let component: AppHeadingComponent;
  let fixture: ComponentFixture<AppHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeadingComponent]
    })
    .compileComponents();
  });

    
  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  // Test Suite Checks Whether Component Is Created Or Not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test Suite Check Whether H1 Heading is Displaying Or Not
  it('should display the heading text', () => {
    const headingElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(headingElement.textContent).toContain('HEALTH TRACKER');
  });

  // Test Suite Check Whether Image is Displaying Or Not
  it('should display the image', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('favicon.ico');
  });
});
