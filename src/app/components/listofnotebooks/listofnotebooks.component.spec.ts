import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofnotebooksComponent } from './listofnotebooks.component';

describe('ListofnotebooksComponent', () => {
  let component: ListofnotebooksComponent;
  let fixture: ComponentFixture<ListofnotebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofnotebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofnotebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
