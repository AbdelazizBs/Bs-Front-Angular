import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http : HttpClient) { }


  names : string [] = ["Abdelaziz","hazem","khairi","rached"];

  
   listCandidats()
  {
    return this.names;
  }
  lisProviders(){
    return this.http.get("http://127.0.0.1:8080/providers/list");
  }

  lisUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }


  addProvider(provider : any){
    return this.http.post("http://127.0.0.1:8080/providers/add",provider);
  }


}
