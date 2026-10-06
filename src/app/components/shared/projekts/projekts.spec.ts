import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projekts } from './projekts';

describe('Projekts', () => {
  let component: Projekts;
  let fixture: ComponentFixture<Projekts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projekts],
    }).compileComponents();

    fixture = TestBed.createComponent(Projekts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
