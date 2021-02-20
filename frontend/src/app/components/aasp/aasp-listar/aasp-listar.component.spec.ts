import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaspListarComponent } from './aasp-listar.component';

describe('AaspListarComponent', () => {
  let component: AaspListarComponent;
  let fixture: ComponentFixture<AaspListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaspListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaspListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
