import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POPULARmoviesComponent } from './popularmovies.component';

describe('POPULARmoviesComponent', () => {
  let component: POPULARmoviesComponent;
  let fixture: ComponentFixture<POPULARmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POPULARmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POPULARmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
