import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorecontentComponent } from './explorecontent.component';

describe('ExplorecontentComponent', () => {
  let component: ExplorecontentComponent;
  let fixture: ComponentFixture<ExplorecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
