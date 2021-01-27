import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDeleteComponent } from './process-delete.component';

describe('ProcessDeleteComponent', () => {
  let component: ProcessDeleteComponent;
  let fixture: ComponentFixture<ProcessDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
