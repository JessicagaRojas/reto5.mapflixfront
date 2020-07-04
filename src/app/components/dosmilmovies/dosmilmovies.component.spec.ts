import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOSMILmoviesComponent } from './dosmilmovies.component';

describe('DOSMILmoviesComponent', () => {
  let component: DOSMILmoviesComponent;
  let fixture: ComponentFixture<DOSMILmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOSMILmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOSMILmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
