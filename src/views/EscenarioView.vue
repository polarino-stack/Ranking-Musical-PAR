<template>
  <main class="stage">
    <section class="stage-content" aria-labelledby="stage-title">
      <header class="round-header">
        <div class="round-label">
          <span class="round-number">01</span>
          <div>
            <p class="eyebrow">Concurso musical</p>
            <h1 id="stage-title">Ronda 1</h1>
          </div>
        </div>

        <div class="score-card">
          <span class="score-label">Puntuación</span>
          <strong>0 <span>pts</span></strong>
        </div>
      </header>

      <div
        class="round-progress"
        role="progressbar"
        aria-label="Progreso de la partida"
        aria-valuemin="0"
        aria-valuemax="10"
        aria-valuenow="1"
      >
        <span class="round-progress-fill"></span>
      </div>
      <p class="round-count">Pregunta 1 de 10</p>

      <section class="question-card" aria-labelledby="question-title">
        <p class="eyebrow">Escucha y adivina</p>
        <h2 id="question-title">¿Qué canción está sonando?</h2>
        <p class="question-description">
          Escucha el fragmento y elige la respuesta correcta.
        </p>

        <div class="audio-placeholder" aria-label="Espacio reservado para el reproductor de audio">
          <div class="record-art" aria-hidden="true">
            <span class="record-center"></span>
          </div>
          <div class="audio-placeholder-content">
            <span class="audio-kicker">Fragmento musical</span>
            <span class="audio-placeholder-title">El reproductor irá aquí</span>
          </div>
          <div class="sound-bars" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <section class="answers" aria-labelledby="answers-title">
          <h3 id="answers-title">Selecciona una respuesta</h3>
          <div class="answer-list">
            <article class="answer-option">
              <span class="answer-letter">A</span>
              <span class="answer-copy">
                <strong>Título de la canción</strong>
                <span>Nombre del artista</span>
              </span>
            </article>
            <article class="answer-option">
              <span class="answer-letter">B</span>
              <span class="answer-copy">
                <strong>Título de la canción</strong>
                <span>Nombre del artista</span>
              </span>
            </article>
            <article class="answer-option">
              <span class="answer-letter">C</span>
              <span class="answer-copy">
                <strong>Título de la canción</strong>
                <span>Nombre del artista</span>
              </span>
            </article>
            <article class="answer-option">
              <span class="answer-letter">D</span>
              <span class="answer-copy">
                <strong>Título de la canción</strong>
                <span>Nombre del artista</span>
              </span>
            </article>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped>
.stage {
  min-height: 65vh;
  padding: clamp(2rem, 6vw, 4.5rem) 1.25rem;
  background:
    radial-gradient(ellipse at 50% 0, rgb(214 168 79 / 12%), transparent 42%),
    #f7f5fa;
}

.stage-content {
  width: min(100%, 850px);
  margin: 0 auto;
}

.round-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.round-label {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.round-number {
  display: grid;
  width: 3.5rem;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 1rem;
  background: #171329;
  color: #f0c66e;
  font-size: 1.2rem;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 0.3rem;
  color: #9a6d1b;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.round-label h1 {
  margin: 0;
  color: #171329;
  font-size: 1.5rem;
}

.score-card {
  display: grid;
  gap: 0.2rem;
  padding: 0.7rem 1rem;
  border: 1px solid #e8e4ef;
  border-radius: 0.8rem;
  background: #fff;
  text-align: right;
}

.score-label,
.score-card strong span {
  color: #777181;
  font-size: 0.8rem;
}

.score-card strong {
  color: #171329;
  font-size: 1.2rem;
}

.round-progress {
  height: 0.5rem;
  overflow: hidden;
  border-radius: 999px;
  background: #e8e4ef;
}

.round-progress-fill {
  display: block;
  width: 10%;
  height: 100%;
  border-radius: inherit;
  background: #d6a84f;
}

.round-count {
  margin: 0.55rem 0 1.5rem;
  color: #777181;
  font-size: 0.85rem;
  text-align: right;
}

.question-card {
  padding: clamp(1.5rem, 5vw, 3rem);
  border: 1px solid #e8e4ef;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 20px 50px rgb(23 19 41 / 9%);
}

.question-card > .eyebrow,
.question-card > h2,
.question-description {
  text-align: center;
}

.question-card h2 {
  margin: 0.5rem 0;
  color: #171329;
  font-size: clamp(1.6rem, 4vw, 2.25rem);
}

.question-description {
  margin: 0;
  color: #686373;
  line-height: 1.6;
}

.audio-placeholder {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  min-height: 130px;
  margin: 2rem 0;
  padding: 1.25rem;
  border: 1px solid #39324f;
  border-radius: 1rem;
  background:
    radial-gradient(ellipse at 20% 50%, rgb(214 168 79 / 16%), transparent 45%),
    #201b34;
  color: #fff;
}

.record-art {
  display: grid;
  width: 4.5rem;
  flex: 0 0 4.5rem;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgb(240 198 110 / 45%);
  border-radius: 50%;
  background: repeating-radial-gradient(circle, #30294a 0 4px, #403957 5px 6px);
}

.record-center {
  width: 0.8rem;
  aspect-ratio: 1;
  border: 4px solid #f0c66e;
  border-radius: 50%;
  background: #201b34;
}

.audio-placeholder-content {
  display: grid;
  gap: 0.35rem;
  min-width: 0;
}

.audio-kicker {
  color: #c6bfd3;
  font-size: 0.8rem;
}

.audio-placeholder-title {
  font-weight: 700;
}

.sound-bars {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 2rem;
  margin-left: auto;
}

.sound-bars span {
  width: 4px;
  height: 40%;
  border-radius: 4px;
  background: #d6a84f;
}

.sound-bars span:nth-child(2),
.sound-bars span:nth-child(6) {
  height: 75%;
}

.sound-bars span:nth-child(3),
.sound-bars span:nth-child(5) {
  height: 100%;
}

.sound-bars span:nth-child(4) {
  height: 55%;
}

.answers h3 {
  margin: 0 0 1rem;
  color: #171329;
  font-size: 1rem;
}

.answer-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}

.answer-option {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-height: 76px;
  padding: 0.9rem 1rem;
  border: 1px solid #e8e4ef;
  border-radius: 0.8rem;
  background: #fff;
}

.answer-letter {
  display: grid;
  width: 2.25rem;
  flex: 0 0 2.25rem;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 0.65rem;
  background: #f1eef6;
  color: #30294a;
  font-weight: 800;
}

.answer-copy {
  display: grid;
  gap: 0.25rem;
  min-width: 0;
}

.answer-copy strong {
  overflow: hidden;
  color: #171329;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.answer-copy span {
  color: #777181;
  font-size: 0.85rem;
}

@media (max-width: 560px) {
  .stage {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .round-number {
    width: 3rem;
  }

  .round-label h1 {
    font-size: 1.25rem;
  }

  .score-card {
    padding: 0.6rem 0.75rem;
  }

  .audio-placeholder {
    gap: 0.85rem;
    min-height: 110px;
    padding: 1rem;
  }

  .record-art {
    width: 3.5rem;
    flex-basis: 3.5rem;
  }

  .sound-bars {
    gap: 3px;
  }

  .answer-list {
    grid-template-columns: 1fr;
  }
}
</style>
