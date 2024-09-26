import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() produtoAdicionado = new EventEmitter<void>();

  adicionarProduto() {
    this.produtoAdicionado.emit(); // Emite o evento para adicionar produto
  }
}
