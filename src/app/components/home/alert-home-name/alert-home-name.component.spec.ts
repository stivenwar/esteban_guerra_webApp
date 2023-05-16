import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHomeNameComponent } from './alert-home-name.component';

describe('AlertHomeNameComponent', () => {
  let component: AlertHomeNameComponent;
  let fixture: ComponentFixture<AlertHomeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertHomeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertHomeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
