import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseParametersComponent } from './choose-parameters.component';

describe('ChooseParametersComponent', () => {
  let component: ChooseParametersComponent;
  let fixture: ComponentFixture<ChooseParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
