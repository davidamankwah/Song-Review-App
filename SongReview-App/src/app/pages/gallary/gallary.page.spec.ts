import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GallaryPage } from './gallary.page';

describe('GallaryPage', () => {
  let component: GallaryPage;
  let fixture: ComponentFixture<GallaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GallaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
