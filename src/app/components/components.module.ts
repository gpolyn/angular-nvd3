import { NgModule } from '@angular/core';

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { PieComponent } from './pie.component';
import { VoronoiSpirals3Component } from './voronoi-spirals-3.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { LinePlusBarChartComponent } from './line-plus-bar-chart/line-plus-bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { OhlcBarChartComponent } from './ohlc-bar-chart/ohlc-bar-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    VoronoiSpirals3Component,
    PieComponent,
    ForceDirectedGraphComponent,
    LinePlusBarChartComponent,
    LineChartComponent,
    OhlcBarChartComponent,
    StackedAreaChartComponent
  ]
})
export class ComponentsModule { }
