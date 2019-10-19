import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConseillersComponent } from './list-conseillers.component';

describe('ListConseillersComponent', () => {
  let component: ListConseillersComponent;
  let fixture: ComponentFixture<ListConseillersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConseillersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConseillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
