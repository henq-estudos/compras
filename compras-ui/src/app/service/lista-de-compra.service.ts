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

  cadastrar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.PATH, item);
  }

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.PATH);
  }

  deletar(id: number) {
    const url = `${this.PATH}/${id}`;
    return this.http.delete(url);
  }

}
