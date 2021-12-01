import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPlayCodeComponent } from './supply-play-code.component';

describe('SupplyPlayCodeComponent', () => {
  let component: SupplyPlayCodeComponent;
  let fixture: ComponentFixture<SupplyPlayCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyPlayCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPlayCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
