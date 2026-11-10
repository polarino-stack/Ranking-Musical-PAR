import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JugarView from '@/views/JugarView.vue'
import RankingView from '@/views/RankingView.vue'
import ContactoView from '@/views/ContactoView.vue'
import PartidaView from '../views/PartidaView.vue'
import EscenarioPregunta1View from '@/views/EscenarioPregunta1View.vue'
import EscenarioPregunta2View from '@/views/EscenarioPregunta2View.vue'
import EscenarioPregunta3View from '@/views/EscenarioPregunta3View.vue'
import EscenarioPregunta4View from '@/views/EscenarioPregunta4View.vue'
import EscenarioPregunta5View from '@/views/EscenarioPregunta5View.vue'
import EscenarioPregunta6View from '@/views/EscenarioPregunta6View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jugar',
      name: 'jugar',
      component: JugarView,
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: RankingView,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: ContactoView,
    },
    {
      path: '/jugar/partida',
      name: 'Partida',
      component: PartidaView,
    },
    {
      path: '/jugar/partida/escenario',
      redirect: '/jugar/partida/escenario/1',
    },
    {
      path: '/jugar/partida/escenario/1',
      name: 'EscenarioPregunta1',
      component: EscenarioPregunta1View,
    },
    {
      path: '/jugar/partida/escenario/2',
      name: 'EscenarioPregunta2',
      component: EscenarioPregunta2View,
    },
    {
      path: '/jugar/partida/escenario/3',
      name: 'EscenarioPregunta3',
      component: EscenarioPregunta3View,
    },
    {
      path: '/jugar/partida/escenario/4',
      name: 'EscenarioPregunta4',
      component: EscenarioPregunta4View,
    },
    {
      path: '/jugar/partida/escenario/5',
      name: 'EscenarioPregunta5',
      component: EscenarioPregunta5View,
    },
    {
      path: '/jugar/partida/escenario/6',
      name: 'EscenarioPregunta6',
      component: EscenarioPregunta6View,
    },
  ],
})

export default router
