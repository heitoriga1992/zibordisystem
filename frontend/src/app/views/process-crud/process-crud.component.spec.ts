import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCrudComponent } from './process-crud.component';

describe('ProcessCrudComponent', () => {
  let component: ProcessCrudComponent;
  let fixture: ComponentFixture<ProcessCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
