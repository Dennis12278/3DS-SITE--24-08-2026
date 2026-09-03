import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-minhas-publicacoes',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './minhas-publicacoes.html',
  styleUrl: './minhas-publicacoes.css'
})
export class MinhasPublicacoes {

  tipoSelecionado = 'Todos';

  statusSelecionado = 'Todos';

  abrirTipo(): void {

  }

  abrirStatus(): void {

  }

}
