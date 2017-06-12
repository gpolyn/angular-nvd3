import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { D3Service, D3, Selection, ScaleOrdinal } from 'd3-ng2-service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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
  selector: 'app-ohlc-bar-chart',
  templateUrl: './ohlc-bar-chart.component.html',
  styles: [style]
})
export class OhlcBarChartComponent implements OnInit, OnDestroy {

  private d3: D3;
	private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private parentNativeElement: any;

  constructor(private http: Http, element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    const url = 'http://localhost/api/getdata'; // add some dev/prod distinction
    const promisedData = this.http.post(url, '', options)
                                  .toPromise()
                                  .then(this.extractData);

		const pieChartData = this.ohlcBarChart();

    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
		let color: any;
    let z: ScaleOrdinal<number, string>;

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);
      let color = d3.scaleOrdinal<number, string>(d3.schemeCategory20);
      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
			nv.addGraph(() => {
					const chart = nv.models.ohlcBarChart()
              .margin({top: 20, right: 20, bottom: 20, left: 20})
							.height(450)
							.duration(100)
							chart.x((d)=> { return d.x })
							chart.y((d)=> { return d.y })
					chart.x((d) => { return d['date']});	
					chart.y((d) => { return d['close']});	
					chart.xAxis.axisLabel('Dates');
					chart.yAxis.axisLabel('Stock Price');
				  chart.yAxis.tickFormat((d) => {
						return '$' + d3.format(',.1f')(d);
					});
				  chart.xAxis.tickFormat((d) => {
						const blah = d * 86400000;
						const date = new Date().getTime() - (20000 * 86400000) + (blah);
						return d3.timeFormat('%x')(d);
					});
          /*
          const nextPromise = promisedData.then( data => {
            this.d3Svg
                .datum(data)
                .call(chart);
          });
          const nextPromise = Promise.resolve(()=>{
						this.d3Svg
								.datum(pieChartData)
								.call(chart);
					})
          */
						this.d3Svg
								.datum(pieChartData)
								.call(chart);
            nv.utils.windowResize(chart.update);
            return chart;
/*
          nextPromise.then(() => {
            nv.utils.windowResize(chart.update);
            return chart;
          });
*/
			});
		}

  }

	private extractData(res: Response) {
		console.log('extractData', res);
    let body = res.json();
		console.log('extractData', body);
    return body || { };
  }

  private ohlcBarChart(): any[] {
    return [{values: [
    {"date": 15707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, "volume": 192059000, "adjusted": 144.65},
    {"date": 15708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73, "volume": 144761800, "adjusted": 144.32},
    {"date": 15709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37, "volume": 116817700, "adjusted": 144.95},
    {"date": 15712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97, "volume": 110002500, "adjusted": 144.56},
    {"date": 15713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55, "volume": 121265100, "adjusted": 144.14},
    {"date": 15714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92, "volume": 90745600, "adjusted": 144.51},
    {"date": 15715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08, "volume": 130735400, "adjusted": 145.66},
    {"date": 15716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07, "volume": 113917300, "adjusted": 145.65},
    {"date": 15719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97, "volume": 89567200, "adjusted": 145.55},
    {"date": 15720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07, "volume": 93172600, "adjusted": 145.65},
    {"date": 15721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05, "volume": 104849500, "adjusted": 145.63},
    {"date": 15722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148, "volume": 133833500, "adjusted": 146.57},
    {"date": 15723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33, "volume": 169906000, "adjusted": 146.9},
    {"date": 15727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.13, "volume": 111797300, "adjusted": 147.69},
    {"date": 15728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37, "volume": 104596100, "adjusted": 147.93},
    {"date": 15729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41, "volume": 146426400, "adjusted": 147.97},
    {"date": 15730, "open": 149.88, "high": 150.25, "low": 149.37, "close": 150.25, "volume": 147211600, "adjusted": 148.8},
    {"date": 15733, "open": 150.29, "high": 150.33, "low": 149.51, "close": 150.07, "volume": 113357700, "adjusted": 148.62},
    {"date": 15734, "open": 149.77, "high": 150.85, "low": 149.67, "close": 150.66, "volume": 105694400, "adjusted": 149.2},
    {"date": 15735, "open": 150.64, "high": 150.94, "low": 149.93, "close": 150.07, "volume": 137447700, "adjusted": 148.62},
    {"date": 15736, "open": 149.89, "high": 150.38, "low": 149.6, "close": 149.7, "volume": 108975800, "adjusted": 148.25},
    {"date": 15737, "open": 150.65, "high": 151.42, "low": 150.39, "close": 151.24, "volume": 131173000, "adjusted": 149.78},
    {"date": 15740, "open": 150.32, "high": 151.27, "low": 149.43, "close": 149.54, "volume": 159073600, "adjusted": 148.09},
    {"date": 15741, "open": 150.35, "high": 151.48, "low": 150.29, "close": 151.05, "volume": 113912400, "adjusted": 149.59}
  ]}];
  }

}
