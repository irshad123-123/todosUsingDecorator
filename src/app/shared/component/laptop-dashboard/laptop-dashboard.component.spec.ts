import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDashboardComponent } from './laptop-dashboard.component';

describe('LaptopDashboardComponent', () => {
  let component: LaptopDashboardComponent;
  let fixture: ComponentFixture<LaptopDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
