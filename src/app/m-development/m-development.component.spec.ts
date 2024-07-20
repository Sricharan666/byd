import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDevelopmentComponent } from './m-development.component';

describe('MDevelopmentComponent', () => {
  let component: MDevelopmentComponent;
  let fixture: ComponentFixture<MDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDevelopmentComponent]
    });
    fixture = TestBed.createComponent(MDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
