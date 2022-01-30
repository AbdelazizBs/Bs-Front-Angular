import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  providerNom : string = "Samsung";
  providerEmail : string = "samsung@gmail.com";
  nom : string = "Azzouz";
  constructor() { }

  ngOnInit(): void {
  }


  info(){
    alert(this.providerNom+" "+this.providerEmail);
    //Save dans BD
    // ...
  }


  submit( f:any){
alert(f.value.nomEtudiant+ " " + f.value.prenomEtudiant );
  }
}
