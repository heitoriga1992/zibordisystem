import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaspComponent } from './aasp.component';

describe('AaspComponent', () => {
  let component: AaspComponent;
  let fixture: ComponentFixture<AaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
