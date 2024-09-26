import { Component, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(TableComponent) tableComponent!: TableComponent; // Referência ao componente da tabela

  // Método que será chamado quando um produto for adicionado
  onProdutoAdicionado() {
    this.tableComponent.adicionarProduto(); // Chama a função para adicionar produto
  }
}
