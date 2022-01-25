import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }


  names : string [] = ["Abdelaziz","hazem","khairi","rached"];

  
  public listCandidats()
  {
    return this.names;
  };


}
