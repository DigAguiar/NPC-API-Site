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
    this.getAllNpcs();
  }

  getAllNpcs() : void {
    this.npcService.getAllNpcs().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }


}
