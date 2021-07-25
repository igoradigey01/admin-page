import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

 // name_site:string='CMS First Site';
 // alias_site:string='CMS Первый Сайт';
  company_name:string='X-01'; //First Site


  flagMialHelp:boolean=false;
  flagDomainNameHelp:boolean=false;
  flagSaitHelp:boolean=false;
  //flagSateHelp:boolean=true;
  //flags=[new{name:"mail"}];

  constructor(
    private router: Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  LoadMailLazy(){
    this.flagDomainNameHelp=false;
    this.flagSaitHelp=false;
    this.flagMialHelp=true;

 //  console.log("this.flagMialHelp---"+this.flagMialHelp);
    this.router.navigate(['lazy-help', 'mail-help'], {relativeTo: this.route});
  }

  LoadDomainNameLazy(){
    this.flagMialHelp=false;
    this.flagSaitHelp=false;
    this.flagDomainNameHelp=true;
    //  console.log("this.flagMialHelp---"+this.flagMialHelp);
    this.router.navigate(['lazy-help', 'domain-name-help'], {relativeTo: this.route});

  }
  LoadSaitLazy(){
    this.flagMialHelp=false;
    this.flagDomainNameHelp=false;
    this.flagSaitHelp=true;
    //  console.log("this.flagMialHelp---"+this.flagMialHelp);
    this.router.navigate(['lazy-help', 'sait-help'], {relativeTo: this.route});

  }




}
