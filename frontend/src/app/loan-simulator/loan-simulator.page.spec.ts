import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanSimulatorPage } from './loan-simulator.page';

describe('LoanSimulatorPage', () => {
  let component: LoanSimulatorPage;
  let fixture: ComponentFixture<LoanSimulatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoanSimulatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
