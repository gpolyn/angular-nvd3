import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeLineComponent } from './cumulative-line.component';

describe('CumulativeLineComponent', () => {
  let component: CumulativeLineComponent;
  let fixture: ComponentFixture<CumulativeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
