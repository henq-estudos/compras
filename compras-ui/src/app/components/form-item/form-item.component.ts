import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  editando = false;
  textoBtn = 'Salvar item';

  formItem!: FormGroup;

  valorItem!: string;
  constructor(private listaService: ListaDeCompraService, private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formItem = this.formBuilder.group({
      nome: ["", Validators.required],
    })
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
    this.listaService.cadastrar(dados).subscribe(() => {
      this.formItem.reset();
      this.cd.detectChanges(); // Força a detecção de mudanças
    });
  }

  limparCampo() {
    this.valorItem = '';
  }

  editarItem() {
    this.editando = false;
    this.textoBtn = 'Salvar item';
  }

  // atualizarItemMarcado() {
  //   this.listaService.atualizarItemMarcado(this.itemMarcado);
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }
}
