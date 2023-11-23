import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  urlImagem: string = 'http://lorempixel.com.br/500/400/?2';
  cursoAngular: boolean = true;
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Teste',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
