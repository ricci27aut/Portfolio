import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDitails } from './project-ditails';

describe('ProjectDitails', () => {
  let component: ProjectDitails;
  let fixture: ComponentFixture<ProjectDitails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDitails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDitails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
