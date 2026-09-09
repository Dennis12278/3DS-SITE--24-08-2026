import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-seguidos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuarios-seguidos.html',
  styleUrl: './usuarios-seguidos.css'
})
export class UsuariosSeguidos {

  pesquisa = '';
  ordenacaoAtual = 'Recentes';

  constructor(private router: Router) {}

  irParaEditarPerfil(): void {
    this.router.navigate(['/meu-perfil']);
  }

  irParaTitulosSeguidos(): void {
    this.router.navigate(['/titulos-seguidos']);
  }

  irParaUsuariosSeguidos(): void {
    this.router.navigate(['/usuarios-seguidos']);
  }

  irParaGruposSeguidos(): void {
    this.router.navigate(['/grupos-seguidos']);
  }

  irParaHistorico(): void {
    this.router.navigate(['/historico-leitura']);
  }

  irParaColecoes(): void {
    this.router.navigate(['/colecoes']);
  }

  irParaNotificacoes(): void {
    this.router.navigate(['/notificacoes']);
  }

  irParaMinhasPublicacoes(): void {
    this.router.navigate(['/minhas-publicacoes']);
  }

  irParaConfiguracoes(): void {
    this.router.navigate(['/configuracoes']);
  }

  selecionarOrdenacao(ordenacao: string): void {
    this.ordenacaoAtual = ordenacao;
  }
}