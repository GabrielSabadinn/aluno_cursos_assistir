import { createRouter, createWebHistory } from 'vue-router';
import AlunoPrincipal from '../views/AlunoPrincipal.vue';
import AlunoMensagens from '../views/AlunoMensagens.vue'
import MeusCursos from '../views/MeusCursos.vue'
import AreaAluno from '../views/AreaAluno.vue'
import AssistirCurso from '../views/AssistirCurso.vue'
import AreaEmpresa from '../views/AreaEmpresa.vue'
import carrinhoCompra from '../views/carrinhoCompra.vue'
const routes = [
  {
    path: '/',
    name: 'AlunoPrincipal',
    component: AlunoPrincipal
  },
  {
    path: '/Mensagens',
    name: 'AlunoMensagens',
    component: AlunoMensagens
  },
  {
    path: '/MeusCursos',
    name: 'MeusCursos',
    component: MeusCursos
  },
  {
    path: '/AreaAluno',
    name: 'AreaAluno',
    component: AreaAluno
  },
  {
    path: '/AssistirCurso',
    name: 'AssistirCurso',
    component: AssistirCurso
  },
  {
    path: '/AreaEmpresa',
    name: 'AreaEmpresa',
    component: AreaEmpresa
  },  
  {
    path: '/lefiscCursos/carrinhoCompra',
    name: 'carrinho-compra',
    component: carrinhoCompra
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
