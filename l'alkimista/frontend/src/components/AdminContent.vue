<template>
  <section class="dishes">
    <h3>{{ category }}</h3>
    <select name="action" v-model="action" class="selection">
      <option selected disabled>Action</option>
      <option>Create</option>
      <option>Update</option>
      <option>Delete</option>
    </select>
    <admin-form :category="category" :action="action"></admin-form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import AdminForm from "./AdminForm.vue";

export default {
  components: { AdminForm },
  data() {
    return { action: "Action" };
  },
  methods: {
    ...mapActions(["stageCurrentElement"]),
  },
  component: {
    AdminForm,
  },
  props: {
    category: String,
  },
};
</script>
<style scoped>
.dishes__create-form {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
h4 {
  color: #bf0101;
  margin: 0.5rem auto;
}

.form-submit {
  margin: 0 auto;
  width: fit-content;
  padding: 0.1rem 0.4rem;
  background-color: #bf0101;
  border: 2px solid #d32a2a;
  color: #fff;
}
.selection {
  color: #fff;
  background-color: #bf0101;
  border: none;
  border-radius: 0.3rem;
  margin-bottom: 2rem;
}
</style>
