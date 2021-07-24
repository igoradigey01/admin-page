import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailHelpComponent } from './mail-help/mail-help.component';
import { PriceComponent } from './price/price.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'mail-help',
    component: MailHelpComponent,
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
