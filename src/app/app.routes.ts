import { Routes } from '@angular/router';

import { MeuPerfil } from './components/meu-perfil/meu-perfil';
import { MinhasPublicacoes } from './components/minhas-publicacoes/minhas-publicacoes';
import { TitulosSeguidos } from './components/titulos-seguidos/titulos-seguidos';
import { PerfilPublico } from './components/perfil-publico/perfil-publico';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'meu-perfil',
    pathMatch: 'full'
  },

  {
    path: 'meu-perfil',
    component: MeuPerfil
  },

  {
    path: 'minhas-publicacoes',
    component: MinhasPublicacoes
  },

  {
    path: 'titulos-seguidos',
    component: TitulosSeguidos
  },

  {
    path: 'perfil-publico',
    component: PerfilPublico
  },
  
  {
    path: 'configuracoes',
    loadComponent: () =>
        import('./components/configuracoes/configuracoes')
            .then(m => m.Configuracoes)
}

];
