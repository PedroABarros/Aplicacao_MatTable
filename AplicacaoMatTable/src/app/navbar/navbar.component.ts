import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() produtoAdicionado = new EventEmitter<string>();

  adicionarProduto() {
    const descricao = prompt("Digite a descrição do produto:") || ''; // Solicita descrição do produto
    this.produtoAdicionado.emit(descricao); // Emite o evento com a descrição
  }
}
