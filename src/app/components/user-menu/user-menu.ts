import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css'
})
export class UserMenuComponent {

  constructor(private router: Router) {}

  irParaMeuPerfil() {
    this.router.navigate(['/meu-perfil']);
  }

}