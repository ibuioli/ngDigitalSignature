import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignComponent } from './digital-sign.component';

describe('DigitalSignComponent', () => {
  let component: DigitalSignComponent;
  let fixture: ComponentFixture<DigitalSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
