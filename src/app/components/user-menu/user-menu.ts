import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css'
})
export class UserMenuComponent {

  @Output() fecharMenu = new EventEmitter<void>();

  constructor(private router: Router) {}

  irParaMeuPerfil(): void {

    this.fecharMenu.emit();

    this.router.navigate(['/meu-perfil']);

  }

  irParaPerfilPublico(): void {

    this.fecharMenu.emit();

    this.router.navigate(['/perfil-publico']);

  }

  irParaTitulosSeguidos(): void {

    this.fecharMenu.emit();

    this.router.navigate(['/titulos-seguidos']);

  }

  irParaMinhasPublicacoes(): void {

    this.fecharMenu.emit();

    this.router.navigate(['/minhas-publicacoes']);

  }

  fechar(): void {

    this.fecharMenu.emit();

  }

}
