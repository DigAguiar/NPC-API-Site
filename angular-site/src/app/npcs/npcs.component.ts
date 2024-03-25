import { Component, OnInit } from '@angular/core';
import { NpcServiceService } from './npc-service.service';
import { INpc } from '../Type/Npc';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent implements OnInit{

  vetorNpcs : INpc[] = [];	

  constructor(private npcService : NpcServiceService) { }

  ngOnInit(): void {
    this.getAllNpcs();
  }

  getAllNpcs() : void {
    this.npcService.getAllNpcs().subscribe((data) => {
      this.vetorNpcs = data;
    });

  }

  excluirNpc (idNpc : number | undefined) {
    this.npcService.excluirNpcExisten(idNpc).subscribe(() => {
      this.getAllNpcs();
    });
  }


}
