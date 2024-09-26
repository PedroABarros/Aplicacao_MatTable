import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  onProdutoAdicionado(descricao: string) {
    this.tableComponent.adicionarProduto(descricao); 
  }
}
