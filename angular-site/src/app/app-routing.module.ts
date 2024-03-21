import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNpcComponent } from './add-npc/add-npc.component';
import { NpcsComponent } from './npcs/npcs.component';

const routes: Routes = [
   
  { path: "npcs", loadChildren: () => import('./npcs/npcs.module').then(m => m.NpcsModule) },
  { path: "add-npc", component: AddNpcComponent },
  { path: "", redirectTo: 'npcs', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
