import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent {
  nome: any = 'abc';

  pessoa: any = {
    nome: 'Teste',
    idade: 20
  }

}
