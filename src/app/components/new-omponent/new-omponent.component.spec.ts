import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOmponentComponent } from './new-omponent.component';

describe('NewOmponentComponent', () => {
  let component: NewOmponentComponent;
  let fixture: ComponentFixture<NewOmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOmponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
