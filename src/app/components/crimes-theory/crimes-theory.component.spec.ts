import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimesTheoryComponent } from './crimes-theory.component';

describe('CrimesTheoryComponent', () => {
  let component: CrimesTheoryComponent;
  let fixture: ComponentFixture<CrimesTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimesTheoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimesTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
