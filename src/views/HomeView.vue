<template>
  <main class="home">
    <section class="hero">
      <p class="hero-eyebrow">La música se convierte en competición</p>
      <h1>Bienvenido a Musical Ranking</h1>
      <p class="hero-description">
        Descubre las canciones, sigue el concurso y averigua quién llega a lo más alto.
      </p>
      <a class="hero-button" href="#como-funciona">Descubre cómo funciona</a>
    </section>

    <section id="como-funciona" class="info-section how-it-works">
      <div class="info-copy">
        <p class="section-eyebrow">Así empieza todo</p>
        <h2>¿Cómo funciona?</h2>
        <p>
          Cada temporada reúne canciones dispuestas a conquistar el primer
          puesto. Escucha las propuestas, descubre nuevos artistas y sigue cómo
          cambia la competición en cada ronda.
        </p>
        <p>
          Explora los resultados y vuelve para comprobar qué canciones suben
          posiciones. ¡La clasificación puede cambiar en cualquier momento!
        </p>
      </div>
      <img
        class="info-image"
        src="./images/cantantes.png"
      />
    </section>

    <section id="que-encontraras" class="info-section what-you-find">
      <p class="section-eyebrow">Todo sobre la competición</p>
      <h2>¿Qué encontrarás?</h2>
      <p class="section-intro">
        Un punto de encuentro para escuchar, descubrir y seguir de cerca cada
        paso del concurso.
      </p>
      <div class="feature-list">
        <article class="feature-card">
          <span class="feature-number">01</span>
          <h3>Canciones para descubrir</h3>
          <p>
            Conoce las propuestas de la temporada y encuentra nuevos temas para
            añadir a tu lista de favoritos.
          </p>
        </article>
        <article class="feature-card">
          <span class="feature-number">02</span>
          <h3>Un ranking que evoluciona</h3>
          <p>
            Consulta las posiciones y descubre qué canciones se acercan a lo
            más alto de la clasificación.
          </p>
        </article>
        <article class="feature-card">
          <span class="feature-number">03</span>
          <h3>La emoción de cada ronda</h3>
          <p>
            Sigue el concurso y vuelve para no perderte las novedades de tus
            participantes favoritos.
          </p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  width: 100%;
}

.hero {
  min-height: min(740px, calc(100vh - 72px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  color: white;
  background:
    linear-gradient(rgba(23, 19, 41, 0.55), rgba(23, 19, 41, 0.55)),
    url('images/fondoHero.png') center / cover no-repeat;
}

.hero-eyebrow,
.section-eyebrow {
  color: #d6a84f;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 1rem 0;
  color: white;
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1.1;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: white;
  font-size: 1.15rem;
}

.hero-button {
  display: inline-block;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  background: #171329;
  color: white;
  font-weight: 700;
  text-decoration: none;
}

.hero-button:hover,
.hero-button:focus-visible {
  background: #30294a;
}

.info-section {
  width: min(100% - 3rem, 1120px);
  margin: 0 auto;
  padding: clamp(4rem, 9vw, 7rem) 0;
}

.how-it-works {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
}

.info-copy h2,
.what-you-find h2 {
  margin: 0.75rem 0 1rem;
  color: #171329;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.info-copy > p:not(.section-eyebrow),
.section-intro {
  max-width: 620px;
  color: #5c5868;
  font-size: 1.05rem;
  line-height: 1.8;
}

.info-copy > p + p {
  margin-top: 1rem;
}

.info-image {
  display: block;
  width: 100%;
  min-height: 300px;
  max-height: 430px;
  border-radius: 1.25rem;
  object-fit: cover;
  box-shadow: 0 20px 50px rgb(23 19 41 / 16%);
}

.what-you-find {
  box-sizing: border-box;
  width: 100%;
  padding-right: max(1.5rem, calc((100% - 1120px) / 2));
  padding-left: max(1.5rem, calc((100% - 1120px) / 2));
  background: #f7f5fa;
}

.section-intro {
  margin-bottom: 2rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid #e8e4ef;
  border-radius: 1rem;
  background: #fff;
}

.feature-number {
  color: #b17e20;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.feature-card h3 {
  margin: 0.8rem 0 0.5rem;
  color: #171329;
  font-size: 1.15rem;
  font-weight: 700;
}

.feature-card p {
  color: #5c5868;
  line-height: 1.7;
}

@media (max-width: 700px) {
  .how-it-works {
    grid-template-columns: 1fr;
  }

  .info-image {
    min-height: 240px;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>