<template>
  <main class="contact-page">
    <section class="contact-intro">
      <p class="eyebrow">Estamos al otro lado</p>
      <h1>¿Hablamos de música?</h1>
      <p>
        ¿Tienes alguna duda, sugerencia o simplemente quieres compartir tu
        opinión sobre el concurso? Escríbenos y cuéntanos.
      </p>
    </section>

    <section class="contact-card" aria-labelledby="contact-form-title">
      <div class="contact-details">
        <h2>Nos encantará leerte</h2>
        <p>
          Este concurso crece gracias a las personas que lo siguen y comparten su pasión por la música.
           Si tienes una sugerencia para mejorar la página, has encontrado algún problema o quieres 
           contarnos qué canciones te gustaría descubrir, estaremos encantados de escucharte. También 
           puedes escribirnos si tienes alguna duda sobre el concurso o el ranking. Cada mensaje nos 
           ayuda a crear una experiencia más completa y divertida para toda la comunidad. ¡Cuéntanos lo
           que piensas!
        </p>
      </div>

      <form class="contact-form">
        <h2 id="contact-form-title">Envíanos un mensaje</h2>

        <label for="name">Nombre</label>
        <input id="name" name="name" type="text" autocomplete="name" required />

        <label for="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          required
        />

        <label for="message">Mensaje</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="button">Enviar mensaje</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 65vh;
  padding: clamp(3rem, 7vw, 6rem) 1.5rem;
  background: #f7f5fa;
}

.contact-intro {
  width: min(100%, 760px);
  margin: 0 auto 2.5rem;
  text-align: center;
}

.eyebrow {
  color: #b17e20;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-intro h1 {
  margin: 0.75rem 0 1rem;
  color: #171329;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.1;
}

.contact-intro > p:last-child,
.contact-details p {
  color: #5c5868;
  font-size: 1.05rem;
  line-height: 1.75;
}

.contact-card {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 6vw, 5rem);
  width: min(100%, 1000px);
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 3.5rem);
  border: 1px solid #e8e4ef;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 20px 50px rgb(23 19 41 / 10%);
}

.contact-details h2,
.contact-form h2 {
  margin-bottom: 1rem;
  color: #171329;
  font-size: 1.5rem;
}

.contact-note {
  margin-top: 1rem;
}

.contact-form {
  display: grid;
  gap: 0.65rem;
}

.contact-form label {
  margin-top: 0.5rem;
  color: #30294a;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1px solid #d8d3e1;
  border-radius: 0.5rem;
  background: #fff;
  color: #171329;
  font: inherit;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #b17e20;
  outline: 3px solid rgb(214 168 79 / 25%);
}

.contact-form button {
  justify-self: start;
  margin-top: 0.75rem;
  padding: 0.9rem 1.4rem;
  border: 0;
  border-radius: 0.6rem;
  background: #171329;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
}

.contact-form button:hover,
.contact-form button:focus-visible {
  background: #30294a;
}

.contact-form button:focus-visible {
  outline: 3px solid #d6a84f;
  outline-offset: 3px;
}

@media (max-width: 700px) {
  .contact-card {
    grid-template-columns: 1fr;
  }
}
</style>