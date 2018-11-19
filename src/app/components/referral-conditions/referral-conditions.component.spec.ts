import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralConditionsComponent } from './referral-conditions.component';

describe('ReferralConditionsComponent', () => {
  let component: ReferralConditionsComponent;
  let fixture: ComponentFixture<ReferralConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
