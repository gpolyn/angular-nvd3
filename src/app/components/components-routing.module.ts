import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { PieComponent } from './pie.component';
import { VoronoiSpirals3Component } from './voronoi-spirals-3.component';
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
      title: 'Components'
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
      },
      {
        path: 'force-directed',
        component: ForceDirectedGraphComponent,
        data: {
          title: 'Force Directed Graph'
        }
      },
      {
        path: 'voronoi',
        component: VoronoiSpirals3Component,
        data: {
          title: 'Voronoi'
        }
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: {
          title: 'Modals'
        }
      },
      {
        path: 'social-buttons',
        component: SocialButtonsComponent,
        data: {
          title: 'Social buttons'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
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
