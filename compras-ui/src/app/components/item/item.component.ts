import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() onItemEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor(private listaService: ListaDeCompraService) { }

  editarItem() {
    this.onItemEdit.emit(this.item);
  }

  deletarItem(id: number) {
    this.onDelete.emit(id);
  }

  alterarEstiloItemMarcado(item: Item) {
    if (!item.comprado) {
      return '';
    } else {
      return 'line-through';
    }
  }

  onCheckboxChange(valor: boolean) {
    this.item.comprado = valor;
    this.listaService.atualizar(this.item).subscribe();

  }
}
