import { Component, OnInit, Provider } from '@angular/core';
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
users : any;
providers : any;
  //cette méthode s'execute directement aprés le constructeur
  ngOnInit(): void {
    console.log("ngOnInit!");
    //console.log(this.service.listCandidats());
    this.etudiant=this.service.listCandidats();


    //recuperation des données de l'api BsApi
    this.service.lisProviders().subscribe(
      res =>{
        console.log(res);
         this.providers =res;
      }
    );

    //recuperation des données fake : https://jsonplaceholder.typicode.com/users
    this.service.lisUsers().subscribe(
      data => {
    console.log(data);
    this.users=data;
      
    }); 
  }
info(){
  alert('Bienvenue a Angular')
}


submitProvider(formProvider: any){

  alert(formProvider.value.nameProvider + " "+ formProvider.value.addressProvider  )
let provider = {
  name:formProvider.value.nameProvider,
  address: formProvider.value.addressProvider ,
  email : formProvider.value.emailProvider 
}

  this.service.addProvider(provider).subscribe(
    data => {
      console.log(data);
      alert('Ajout avec succees');
    }
  );
}

}
