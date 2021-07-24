import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentLazyRoutingModule } from './content-lazy-routing.module';
import { MailHelpComponent } from './mail-help/mail-help.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    MailHelpComponent,
    PriceComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ContentLazyRoutingModule
  ],
  exports:[
     MailHelpComponent,
     PriceComponent,
     AboutComponent
  ]
})
export class ContentLazyModule { }
