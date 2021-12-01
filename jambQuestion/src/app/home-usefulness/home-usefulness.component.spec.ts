import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsefulnessComponent } from './home-usefulness.component';

describe('HomeUsefulnessComponent', () => {
  let component: HomeUsefulnessComponent;
  let fixture: ComponentFixture<HomeUsefulnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUsefulnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUsefulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
