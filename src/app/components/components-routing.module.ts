import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';

import { PieComponent } from './pie.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { OhlcBarChartComponent } from './ohlc-bar-chart/ohlc-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';

const routes: Routes = [
  {
    path: '',
		canActivate: [AuthGuardService],
    data: {
      title: 'NVD3'
    },
    children: [
      {
        path: 'line-chart',
        component: LineChartComponent,
        data: {
          title: 'Line Chart'
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
        path: 'line-plus-bar-chart',
        component: LinePlusBarChartComponent,
        data: {
          title: 'Line Plus Bar Chart'
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
