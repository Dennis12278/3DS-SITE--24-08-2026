import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-perfil',
  standalone: true,
  imports: [],
  templateUrl: './meu-perfil.html',
  styleUrl: './meu-perfil.css',
})
export class MeuPerfil {

  avatarUrl: string | null = null;

  selecionarAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const arquivo = input.files[0];

    if (!arquivo.type.startsWith('image/')) {
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
      this.avatarUrl = leitor.result as string;
    };

    leitor.readAsDataURL(arquivo);
  }
}