import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatData } from 'src/app/core/utils/format-data-utils';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css'],
})
export class FormItemComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  @Output() onSubmit: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() onEdit: EventEmitter<Item> = new EventEmitter<Item>();
  editando = false;
  textoBtn = 'Salvar item';

  formItem!: FormGroup;

  constructor(private listaService: ListaDeCompraService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.inicializarForm();
  }

  get nome() {
    return this.formItem.get('nome')!;
  }

  adicionarItem() {
    if (this.formItem.invalid) {
      return;
    }
    const dados: Item = {
      id: 0,
      nome: this.formItem.value.nome,
      data: formatData(new Date),
      comprado: false
    }
    this.onSubmit.emit(dados);
    this.formItem.reset();
  }

  editarItem() {
    const dados: Item = {
      id: this.itemQueVaiSerEditado.id,
      nome: this.formItem.value.nome,
      data: formatData(new Date),
      comprado: this.itemQueVaiSerEditado.comprado
    }
    this.onEdit.emit(dados);
    this.formItem.reset();
    this.textoBtn = 'Salvar item';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.inicializarForm();
    }
  }

  inicializarForm() {
    this.formItem = this.formBuilder.group({
      nome: [this.itemQueVaiSerEditado ? this.itemQueVaiSerEditado.nome : '', Validators.required]
    })
  }


}
