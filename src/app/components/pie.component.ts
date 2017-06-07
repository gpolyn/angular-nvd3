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
			min-height: 500px;
	}
`;

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styles: [style]
})
export class PieComponent implements OnInit, OnDestroy {

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

		const pieChartData = [
			{
				key: "One",
				y: 5
			},
			{
				key: "Two",
				y: 2
			},
			{
				key: "Three",
				y: 9
			},
			{
				key: "Four",
				y: 7
			},
			{
				key: "Five",
				y: 4
			},
			{
				key: "Six",
				y: 3
			}
		];

    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);
      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
			nv.addGraph(() => {
					const chart = nv.models.pieChart()
							.x(function(d) { return d.key })
							.y(function(d) { return d.y })
							.showLabels(true)
							.height(500)
							.duration(500)
							.labelThreshold(0.01)
							.legendPosition('top')
							.labelSunbeamLayout(true);
					this.d3Svg
							.datum(pieChartData)
							.call(chart);
					nv.utils.windowResize(chart.update);
					return chart;
			});
		}

  }
}
