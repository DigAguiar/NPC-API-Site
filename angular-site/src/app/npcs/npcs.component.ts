import { Component, OnInit } from '@angular/core';
import { NpcServiceService } from './npc-service.service';

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrl: './npcs.component.css'
})
export class NpcsComponent implements OnInit{


  constructor(private npcService : NpcServiceService) { }

  ngOnInit(): void {
    
  }


}
