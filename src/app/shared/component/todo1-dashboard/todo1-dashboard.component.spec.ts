import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo1DashboardComponent } from './todo1-dashboard.component';

describe('Todo1DashboardComponent', () => {
  let component: Todo1DashboardComponent;
  let fixture: ComponentFixture<Todo1DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo1DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
