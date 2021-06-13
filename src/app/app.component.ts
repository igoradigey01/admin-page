import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-page';
  year:number=new Date(2021,0,1).getFullYear();
  titl:string="Цыганков И.В. ";
}
