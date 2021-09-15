<template>
  <header>
    <router-link class="button-home" to="/">
      <img
        class="logo"
        color="white"
        alt="logo"
        src="..\assets\LAlkimistaWhite.svg"
      />
    </router-link>
    <nav>
      <router-link class="button-header" to="/dishes"> Plats </router-link>
      <router-link class="button-header" to="/menus"> Menús </router-link>
      <router-link class="button-header" to="/wines"> Vins </router-link>
      <router-link class="button-header booking" to="/booking">
        Reservar
      </router-link>
    </nav>

    <div class="mobile-menu">
      <em class="fas fa-bars mobile-menu__burger"></em>
      <div class="mobile-menu__links">
        <router-link to="/dishes"> Plats </router-link>
        <router-link to="/menus"> Menús </router-link>
        <router-link to="/wines"> Vins </router-link>
        <router-link to="/booking"> Reservar </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

header {
  box-sizing: border-box;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 0.2rem;
}

nav {
  position: absolute;
  right: 5rem;
  padding: 0.8rem;
}

a {
  text-decoration: none;
  color: #fff;
}

.logo {
  color: #fff;
  height: 2.5rem;
  margin: auto 1.5rem;
  padding: 0;
}
.button-header {
  margin: 0 1rem;
}
.booking {
  display: none;
}

.title {
  align-self: center;
  color: #eceff1;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.mobile-menu {
  display: none;
  cursor: pointer;
  color: #fff;
}

.mobile-menu__links {
  display: none;
}
.mobile-menu:hover .mobile-menu__burger {
  color: #bf0101;
}

.mobile-menu:hover .mobile-menu__links {
  display: flex;
  flex-direction: column;
  background-color: #212121;
  padding: 1rem;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 720px) {
  .button-header {
    display: none;
  }
  .mobile-menu {
    display: block;
    padding: 0 2rem;
    position: absolute;
    right: 2rem;
    top: 1.5rem;
  }
}
</style>
