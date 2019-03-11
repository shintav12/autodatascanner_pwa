import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGraphicsComponent } from './show-graphics.component';

describe('ShowGraphicsComponent', () => {
  let component: ShowGraphicsComponent;
  let fixture: ComponentFixture<ShowGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
