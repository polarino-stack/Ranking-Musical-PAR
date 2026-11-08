<template>

  <main class="game">
    <section class="game-card">
      <p class="eyebrow">Antes de empezar</p>
      <h1>Prueba de sonido</h1>
      <p class="description">
        Reproduce el audio y comprueba que puedes escucharlo. Esta prueba no
        cuenta para la partida.
      </p>

      <audio id="test-audio" preload="metadata">
        <source src="/audio/TestAudio.mp3" type="audio/mpeg" />
        Tu navegador no puede reproducir este audio.
      </audio>

      <div class="audio-player">
        <div class="audio-controls">
          <button @click="testAudio" class="play-button" type="button">
            Reproducir prueba
          </button>
          <button @click="stopAudio" class="stop-button" type="button">
            Parar prueba
          </button>
        </div>
        <p id="audio-status" class="audio-status" aria-live="polite">
          Pulsa el botón para escuchar el audio.
        </p>
      </div>

      <fieldset class="sound-check">
        <legend>¿Has podido escuchar el audio?</legend>
        <div class="answer-buttons">
          <button id="audio-heard-yes" class="answer-button yes-button" type="button" @click="comenzarPartida">
            Sí, se oye
          </button>
          <button id="audio-heard-no" class="answer-button no-button" type="button">
            No se oye
          </button>
        </div>
      </fieldset>
    </section>
  </main>
</template>

<script setup>
  import { Howler } from 'howler';
  import { Howl } from 'howler';
  import router from '@/router';


  const audioTest = new Howl({
      src: ['/audio/PruebaAudio.mp3']
  })

  function testAudio() {
    console.log('¡Click!')
    console.log(audioTest.name)

    if (audioTest.playing = true) {
      audioTest.stop();
    }

      audioTest.play();
  }

  function stopAudio() {
    console.log('Click')

    audioTest.stop();
  }

  function comenzarPartida() {
    router.push('/jugar/partida/escenario')
  }
  
</script>

<style scoped>
.game {
  display: grid;
  min-height: 65vh;
  place-items: center;
  padding: 3rem 1.5rem;
  background: #f7f5fa;
}

.game-card {
  width: min(100%, 760px);
  padding: clamp(2rem, 6vw, 4rem);
  border: 1px solid #e8e4ef;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 20px 50px rgb(23 19 41 / 10%);
  text-align: center;
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
  font-size: clamp(2rem, 5vw, 3rem);
}

.description {
  max-width: 38rem;
  margin: 0 auto;
  color: #5c5868;
  line-height: 1.7;
}

.audio-player {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #efeaf8;
  border-radius: 1rem;
  background: #faf7ff;
}

.audio-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.play-button,
.stop-button {
  padding: 0.85rem 1.4rem;
  border: 0;
  border-radius: 0.65rem;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.play-button {
  background: #171329;
}

.play-button:hover {
  background: #30294a;
}

.stop-button {
  background: #713e58;
}

.stop-button:hover {
  background: #5a3046;
}

.play-button:focus-visible,
.stop-button:focus-visible {
  outline: 3px solid #d6a84f;
  outline-offset: 3px;
}

.audio-status {
  margin: 1rem 0 0;
  color: #5c5868;
  line-height: 1.6;
}

.sound-check {
  margin: 0;
  padding: 0;
  border: 0;
}

.sound-check legend {
  width: 100%;
  margin-bottom: 1rem;
  color: #171329;
  font-size: 1.1rem;
  font-weight: 700;
}

.answer-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.answer-button {
  min-width: 150px;
  padding: 0.85rem 1.25rem;
  border: 0;
  border-radius: 0.65rem;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.yes-button {
  background: #246b45;
}

.yes-button:hover {
  background: #1c5537;
}

.no-button {
  background: #713e58;
}

.no-button:hover {
  background: #5a3046;
}

.answer-button:focus-visible {
  outline: 3px solid #d6a84f;
  outline-offset: 3px;
}

@media (max-width: 480px) {
  .answer-buttons {
    flex-direction: column;
  }

  .answer-button {
    width: 100%;
  }
}
</style>