import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KhqrDecodePage } from './khqr-decode.page';

describe('KhqrDecodePage', () => {
  let component: KhqrDecodePage;
  let fixture: ComponentFixture<KhqrDecodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KhqrDecodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
