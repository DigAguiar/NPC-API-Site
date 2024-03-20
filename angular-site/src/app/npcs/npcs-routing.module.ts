import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpcsComponent } from './npcs.component';

const routes: Routes = [
  { path: '', component: NpcsComponent },
  { path: ':id', component: NpcsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpcsRoutingModule { }
