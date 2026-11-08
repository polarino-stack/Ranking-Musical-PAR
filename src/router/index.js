import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JugarView from '@/views/JugarView.vue'
import RankingView from '@/views/RankingView.vue'
import ContactoView from '@/views/ContactoView.vue'
import PartidaView from '../views/PartidaView.vue'
import EscenarioView from '@/views/EscenarioView.vue'

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
      name: 'Escenario',
      component: EscenarioView,
    }
  ],
})

export default router
