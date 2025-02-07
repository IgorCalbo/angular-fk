import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoBackend(info: string) {
    console.log("enviando para o backend")
  }
}
