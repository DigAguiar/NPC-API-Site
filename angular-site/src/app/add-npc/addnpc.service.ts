import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { INpc } from '../Type/Npc';

@Injectable({
  providedIn: 'root'
})
export class AddnpcService {

  vetor : INpc[] = [];


  constructor(private http: HttpClient) { }


  url : string  = "http://localhost:8080/npc"

  addNpc (npcCriado : INpc) : Observable<INpc[]>{
    return this.http.post<INpc>(this.url,"").pipe(
      map((data) => {
        this.vetor.push(npcCriado);
        return this.vetor;
      })
    );
  }


}
