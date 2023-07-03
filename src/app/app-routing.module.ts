import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrigliaComponent } from './griglia/griglia.component';
import { NodoComponent } from './nodo/nodo.component';

const routes: Routes = [
  { path: '', component: GrigliaComponent},
  { path: 'node/:id', component: NodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
