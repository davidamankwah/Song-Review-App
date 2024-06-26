import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewFormPage } from './review-form.page';

describe('ReviewFormPage', () => {
  let component: ReviewFormPage;
  let fixture: ComponentFixture<ReviewFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReviewFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
