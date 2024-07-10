import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Doces
import { NewItemFormComponent } from './components/doce/new-item-form/new-item-form.component';
import { ListItemsComponent } from './components/doce/list-items/list-items.component';
import { ItemViewComponent } from './components/doce/item-view/item-view.component';
// Clientes
import { NewClienteFormComponent } from './components/cliente/new-cliente-form/new-cliente-form.component';
import { ListClientesComponent } from './components/cliente/list-clientes/list-clientes.component';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';

const routes: Routes = [
  // Doces
  { path: 'novo', component: NewItemFormComponent },
  { path: '', component: ListItemsComponent },
  { path: 'doce/:id', component: ItemViewComponent },
  // Clientes
  { path: 'novocliente', component: NewClienteFormComponent },
  { path: 'listacliente', component: ListClientesComponent },
  { path: 'cliente/:id', component: NewClienteFormComponent }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
