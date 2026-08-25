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

  fechar(): void {

    this.fecharMenu.emit();

  }

}