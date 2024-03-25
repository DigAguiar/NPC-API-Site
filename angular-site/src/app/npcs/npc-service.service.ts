import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { INpc } from '../Type/Npc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcServiceService {

  url : string = "http://localhost:8092/npcGenerator";

  vetor : INpc[] = [];
  qtdeNPC : number | any;

  constructor(private http : HttpClient) { }

  getVetor() : INpc[] {
    return this.vetor;
  }

  getNpcById(id : number) {
    
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
