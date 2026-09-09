import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './configuracoes.html',
  styleUrl: './configuracoes.css'
})
export class Configuracoes {

  abaAtiva: string = 'conta';

  usuarioInicial: string = 'D';

  email: string = '';

  novaSenha: string = '';

  confirmarSenha: string = '';

  perfilPublico: boolean = true;

  mostrarPublicacoes: boolean = true;

  mostrarEstatisticas: boolean = true;

  tema: string = 'escuro';


  constructor(private router: Router) {}


  // ==============================
  // NAVEGAÇÃO DO MENU
  // ==============================

  irParaMeuPerfil(): void {
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


  // ==============================
  // SALVAR CONTA
  // ==============================

  salvarConta(): void {

    if (this.novaSenha !== this.confirmarSenha) {

      alert('As senhas não são iguais.');

      return;
    }


    if (
      this.novaSenha !== '' &&
      this.novaSenha.length < 6
    ) {

      alert('A senha deve possuir pelo menos 6 caracteres.');

      return;
    }


    alert('Alterações da conta salvas com sucesso!');
  }


  // ==============================
  // SALVAR VISIBILIDADE
  // ==============================

  salvarVisibilidade(): void {

    alert('Preferências de visibilidade salvas com sucesso!');

  }


  // ==============================
  // SALVAR TEMA
  // ==============================

  salvarTema(): void {

    alert('Preferência de tema salva com sucesso!');

  }

}