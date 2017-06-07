import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
declare var nv: any;

const style = `
	svg {
			display: block;
	}
	svg {
			margin: 0px;
			padding: 0px;
			height: 100%;
			width: 100%;
	}
`;

@Component({
  selector: 'app-nvd3-test-2',
  template: '<svg></svg>',
  //templateUrl: './nvd3-test-2.component.html',
  styles: [style]
})
export class Nvd3Test2Component implements OnInit, OnDestroy {

  private d3: D3;
	private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private parentNativeElement: any;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {

		const historicalBarChart = [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "A" ,
                    "value" : 29.765957771107
                } ,
                {
                    "label" : "B" ,
                    "value" : 0
                } ,
                {
                    "label" : "C" ,
                    "value" : 32.807804682612
                } ,
                {
                    "label" : "D" ,
                    "value" : 196.45946739256
                } ,
                {
                    "label" : "E" ,
                    "value" : 0.19434030906893
                } ,
                {
                    "label" : "F" ,
                    "value" : 98.079782601442
                } ,
                {
                    "label" : "G" ,
                    "value" : 13.925743130903
                } ,
                {
                    "label" : "H" ,
                    "value" : 5.1387322875705
                }
            ]
        }
    ];

    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);
      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
			nv.addGraph(() => {
					const chart = nv.models.discreteBarChart()
							.x(function(d) { return d.label })
							.y(function(d) { return d.value })
							.staggerLabels(true)
							//.staggerLabels(historicalBarChart[0].values.length > 8)
							.showValues(true)
							.duration(250)
							;
					this.d3Svg
							.datum(historicalBarChart)
							.call(chart);
					nv.utils.windowResize(chart.update);
					return chart;
			});
		}

  }

}
