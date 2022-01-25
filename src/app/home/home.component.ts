import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


//urlImage : string ="http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png"
  
image : string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png";

contenu :  string [] =["String Interpolation : {{}}","Property Binding : [] ","Event Binding : ()","Two Way Data Binding [()]","Directives *ngFor, *ngIf","Pipes : |"];

// Injection de dependences : un objet de type EtudianService
constructor(private service : EtudiantService) { 
    console.log("constructeur");
  }

etudiant : string[] =[];
  //cette méthode s'execute directement aprés le constructeur
  ngOnInit(): void {
    console.log("ngOnInit!");
    //console.log(this.service.listCandidats());
    this.etudiant=this.service.listCandidats();
  }
info(){
  alert('Bienvenue a Angular')
}
}
