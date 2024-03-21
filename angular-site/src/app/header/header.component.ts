import { Component, OnInit } from '@angular/core';
import { NpcServiceService } from '../npcs/npc-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  quantidadeNpcs : number = 0;


  constructor(private npcService : NpcServiceService) { }

  ngOnInit(): void {
    this.quantidadeNpcs = this.npcService.quantidadeNpcs();
  }

}
