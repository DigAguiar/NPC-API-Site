import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpcsRoutingModule } from './npcs-routing.module';
import { NpcsComponent } from './npcs.component';
import { DetalheNpcComponent } from './detalhe-npc/detalhe-npc.component';


@NgModule({
  declarations: [
    NpcsComponent,
    DetalheNpcComponent
  ],
  imports: [
    CommonModule,
    NpcsRoutingModule
  ]
})
export class NpcsModule { }
