import { Component } from '@angular/core';
import { NpcServiceService } from '../npc-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-npc',
  templateUrl: './detalhe-npc.component.html',
  styleUrl: './detalhe-npc.component.css'
})
export class DetalheNpcComponent {

  constructor(
    npcService : NpcServiceService,
    route : ActivatedRoute
    ) { }

  ngOnInit() {}

}
