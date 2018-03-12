import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsDispComponent } from './earnings-disp.component';

describe('EarningsDispComponent', () => {
  let component: EarningsDispComponent;
  let fixture: ComponentFixture<EarningsDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
