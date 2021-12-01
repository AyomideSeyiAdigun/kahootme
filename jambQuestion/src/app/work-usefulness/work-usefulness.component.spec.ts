import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUsefulnessComponent } from './work-usefulness.component';

describe('WorkUsefulnessComponent', () => {
  let component: WorkUsefulnessComponent;
  let fixture: ComponentFixture<WorkUsefulnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkUsefulnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkUsefulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
