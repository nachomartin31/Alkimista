<template>
  <main>
    <div v-if="user">
      <div class="profile">
        <h2>{{ user.name }}</h2>
        <button type="button" class="logout-button" @click="logOut">
          Logout
        </button>
      </div>
      <select name="action" v-model="action">
        <option selected disabled>Category</option>
        <option>Dishes</option>
        <option>Menus</option>
        <option>Wines</option>
      </select>
      <section class="admin-content">
        <admin-content
          v-if="action !== 'Category'"
          :category="action"
        ></admin-content>
      </section>
    </div>

    <form v-else class="login__form" @submit.prevent="logIn">
      <h2>Login</h2>
      <div>
        <label for="user">User:</label>
        <input type="text" v-model="login" placeholder="User" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <p v-if="error" class="error">Wrong credentials</p>

      <button type="submit" class="login__submit">Send</button>
    </form>
  </main>
</template>

<script>
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import AdminContent from "../components/AdminContent.vue";

export default defineComponent({
  components: { AdminContent },
  data: () => ({
    login: "",
    password: "",
    error: false,
    noUser: "",
    action: "Category",
  }),
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["fetchUser"]),
    logIn() {
      if (!this.login || !this.password) {
        this.error = true;
      } else {
        this.error = false;
        this.fetchUser({ login: this.login, password: this.password });
      }
    },
    logOut() {
      localStorage.setItem("user", JSON.stringify(this.noUser));
      this.$router.push({ name: "Home" });
    },
  },
});
</script>

<style scoped>
label {
  color: #bf0101;
  margin-right: 0.5rem;
}

.profile {
  margin: 2rem auto 2.5rem;
  display: flex;
  width: fit-content;
  gap: 3rem;
  align-items: center;
}

.login__form {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.login__submit,
.logout-button {
  margin: 0 auto;
  width: fit-content;
  padding: 0.1rem 0.4rem;
  background-color: #bf0101;
  border: 2px solid #d32a2a;
  color: #fff;
}
.logout-button {
  height: fit-content;
}
.admin-content {
  display: flex;
  width: fit-content;
  margin: 0 auto 2rem;
  gap: 5rem;
}
</style>
