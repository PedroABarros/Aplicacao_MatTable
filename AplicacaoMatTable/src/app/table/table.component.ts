import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Item {
  codigo: string;
  descricao: string;
  preco: number;
}

const DADOS_ESTATICOS: Item[] = [
  { codigo: '001', descricao: 'Arroz 1kg', preco: 5.99 },
  { codigo: '002', descricao: 'Feijão 1kg', preco: 6.49 },
  { codigo: '003', descricao: 'Açúcar 1kg', preco: 3.29 },
  { codigo: '004', descricao: 'Sal 1kg', preco: 2.50 },
  { codigo: '005', descricao: 'Óleo de soja 900ml', preco: 7.80 },
  { codigo: '006', descricao: 'Macarrão 500g', preco: 4.99 },
  { codigo: '007', descricao: 'Molho de tomate 340g', preco: 3.40 },
  { codigo: '008', descricao: 'Leite 1L', preco: 4.80 },
  { codigo: '009', descricao: 'Queijo Mussarela 200g', preco: 10.90 },
  { codigo: '010', descricao: 'Pão Francês', preco: 12.00 }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  colunasExibidas: string[] = ['codigo', 'descricao', 'preco'];
  fonteDeDados = new MatTableDataSource<Item>(DADOS_ESTATICOS);

  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) organizador!: MatSort;

  ngOnInit() {
    // Vincula o paginator e o sort à fonte de dados
    this.fonteDeDados.paginator = this.paginador;
    this.fonteDeDados.sort = this.organizador;
  }

  aplicarFiltro(evento: Event) {
    const valorFiltro = (evento.target as HTMLInputElement).value.trim().toLowerCase();
    this.fonteDeDados.filter = valorFiltro;

    if (this.fonteDeDados.paginator) {
      this.fonteDeDados.paginator.firstPage(); // Volta para a primeira página ao filtrar
    }
  }

  adicionarProduto() {
    const descricao = prompt('Digite a descrição do produto:');
    const preco = parseFloat(prompt('Digite o preço do produto:') || '0');
    
    if (descricao && !isNaN(preco)) {
      const ultimoCodigo = this.fonteDeDados.data.length > 0 ? 
        Math.max(...this.fonteDeDados.data.map(item => parseInt(item.codigo))) : 0;
      const novoCodigo = (ultimoCodigo + 1).toString().padStart(3, '0');
  
      const novoProduto: Item = { codigo: novoCodigo, descricao: descricao, preco: preco };
      this.fonteDeDados.data = [...this.fonteDeDados.data, novoProduto];
    }
  }
}
