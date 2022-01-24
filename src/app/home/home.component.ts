import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


//urlImage : string ="http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png"
  
image : string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png";

contenu :  string [] =["String Interpolation : {{}}","Property Binding : [] ","Event Binding : ()","Two Way Data Binding [()]","Directives *ngFor, *ngIf","Pipes : |"];
constructor() { 
    console.log("constructeur");
  }


  //cette méthode s'execute directement aprés le constructeur
  ngOnInit(): void {
    console.log("ngOnInit!");
  }

}
