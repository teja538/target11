import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdystComponent } from './edyst.component';

describe('EdystComponent', () => {
  let component: EdystComponent;
  let fixture: ComponentFixture<EdystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
