import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import { WidgetsComponent } from './widgets.component'

import { PieComponent } from './pie.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { OhlcBarChartComponent } from './ohlc-bar-chart/ohlc-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { CumulativeLineComponent } from './cumulative-line/cumulative-line.component';
import { HomeComponent } from './home/home.component';
import { MultiBarHorizontalComponent } from './multi-bar-horizontal/multi-bar-horizontal.component';

const routes: Routes = [
  {
    path: '',
		canActivate: [AuthGuardService],
    data: {
      title: 'NVD3'
    },
    children: [
      {
        data: {
          title: undefined
        },
        path: '',
        component: WidgetsComponent
      },
      {
        path: 'line-chart',
        component: LineChartComponent,
        data: {
          title: 'Line Chart'
        }
      },
      {
        path: 'multi-bar-horizontal',
        component: MultiBarHorizontalComponent,
        data: {
          title: 'Multi-Bar Horizontal'
        }
      },
      {
        path: 'cumulative-line',
        component: CumulativeLineComponent,
        data: {
          title: 'Cumulative Line Chart'
        }
      },
      {
        path: 'stacked-area-chart',
        component: StackedAreaChartComponent,
        data: {
          title: 'Stacked Area Chart'
        }
      },
      {
        path: 'ohlc',
        component: OhlcBarChartComponent,
        data: {
          title: 'OHLC'
        }
      },
      {
        path: 'pie',
        component: PieComponent,
        data: {
          title: 'Pie Chart'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
