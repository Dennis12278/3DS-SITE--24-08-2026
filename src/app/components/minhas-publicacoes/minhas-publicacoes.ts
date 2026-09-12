import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router) {}


  // =========================================
  // NAVEGAÇÃO DO MENU LATERAL
  // =========================================

  irParaMeuPerfil(): void {

    this.router.navigate(['/meu-perfil']);

  }


  irParaTitulosSeguidos(): void {

    this.router.navigate(['/titulos-seguidos']);

  }


  irParaMinhasPublicacoes(): void {

    this.router.navigate(['/minhas-publicacoes']);

  }


  irParaConfiguracoes(): void {

    this.router.navigate(['/configuracoes']);

  }


  irParaPerfilPublico(): void {

    this.router.navigate(['/perfil-publico']);

  }


  // =========================================
  // FILTRO POR TIPO
  // =========================================

  abrirTipo(): void {

    console.log('Tipo selecionado:', this.tipoSelecionado);

  }


  // =========================================
  // FILTRO POR STATUS
  // =========================================

  abrirStatus(): void {

    console.log('Status selecionado:', this.statusSelecionado);

  }


  // =========================================
  // CRIAR PUBLICAÇÃO
  // =========================================

  criarPublicacao(): void {

    console.log('Criar publicação');

  }

}