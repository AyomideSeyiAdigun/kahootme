import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePersonalityComponent } from './choose-personality.component';

describe('ChoosePersonalityComponent', () => {
  let component: ChoosePersonalityComponent;
  let fixture: ComponentFixture<ChoosePersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePersonalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
