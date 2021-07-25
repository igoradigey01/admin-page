import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailHelpComponent } from './mail-help/mail-help.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';
import { DomainNameHelpComponent } from './domain-name-help/domain-name-help.component';
import { SaitHelpComponent } from './sait-help/sait-help.component';

const routes: Routes = [
  {
    path: 'mail-help',
    component: MailHelpComponent,
  },

  {
    path: 'domain-name-help',
    component: DomainNameHelpComponent
  },
  {
       path:'sait-help',
       component:SaitHelpComponent
  },
  {
    path: 'price',
    component: PriceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentLazyRoutingModule {}
