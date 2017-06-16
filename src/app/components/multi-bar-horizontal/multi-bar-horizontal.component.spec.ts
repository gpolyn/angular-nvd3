import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBarHorizontalComponent } from './multi-bar-horizontal.component';

describe('MultiBarHorizontalComponent', () => {
  let component: MultiBarHorizontalComponent;
  let fixture: ComponentFixture<MultiBarHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBarHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
