import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhlcBarChartComponent } from './ohlc-bar-chart.component';

describe('OhlcBarChartComponent', () => {
  let component: OhlcBarChartComponent;
  let fixture: ComponentFixture<OhlcBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhlcBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhlcBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
