<template>
  <header>
    <router-link class="button-header" to="/">
      <h1>L'Alkimista</h1>
    </router-link>
    <router-link class="button-header" to="/dishes"> Plats </router-link> |
    <router-link class="button-header" to="/menus"> Menús </router-link> |
    <router-link class="button-header" to="/wines"> Vins </router-link> |
    <router-link class="button-header" to="/booking"> Reservar </router-link>
  </header>
</template>

<style lang="css" scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  color: #fff;
}
header {
  box-sizing: border-box;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
}

.button-header {
  margin: 0 1rem;
}

.title {
  align-self: center;
  color: #eceff1;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}
</style>
