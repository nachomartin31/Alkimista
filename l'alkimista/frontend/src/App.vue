<template>
  <div id="nav">
    <app-header></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data: () => ({
    noUser: "",
  }),
  sname: "app",
  components: { AppHeader, AppFooter },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
h2 {
  color: #bf0101;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
h3 {
  color: #bf0101;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
body {
  /* background-image: url("./assets/LAlkimista.svg"); */
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
}
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #bf0101;
}
app-footer {
  position: absolute;
  bottom: 0;
}
</style>
