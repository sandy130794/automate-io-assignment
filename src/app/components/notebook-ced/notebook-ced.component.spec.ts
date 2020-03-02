import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookCedComponent } from './notebook-ced.component';

describe('NotebookCedComponent', () => {
  let component: NotebookCedComponent;
  let fixture: ComponentFixture<NotebookCedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookCedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookCedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
