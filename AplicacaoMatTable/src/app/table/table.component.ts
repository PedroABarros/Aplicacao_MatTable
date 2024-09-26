import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Item {
  codigo: string;
  descricao: string;
}

const DADOS_ESTATICOS: Item[] = [
  { codigo: '001', descricao: 'Produto A' },
  { codigo: '002', descricao: 'Produto B' },
  { codigo: '003', descricao: 'Produto C' },
  { codigo: '004', descricao: 'Produto D' },
  { codigo: '005', descricao: 'Produto E' },
  { codigo: '006', descricao: 'Produto F' },
  { codigo: '007', descricao: 'Produto G' },
  { codigo: '008', descricao: 'Produto H' },
  { codigo: '009', descricao: 'Produto I' },
  { codigo: '010', descricao: 'Produto J' }
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
}
