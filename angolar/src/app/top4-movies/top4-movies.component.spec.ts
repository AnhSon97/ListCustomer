import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top4MoviesComponent } from './top4-movies.component';

describe('Top4MoviesComponent', () => {
  let component: Top4MoviesComponent;
  let fixture: ComponentFixture<Top4MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top4MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top4MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
