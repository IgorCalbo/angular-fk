import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "Igor";
  idButton = "fdksas"
  mostrarTitulo = false;
  listaFrutas = ["maça", "banana", "laranja"]

  @Input("name") minhaPropsDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  submit() {
    this.emitindoValorName.emit(this.name)
    this.enviaFormularioService.enviaInformacaoBackend("enviando informação");
  }
}
