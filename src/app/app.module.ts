import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//Doces
import { NewItemFormComponent } from './components/doce/new-item-form/new-item-form.component';
import { ListItemsComponent } from './components/doce/list-items/list-items.component';
import { ItemViewComponent } from './components/doce/item-view/item-view.component';
//Clientes
import { NewClienteFormComponent } from './components/cliente/new-cliente-form/new-cliente-form.component';
import { ListClientesComponent } from './components/cliente/list-clientes/list-clientes.component';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NewItemFormComponent,
    ListItemsComponent,
    ItemViewComponent,
    NewClienteFormComponent,
    ListClientesComponent,
    ClienteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
