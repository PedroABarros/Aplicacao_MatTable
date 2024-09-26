import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: '', component: TableComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
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
    MatToolbarModule, 
    MatCardModule, 
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
