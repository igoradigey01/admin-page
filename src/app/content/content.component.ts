import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  
  name_site:string='CMS First Site';
  alias_site:string='CMS Первый Сайт';

  constructor() { }

  ngOnInit(): void {
  }

}
