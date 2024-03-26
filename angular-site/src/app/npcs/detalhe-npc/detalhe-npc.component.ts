import { Component, OnInit } from '@angular/core';
import { NpcServiceService } from '../npc-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INpc } from '../../Type/Npc';

@Component({
  selector: 'app-detalhe-npc',
  templateUrl: './detalhe-npc.component.html',
  styleUrl: './detalhe-npc.component.css'
})
export class DetalheNpcComponent implements OnInit{

  npcPeloId: INpc ={
    id: undefined,
    nome: undefined,
    idade: undefined,
    raca: undefined,
    profissao: undefined,
    alinhamento: undefined,
    atributoAlto: undefined,
    atributoBaixo: undefined,
    estiloCombate: undefined
  
  };
  id: number = 0;

  constructor(
    private npcService: NpcServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() : void{
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']; 
    });

    this.npcPeloId = this.npcService.getNpcById(this.id);

  }

  editarNpc(npc : INpc) {
  console.log('editarNpc');
  this.npcService.editarNpcExistente(npc);


  this.router.navigate(['/npcs']);
  }




}
