import { createRouter, createWebHistory } from 'vue-router';
import ClassesVue from './components/ClassesVue.vue';
import DadosVue from './components/DadosVue.vue';
import EventosVue from './components/EventosVue.vue';
import IfElse from './components/IfElse.vue';
import InputsVue from './components/InputsVue.vue';
import MapeamentoVue from './components/MapeamentoVue.vue';
import EmissaoEventos from './components/emissaoEventos/EmissaoEventos.vue';
import routerVue from './components/RouterVue.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    { path: '/', component: DadosVue },
    { path: '/dados', component: DadosVue, name: 'Dados' },
    { path: '/inputs', component: InputsVue, name: 'Inputs' },
    { path: '/ifelse', component: IfElse, name: 'IfElse' },
    { path: '/mapeamentos', component: MapeamentoVue, name: 'Mapeamento' },
    { path: '/classes', component: ClassesVue, name: 'Classes' },
    { path: '/eventos', component: EventosVue, name: 'Eventos' },
    { path: '/emissao', component: EmissaoEventos, name: 'Emissão' },
    { path: '/router', component: routerVue, name: 'Router' },
    { path: '/router/:input?', component: routerVue },
    { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
