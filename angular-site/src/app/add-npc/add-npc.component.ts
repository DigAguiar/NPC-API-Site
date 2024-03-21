import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { INpc } from '../Type/Npc';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrl: './add-npc.component.css'
})
export class AddNpcComponent {

  npcCriado : INpc = {
    id : 0,
    nome : "",
    idade : 0,
    raca : "",
    profissao : "",
    alinhamento : "",
    atributoAlto : "",
    atributoBaixo : "",
    estiloCombate : ""
  };

  constructor(private http : HttpClient) { }

  criarNpc() {
    this.http.post<INpc>('http://localhost:3000/npc', this.npcCriado).subscribe((data) => {
      this.npcCriado = data;
    });
  }

}
