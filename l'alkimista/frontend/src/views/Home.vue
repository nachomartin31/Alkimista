<template>
  <div class="home">
    <h1>L'Alkimista</h1>
    <p class="home__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
      consequat dictum. Nulla dignissim varius massa, non blandit dui fermentum
      eu. Proin sed gravida erat. Integer nec auctor purus, nec posuere libero.
      Morbi elementum nibh vitae dolor lobortis, in gravida mi pharetra. Donec
      eu feugiat lectus. In quis orci eu justo auctor ornare nec sed est. In at
      vulputate lectus, nec ultricies felis. Mauris metus risus, tempor quis
      tincidunt sit amet, maximus eu risus. Vivamus vestibulum mi ex, sed
      tristique nunc ullamcorper at.
    </p>
    <section class="home__info">
      <address></address>
      <schedule>
        <h2>Horari</h2>
        <p>Dinar: De dx a dl, 13:30h - 15:30h</p>
        <p>Sopar: De dj, dv i ds, 20h - 23h</p>
      </schedule>
      <contact class="home__contact">
        <h2>Contacte</h2>
        <email> latavernaalkimista@gmail.com</email>
        <phone>+34 977 209 766</phone>
        <phone>+34 686 320 566</phone>
      </contact>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
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
  margin: 2rem auto 0;
}
.home__contact {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}
</style>
