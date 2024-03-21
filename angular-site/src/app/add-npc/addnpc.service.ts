import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { INpc } from '../Type/Npc';
import { NpcServiceService } from '../npcs/npc-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddnpcService {

  
  url : string  = "http://localhost:8092/npcGenerator"

  constructor(
    private http: HttpClient,
    private npcService : NpcServiceService
    ) { }


  

  addNpc (npcCriado : INpc) : Observable<INpc[]>{
    return this.http.post<INpc[]>(this.url, npcCriado);
  }

  getAllNpcs () : Observable<INpc[]> {
    return this.http.get<INpc[]>(this.url);
  }


}
