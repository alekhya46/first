import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarpsealComponent } from './harpseal.component';

describe('HarpsealComponent', () => {
  let component: HarpsealComponent;
  let fixture: ComponentFixture<HarpsealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarpsealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpsealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
