import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNameComponent } from './welcome-name.component';

describe('WelcomeNameComponent', () => {
  let component: WelcomeNameComponent;
  let fixture: ComponentFixture<WelcomeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
