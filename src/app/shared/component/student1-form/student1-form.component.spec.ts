import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student1FormComponent } from './student1-form.component';

describe('Student1FormComponent', () => {
  let component: Student1FormComponent;
  let fixture: ComponentFixture<Student1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student1FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
