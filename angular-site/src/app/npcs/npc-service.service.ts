import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { INpc } from '../Type/Npc';

@Injectable({
  providedIn: 'root'
})
export class NpcServiceService {

  url : string = "http://localhost:8080/npc";

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
  


}
