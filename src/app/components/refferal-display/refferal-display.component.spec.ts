import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferalDisplayComponent } from './refferal-display.component';

describe('RefferalDisplayComponent', () => {
  let component: RefferalDisplayComponent;
  let fixture: ComponentFixture<RefferalDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferalDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
