import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolUsefulnessComponent } from './school-usefulness.component';

describe('SchoolUsefulnessComponent', () => {
  let component: SchoolUsefulnessComponent;
  let fixture: ComponentFixture<SchoolUsefulnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolUsefulnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolUsefulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
