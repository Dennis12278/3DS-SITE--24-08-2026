import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { MeuPerfil } from './components/meu-perfil/meu-perfil';
import { MinhasPublicacoes } from './components/minhas-publicacoes/minhas-publicacoes';
import { TitulosSeguidos } from './components/titulos-seguidos/titulos-seguidos';
import { PerfilPublico } from './components/perfil-publico/perfil-publico';
import { UsuariosSeguidos } from './components/usuarios-seguidos/usuarios-seguidos';
import { Calendario } from './components/calendario/calendario';
import { GruposSeguidos } from './components/grupos-seguidos/grupos-seguidos';

export const routes: Routes = [

  { path: '', component: Home },

  { path: 'meu-perfil', component: MeuPerfil },

  { path: 'titulos-seguidos', component: TitulosSeguidos },

  { path: 'usuarios-seguidos', component: UsuariosSeguidos },

  { path: 'minhas-publicacoes', component: MinhasPublicacoes },

  { path: 'perfil-publico', component: PerfilPublico },

  {
    path: 'configuracoes',
    loadComponent: () =>
      import('./components/configuracoes/configuracoes')
        .then(m => m.Configuracoes)
  },

  { path: 'calendario', component: Calendario }

];
