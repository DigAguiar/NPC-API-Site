import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpcsComponent } from './npcs.component';
import { DetalheNpcComponent } from './detalhe-npc/detalhe-npc.component';

const routes: Routes = [
  { path: '', component: NpcsComponent },
  { path: ':id', component: DetalheNpcComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpcsRoutingModule { }
