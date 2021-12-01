import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowJQWOrksComponent } from './how-jqworks.component';

describe('HowJQWOrksComponent', () => {
  let component: HowJQWOrksComponent;
  let fixture: ComponentFixture<HowJQWOrksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowJQWOrksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowJQWOrksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
