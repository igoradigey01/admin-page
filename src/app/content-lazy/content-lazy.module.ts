import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLazyRoutingModule } from './content-lazy-routing.module';
import { MailHelpComponent } from './mail-help/mail-help.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { DomainNameHelpComponent } from './domain-name-help/domain-name-help.component';
import { SaitHelpComponent } from './sait-help/sait-help.component';
import {MaterialLazyModule} from './../material/material-lazy.module';
import {MaterialModule} from './../material/material.module';


@NgModule({
  declarations: [
    MailHelpComponent,
    PriceComponent,
    AboutComponent,
    DomainNameHelpComponent,
    SaitHelpComponent
  ],
  imports: [
    CommonModule,
    ContentLazyRoutingModule,
    MaterialLazyModule,
    MaterialModule
  ],
  exports:[
     MailHelpComponent,
     PriceComponent,
     AboutComponent,
     DomainNameHelpComponent,
     SaitHelpComponent
  ]
})
export class ContentLazyModule { }
