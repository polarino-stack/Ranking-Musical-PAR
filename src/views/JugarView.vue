<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const confirmationDialog = ref(null)

function showConfirmation() {
  confirmationDialog.value.showModal()
}

function startGame() {
  confirmationDialog.value.close()
  router.push('/jugar/partida')
}
</script>

<template>
  <main class="game-intro">
    <section class="intro-card">
      <div class="intro-content">
        <p class="eyebrow">¿Preparado para jugar?</p>
        <h1>Pon a prueba tu oído musical</h1>
        <p class="description">
          Escucha fragmentos de canciones del concurso, reconoce tus favoritas
          y demuestra cuánto sabes. Cada ronda te plantea un nuevo reto.
        </p>

        <div class="instructions">
          <h2>Instrucciones</h2>
          <ol>
            <li>Escucha atentamente el fragmento que se reproduce.</li>
            <li>Elige la respuesta que creas correcta entre las opciones.</li>
            <li>Acumula aciertos y comprueba tu resultado al final.</li>
          </ol>
        </div>

        <button class="start-button" type="button" @click="showConfirmation">
            Comenzar el juego
        </button>

        <dialog ref="confirmationDialog" class="confirmation-dialog">
            <h2>¿Estás seguro de que quieres comenzar?</h2>
            <p>Cuando estés preparado, confirma para ir al juego.</p>

            <div class="dialog-actions">
                <button type="button" class="cancel-button" @click="confirmationDialog.close()">
                    Cancelar
                </button>
                <button type="button" class="confirm-button" @click="startGame">
                    Sí, comenzar
                </button>
            </div>
        </dialog>
      </div>

      <img
        class="intro-image"
        src="./images/cantantes2.png"
        alt="Artistas participantes en el concurso musical"
      />
    </section>
  </main>
</template>

<style scoped>
.game-intro {
  display: grid;
  min-height: 65vh;
  place-items: center;
  padding: 3rem 1.5rem;
  background: #f7f5fa;
}

.intro-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.8fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
  width: min(100%, 1050px);
  padding: clamp(2rem, 6vw, 4rem);
  border: 1px solid #e8e4ef;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 20px 50px rgb(23 19 41 / 10%);
}

.eyebrow {
  color: #b17e20;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  margin: 0.75rem 0 1rem;
  color: #171329;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.15;
}

.description,
.instructions li {
  color: #5c5868;
  font-size: 1.05rem;
  line-height: 1.75;
}

.instructions {
  margin: 1.5rem 0;
}

.instructions h2 {
  margin-bottom: 0.5rem;
  color: #171329;
  font-size: 1.25rem;
}

.instructions ol {
  display: grid;
  gap: 0.4rem;
  padding-left: 1.4rem;
}

.intro-image {
  display: block;
  width: 100%;
  max-height: 420px;
  border-radius: 1rem;
  object-fit: cover;
}

.start-button {
  padding: 0.9rem 1.4rem;
  border: 0;
  border-radius: 0.6rem;
  background: #171329;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.start-button:hover,
.start-button:focus-visible {
  background: #30294a;
}

.start-button:focus-visible {
  outline: 3px solid #d6a84f;
  outline-offset: 3px;
}

@media (max-width: 700px) {
  .intro-card {
    grid-template-columns: 1fr;
  }

  .intro-image {
    max-height: 300px;
  }
}

.confirmation-dialog {
  width: min(90%, 420px);
  margin: auto;
  padding: 2rem;
  border: 1px solid #e8e4ef;
  border-radius: 1rem;
  color: #171329;
  box-shadow: 0 20px 50px rgb(23 19 41 / 20%);
}

.confirmation-dialog::backdrop {
  background: rgb(23 19 41 / 60%);
}

.confirmation-dialog h2 {
  margin-bottom: 0.75rem;
}

.confirmation-dialog p {
  color: #5c5868;
  line-height: 1.6;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.dialog-actions button {
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.cancel-button {
  background: #eeeaf4;
  color: #171329;
}

.confirm-button {
  background: #171329;
  color: white;
}
</style>