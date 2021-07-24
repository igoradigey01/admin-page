import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

     text:string='Благодарим вас за интерес к платформе X-01 . Чем мы можем вам помочь?';

  constructor() { }

  ngOnInit(): void {
   // this.text=encodeURIComponent("это привет- teststring ");
  }

  public encode(text:string):string{
    return encodeURIComponent(text);
  }

}
