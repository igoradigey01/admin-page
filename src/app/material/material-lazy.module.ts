import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
const material = [
  MatCardModule
];


@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialLazyModule { }
