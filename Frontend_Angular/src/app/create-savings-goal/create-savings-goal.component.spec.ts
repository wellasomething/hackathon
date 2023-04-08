import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSavingsGoalComponent } from './create-savings-goal.component';

describe('CreateSavingsGoalComponent', () => {
  let component: CreateSavingsGoalComponent;
  let fixture: ComponentFixture<CreateSavingsGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSavingsGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSavingsGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
