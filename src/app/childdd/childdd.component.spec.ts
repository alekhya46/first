import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildddComponent } from './childdd.component';

describe('ChildddComponent', () => {
  let component: ChildddComponent;
  let fixture: ComponentFixture<ChildddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
