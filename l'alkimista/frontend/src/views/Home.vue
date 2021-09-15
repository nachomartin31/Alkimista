<template>
  <main class="home">
    <h1>L'Alkimista</h1>
    <p class="home__description">
      L'Alkimista és un restaurant situat al cor de la ciutat de Reus i també un
      punt de trobada per la gastronomia d'arreu del món. Especialment ens
      agrada treballar amb la fusió entre la cuina mediterrània i la oriental.
      L'objectiu de l'Alkimista és crear nous plats que aconsegueixin prendre
      per sorpresa els sentits dels nostres clients i encisar-los. És per aquest
      motiu que la nostra carta es renova constantment i les nostres creacions
      no es poden trobar enlloc més.
    </p>
    <section class="home__info">
      <iframe
        title="location map"
        class="home__maps"
        width="300"
        height="240"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.050535096877!2d1.1073408156653217!3d41.155248618316165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a151f2f70a3b7d%3A0x1f4c86cd4813217f!2zTOKAmUFsa2ltaXN0YQ!5e0!3m2!1sca!2ses!4v1630767548317!5m2!1sca!2ses"
        style="border: 0"
        allowfullscreen=""
      ></iframe>
      <article>
        <h2>Horari</h2>
        <p>Dinar: De dx a dl, 13:30h - 15:30h</p>
        <p>Sopar: De dj, dv i ds, 20h - 23h</p>
      </article>
      <article class="home__contact">
        <h2>Contacte</h2>
        <p>latavernaalkimista@gmail.com</p>
        <p>+34 977 209 766</p>
        <p>+34 686 320 566</p>
      </article>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
h1 {
  margin: 3rem auto;
  color: #bf0101;
}
.home__description {
  width: 60%;
  margin: 2rem auto 0;
}
.home__info {
  display: flex;
  width: fit-content;
  margin: 10rem auto 0;
  gap: 10vw;
  align-items: center;
  padding-bottom: 3rem;
}
.home__contact {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}
@media screen and (max-width: 720px) {
  .home__info {
    flex-direction: column;
    padding-bottom: 5rem;
  }
}
</style>
