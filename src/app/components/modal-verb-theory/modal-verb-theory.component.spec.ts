import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerbTheoryComponent } from './modal-verb-theory.component';

describe('ModalVerbTheoryComponent', () => {
  let component: ModalVerbTheoryComponent;
  let fixture: ComponentFixture<ModalVerbTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVerbTheoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVerbTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
