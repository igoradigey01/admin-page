import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {ContentComponent} from './content/content.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path:'',component:ContentComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
