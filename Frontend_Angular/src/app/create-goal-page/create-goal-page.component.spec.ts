import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoalPageComponent } from './create-goal-page.component';

describe('CreateGoalPageComponent', () => {
  let component: CreateGoalPageComponent;
  let fixture: ComponentFixture<CreateGoalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGoalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGoalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
