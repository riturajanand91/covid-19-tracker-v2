import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSingleComponent } from './state-single.component';

describe('StateSingleComponent', () => {
  let component: StateSingleComponent;
  let fixture: ComponentFixture<StateSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
