import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleblogComponent } from './googleblog.component';

describe('GoogleblogComponent', () => {
  let component: GoogleblogComponent;
  let fixture: ComponentFixture<GoogleblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
