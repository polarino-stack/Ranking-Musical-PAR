<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="app-header">
    <RouterLink class="app-header-brand" to="/">Concurso Musical</RouterLink>

    <nav
      v-if="route.path !== '/jugar/partida'"
      class="app-header-nav"
      aria-label="Navegación principal"
    >
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/jugar">Jugar</RouterLink>
      <RouterLink to="/ranking">Ranking</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
    <RouterLink v-else class="app-header-back" to="/jugar">← Volver</RouterLink>
  </header>

  <RouterView />

  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-main">
        <section class="footer-about">
          <RouterLink class="footer-brand" to="/">Concurso Musical</RouterLink>
          <p>
            Un espacio para descubrir canciones, seguir el concurso
            y celebrar la música.
          </p>
        </section>

        <nav class="footer-nav" aria-label="Navegación del pie de página">
          <h2>Explora</h2>
          <RouterLink to="/">Inicio</RouterLink>
          <a href="/#como-funciona">Cómo funciona</a>
        </nav>

        <section class="footer-message">
          <h2>¿Preparado para escuchar?</h2>
          <p>Descubre las canciones que compiten esta temporada.</p>
        </section>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Concurso Musical</p>
        <p>Hecho para amantes de la música.</p>
      </div>
    </div>
  </footer>
</template>
