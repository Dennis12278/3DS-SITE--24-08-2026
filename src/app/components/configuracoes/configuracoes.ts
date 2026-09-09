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

  // =========================================
  // ABA ATIVA
  // =========================================

  abaAtiva: string = 'conta';


  // =========================================
  // CONTA
  // =========================================

  usuarioInicial: string = 'D';

  email: string = '';

  novaSenha: string = '';

  confirmarSenha: string = '';


  // =========================================
  // VISIBILIDADE
  // =========================================

  perfilPublico: boolean = true;

  mostrarPublicacoes: boolean = true;

  mostrarEstatisticas: boolean = true;


  // =========================================
  // TEMA
  // =========================================

  tema: string = 'escuro';


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


  // =========================================
  // CONTA
  // =========================================

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


  // =========================================
  // VISIBILIDADE
  // =========================================

  salvarVisibilidade(): void {

    alert(
      'Preferências de visibilidade salvas com sucesso!'
    );

  }


  // =========================================
  // TEMA
  // =========================================

  salvarTema(): void {

    alert(
      'Preferência de tema salva com sucesso!'
    );

  }

}