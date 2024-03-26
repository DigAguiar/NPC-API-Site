import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { INpc } from '../Type/Npc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcServiceService {

  url : string = "http://localhost:8092/npcGenerator";

  temp : number = 0;
  vetor : INpc[] = [];
  qtdeNPC : number | any;
  npcTemp : INpc = {
    id : undefined,
    nome : undefined,
    idade : undefined,
    raca : undefined,
    profissao : undefined,
    alinhamento : undefined,
    atributoAlto : undefined,
    atributoBaixo : undefined,
    estiloCombate : undefined
  };

  constructor(private http : HttpClient) { }


  getNpcById(id : number | undefined) : INpc {
    this.http.get<INpc[]>(this.url).subscribe((data) => {
      this.vetor = data;
    });
    console.log( "vetor: " ,  this.vetor);
    console.log(id)

    this.vetor.forEach((npc) => {
      console.log("foreach")
      if (id == npc.id) {
        console.log("entrou");
        this.npcTemp = npc;
      }
        
    });


    return this.npcTemp;
    
  }


  quantidadeNpcs() : number  {
    let qtd : number | any;
    this.getAllNpcs().subscribe((data) => {
      qtd = data.length;
    });

    return qtd;
  }

  getAllNpcs () : Observable<INpc[]> {
    
    return this.http.get<INpc[]>(this.url);
  }

  excluirNpcExisten (idNpc : number | undefined) {
    return this.http.delete(this.url + "/delete=" + idNpc);

  }
  
  


}
