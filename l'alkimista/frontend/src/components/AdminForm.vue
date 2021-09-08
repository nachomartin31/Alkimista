<template>
  <section class="wines">
    <form @submit.prevent class="wines__create-form">
      <h4>{{ action }}:</h4>

      <div v-if="action === 'Create'" class="form__create">
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div v-if="category === 'Dishes'">
          <label for="category">Category:</label>
          <input type="text" name="category" />
        </div>
      </div>
      <div v-if="action === 'Update' || action === 'Delete'">
        <select name="" id="">
          <option v-for="element in currentState" :key="element">
            {{ element.name }}
          </option>
        </select>
      </div>

      <button type="submit" class="form-submit">Send</button>
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => {},
  computed: {
    ...mapState(["dishes", "menus", "wines", "currentState"]),
  },
  methods: {},
  props: {
    action: String,
    category: String,
  },
  mounted() {
    console.log(this.currentState);
  },
};
</script>
<style scoped>
.wines__create-form {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
h4 {
  color: #bf0101;
  margin: 0.5rem auto;
}
label {
  color: #bf0101;
}
.form-submit {
  margin: 0 auto;
  width: fit-content;
  padding: 0.1rem 0.4rem;
  background-color: #bf0101;
  border: 2px solid #d32a2a;
  color: #fff;
}
.form__create {
  display: flex;
  flex-direction: column;
}
</style>
