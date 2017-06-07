import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nvd3Test2Component } from './nvd3-test-2.component';

describe('Nvd3Test2Component', () => {
  let component: Nvd3Test2Component;
  let fixture: ComponentFixture<Nvd3Test2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nvd3Test2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nvd3Test2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
