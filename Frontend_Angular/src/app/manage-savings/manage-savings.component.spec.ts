import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSavingsComponent } from './manage-savings.component';

describe('ManageSavingsComponent', () => {
  let component: ManageSavingsComponent;
  let fixture: ComponentFixture<ManageSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
