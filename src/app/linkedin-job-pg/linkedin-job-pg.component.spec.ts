import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinJobPgComponent } from './linkedin-job-pg.component';

describe('LinkedinJobPgComponent', () => {
  let component: LinkedinJobPgComponent;
  let fixture: ComponentFixture<LinkedinJobPgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinJobPgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinJobPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
