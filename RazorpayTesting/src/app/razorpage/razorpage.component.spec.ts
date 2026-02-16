import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorpageComponent } from './razorpage.component';

describe('RazorpageComponent', () => {
  let component: RazorpageComponent;
  let fixture: ComponentFixture<RazorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazorpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
