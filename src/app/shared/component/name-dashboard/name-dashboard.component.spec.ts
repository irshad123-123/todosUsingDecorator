import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDashboardComponent } from './name-dashboard.component';

describe('NameDashboardComponent', () => {
  let component: NameDashboardComponent;
  let fixture: ComponentFixture<NameDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
