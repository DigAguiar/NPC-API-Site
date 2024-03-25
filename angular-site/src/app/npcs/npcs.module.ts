import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpcsRoutingModule } from './npcs-routing.module';
import { NpcsComponent } from './npcs.component';
import { DetalheNpcComponent } from './detalhe-npc/detalhe-npc.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NpcsComponent,
    DetalheNpcComponent
  ],
  imports: [
    CommonModule,
    NpcsRoutingModule,
    MatButtonModule
  ]
})
export class NpcsModule { }
