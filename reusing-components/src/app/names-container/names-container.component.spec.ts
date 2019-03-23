import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesContainerComponent } from './names-container.component';

describe('NamesContainerComponent', () => {
  let component: NamesContainerComponent;
  let fixture: ComponentFixture<NamesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
