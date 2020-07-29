import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title:String;
  public subtitle:String;
  public email:String;

  constructor() {
    this.title = 'Manuel Vera',
    this.subtitle = 'Desarrollador Web',
    this.email = 'manuelvera202@gmail.com'
   };

  ngOnInit(): void {
  }

}
