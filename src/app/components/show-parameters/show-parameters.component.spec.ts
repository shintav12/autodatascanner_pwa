import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParametersComponent } from './show-parameters.component';

describe('ShowParametersComponent', () => {
  let component: ShowParametersComponent;
  let fixture: ComponentFixture<ShowParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
