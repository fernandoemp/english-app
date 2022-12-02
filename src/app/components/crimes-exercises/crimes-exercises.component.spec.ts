import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesExercisesComponent } from './crimes-exercises.component';

describe('CrimesExercisesComponent', () => {
  let component: CrimesExercisesComponent;
  let fixture: ComponentFixture<CrimesExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimesExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimesExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
