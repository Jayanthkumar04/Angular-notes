import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCountComponent } from './f-count.component';

describe('FCountComponent', () => {
  let component: FCountComponent;
  let fixture: ComponentFixture<FCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
