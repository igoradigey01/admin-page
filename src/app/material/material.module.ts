import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule
];

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
