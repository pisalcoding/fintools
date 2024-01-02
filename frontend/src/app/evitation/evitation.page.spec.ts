import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvitationPage } from './evitation.page';

describe('EvitationPage', () => {
  let component: EvitationPage;
  let fixture: ComponentFixture<EvitationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EvitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
