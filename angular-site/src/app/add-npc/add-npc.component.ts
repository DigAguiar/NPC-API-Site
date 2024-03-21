import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { INpc } from '../Type/Npc';
import { Observable } from 'rxjs';
import { AddnpcService } from './addnpc.service';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrl: './add-npc.component.css'
})
export class AddNpcComponent {

  url: string = "http://localhost:8080/npc"

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

  constructor(private addNpc: AddnpcService) { }

  criarNpc(): void {
    this.addNpc.addNpc(this.npcCriado).subscribe((data: INpc[]) => {
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
