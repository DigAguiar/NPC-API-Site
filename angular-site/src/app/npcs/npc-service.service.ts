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


  constructor(private http : HttpClient) { }

  getVetor() : INpc[] {
    return this.vetor;
  }

  quantidadeNpcs() : number  {
    let qtdeNPC : number = 0;
    this.getAllNpcs().subscribe((data) => {
      qtdeNPC = data.length;
    });

    return qtdeNPC;
  }

  getAllNpcs () : Observable<INpc[]> {
    
    return this.http.get<INpc[]>(this.url);
  }
  
  


}
