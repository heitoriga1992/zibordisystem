import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessReadComponent } from './process-read.component';

describe('ProcessReadComponent', () => {
  let component: ProcessReadComponent;
  let fixture: ComponentFixture<ProcessReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
