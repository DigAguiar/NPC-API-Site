import { Component, OnInit } from '@angular/core';
import { NpcServiceService } from '../npc-service.service';
import { ActivatedRoute } from '@angular/router';
import { INpc } from '../../Type/Npc';

@Component({
  selector: 'app-detalhe-npc',
  templateUrl: './detalhe-npc.component.html',
  styleUrl: './detalhe-npc.component.css'
})
export class DetalheNpcComponent implements OnInit{

  npcPeloId: INpc | undefined;
  id: number = 0;

  constructor(
    private npcService: NpcServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() : void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; 
    });

    this.npcPeloId = this.npcService.getNpcById(this.id);

  }




}
