import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar'; // Módulo para MatToolbar
import { MatCardModule } from '@angular/material/card'; // Módulo para MatCard
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule para o roteamento

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';

// Define as rotas
const appRoutes: Routes = [
  { path: '', component: TableComponent }, // Rota padrão
  { path: '**', redirectTo: '', pathMatch: 'full' } // Rota coringa para redirecionar a rota desconhecida para a página principal
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule, // Módulo para MatToolbar
    MatCardModule, // Módulo para MatCard
    RouterModule.forRoot(appRoutes) // Adiciona RouterModule com as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
