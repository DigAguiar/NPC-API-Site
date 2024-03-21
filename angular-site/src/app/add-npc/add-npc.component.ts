import { Component } from '@angular/core';
import { INpc } from '../Type/Npc';
import { AddnpcService } from './addnpc.service';
import { NpcServiceService } from '../npcs/npc-service.service';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrl: './add-npc.component.css'
})
export class AddNpcComponent {


  npcCriado: INpc = {
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

  vetorNpcs: INpc[] = [];

  constructor(
    private addNpcService: AddnpcService,
    private npcService : NpcServiceService
    ) { }

  criarNpc () {
    this.npcCriado.id = this.npcService.quantidadeNpcs() + 1;
    
    this.addNpcService.addNpc(this.npcCriado).subscribe((data: INpc[]) => {
      this.vetorNpcs = data;

      this.npcCriado = {
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

    });

  }
}
