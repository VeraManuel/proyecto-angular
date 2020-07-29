import { Component, OnInit, ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title:string;

  @ViewChild('texto', {static: true}) texto: any;
  
  constructor() { 
    this.title = 'Contactanos';
  }

  ngOnInit(): void {
    //alert(this.texto.nativeElement.innerText);
    }
}
