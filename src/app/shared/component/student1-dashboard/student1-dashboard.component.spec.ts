import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student1DashboardComponent } from './student1-dashboard.component';

describe('Student1DashboardComponent', () => {
  let component: Student1DashboardComponent;
  let fixture: ComponentFixture<Student1DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student1DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
