import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/iItem';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private readonly PATH = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  // getListaDeCompra() {
  //   return this.listaDeCompra;
  // }

  cadastrar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.PATH, item);
  }

  // adicionarItemNaLista(nomeDoItem: string) {
  //   const item = this.criarItem(nomeDoItem);
  //   this.listaDeCompra.push(item);
  //   // this.atualizarLocalStorage();
  // }

  // editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
  //   const itemEditado: Item = {
  //     id: itemAntigo.id,
  //     nome: nomeEditadoDoItem,
  //     data: new Date().toLocaleString('pt-BR'),
  //     comprado: itemAntigo.comprado,
  //   };
  //   const id = itemAntigo.id;
  //   this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
  //   // this.atualizarLocalStorage();
  // }

  // atualizarLocalStorage() {
  //   localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  // }
}
