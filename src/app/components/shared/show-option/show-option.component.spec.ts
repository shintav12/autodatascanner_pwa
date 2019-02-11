import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOptionComponent } from './show-option.component';

describe('ShowOptionComponent', () => {
  let component: ShowOptionComponent;
  let fixture: ComponentFixture<ShowOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
