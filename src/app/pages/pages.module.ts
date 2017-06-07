import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { Nvd3Test2Component } from './nvd3-test-2/nvd3-test-2.component';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    Nvd3Test2Component
  ]
})
export class PagesModule { }
