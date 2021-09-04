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
</style>
