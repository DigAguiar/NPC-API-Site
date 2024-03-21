import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { INpc } from '../Type/Npc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcServiceService {

  url : string = "http://localhost:8092/npcGenerator";

  vetor : INpc[] = [
    {
      id: 1,
      nome: "Gandalf",
      idade: 78,
      raca: "Gnomo",
      profissao: "Mago",
      alinhamento: "Neutro",
      atributoAlto: "Inteligência",
      atributoBaixo: "Força",
      estiloCombate: "Magia"
    }
  ];


  constructor(private http : HttpClient) { }


  quantidadeNpcs() : number  {
    return this.vetor.length;
  }

  getAllNpcs () : Observable<INpc[]> {
    return this.http.get<INpc[]>(this.url);
  }
  


}
