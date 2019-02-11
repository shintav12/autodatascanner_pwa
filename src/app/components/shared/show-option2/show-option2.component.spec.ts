import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOption2Component } from './show-option2.component';

describe('ShowOption2Component', () => {
  let component: ShowOption2Component;
  let fixture: ComponentFixture<ShowOption2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
