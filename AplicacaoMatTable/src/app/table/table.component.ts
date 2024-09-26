import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Item {
  codigo: string;
  descricao: string;
}

const DADOS_ESTATICOS: Item[] = [
  { codigo: '001', descricao: 'Arroz 1kg' },
  { codigo: '002', descricao: 'Feijão 1kg' },
  { codigo: '003', descricao: 'Açúcar 1kg' },
  { codigo: '004', descricao: 'Sal 1kg' },
  { codigo: '005', descricao: 'Óleo de soja 900ml' },
  { codigo: '006', descricao: 'Macarrão 500g' },
  { codigo: '007', descricao: 'Molho de tomate 340g' },
  { codigo: '008', descricao: 'Leite 1L' },
  { codigo: '009', descricao: 'Queijo Mussarela 200g' },
  { codigo: '010', descricao: 'Pão Francês' }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  colunasExibidas: string[] = ['codigo', 'descricao'];
  fonteDeDados = new MatTableDataSource<Item>(DADOS_ESTATICOS);

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) organizador!: MatSort;

  ngOnInit() {
    this.fonteDeDados.paginator = this.paginador;
    this.fonteDeDados.sort = this.organizador;
  }

  aplicarFiltro(evento: Event) {
    const valorFiltro = (evento.target as HTMLInputElement).value;
    this.fonteDeDados.filter = valorFiltro.trim().toLowerCase();

    if (this.fonteDeDados.paginator) {
      this.fonteDeDados.paginator.firstPage();
    }
  }

  adicionarProduto(descricao: string) {
    const ultimoCodigo = this.fonteDeDados.data.length > 0 ? 
      Math.max(...this.fonteDeDados.data.map(item => parseInt(item.codigo))) : 0;
    const novoCodigo = (ultimoCodigo + 1).toString().padStart(3, '0');

    // Cria o novo produto
    const novoProduto: Item = { codigo: novoCodigo, descricao: descricao };
    this.fonteDeDados.data = [...this.fonteDeDados.data, novoProduto];
  }
}
