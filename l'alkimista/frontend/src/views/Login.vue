<template>
  <main>
    <div v-if="user">
      <div class="profile">
        <h2>{{ user }}</h2>
        <button type="button" class="logout-button" @click="logOut">
          Logout
        </button>
      </div>
      <select
        name="action"
        v-model="action"
        @change="changeCategory"
        class="selection"
      >
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

    <form id="form" v-else class="login__form" @submit.prevent="logIn">
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
import { mapState, mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["setCurrentCategory"]),
    ...mapActions([
      "fetchDishesFromApi",
      "fetchMenusFromApi",
      "fetchWinesFromApi",
      "fetchUser",
      "setCategory",
    ]),
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
    changeCategory() {
      this.setCategory(this.action);
      this.setCurrentCategory();
    },
  },
  mounted() {
    this.fetchDishesFromApi();
    this.fetchMenusFromApi();
    this.fetchWinesFromApi();
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
  margin: 0 auto;
  padding-bottom: 5rem;
  gap: 5rem;
}
.selection {
  color: #fff;
  background-color: #bf0101;
  border: none;
  border-radius: 0.3rem;
}
</style>
