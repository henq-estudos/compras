import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompra: Item[] = [];
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.atualizarLista();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompra.findIndex((item) => item.id === id);
    this.listaDeCompra.splice(index, 1);
  }

  limparLista() {
    this.listaDeCompra = [];
  }

  creatHandler(item: Item) {
    this.listaService.cadastrar(item).subscribe(() => {
      this.atualizarLista();
    });
  }

  atualizarLista() {
    this.listaService.listar().subscribe(dados => {
      this.listaDeCompra = dados.map(item => {
        item.data = new Date(item.data).toLocaleString('pt-BR');
        return item;
      });
    });
  }
}
