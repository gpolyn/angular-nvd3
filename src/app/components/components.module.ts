import { NgModule } from '@angular/core';

import { environment } from '../../environments/environment';
export let BASE_URL = environment.url_base_path;

import { ComponentsRoutingModule } from './components-routing.module';
import { PieComponent } from './pie.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { OhlcBarChartComponent } from './ohlc-bar-chart/ohlc-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { CumulativeLineComponent } from './cumulative-line/cumulative-line.component';
import { WidgetsComponent } from './widgets.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    ComponentsRoutingModule
  ],
  declarations: [
    PieComponent,
    LinePlusBarChartComponent,
    WidgetsComponent,
    LineChartComponent,
    OhlcBarChartComponent,
    StackedAreaChartComponent,
    CumulativeLineComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
