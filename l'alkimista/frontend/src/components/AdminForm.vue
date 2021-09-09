<template>
  <section class="wines">
    <form @submit.prevent class="wines__create-form">
      <h4>{{ action }}:</h4>
      <create-form
        v-if="action === 'Create'"
        :category="category"
        :action="action"
      ></create-form>
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
import CreateForm from "./CreateForm/CreateForm.vue";

export default {
  data: () => {},
  computed: {
    ...mapState(["dishes", "menus", "wines", "currentState"]),
  },
  components: {
    CreateForm,
  },

  methods: {},
  props: {
    action: String,
    category: String,
  },
};
</script>
<style >
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
