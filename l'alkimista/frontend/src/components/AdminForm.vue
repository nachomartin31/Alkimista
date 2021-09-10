<template>
  <section class="wines">
    <form
      @submit.prevent="submitData({ category, action })"
      class="wines__create-form"
    >
      <h4>{{ action }}:</h4>
      <create-form
        v-if="action === 'Create'"
        :category="category"
        :action="action"
      ></create-form>
      <div v-if="action === 'Update' || action === 'Delete'">
        <select
          v-model="currentElement"
          @change="changeCurrentElement(category, currentElement._id)"
        >
          <option
            v-for="element in currentState"
            :value="element"
            :key="element"
          >
            {{ element.name }}
          </option>
        </select>
      </div>
      <update-form
        v-if="action === 'Update'"
        :category="category"
        :action="action"
      ></update-form>
      <button type="submit" class="form-submit">Send</button>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

import CreateForm from "./CreateForm/CreateForm.vue";
import UpdateForm from "./UpdateForm/UpdateForm.vue";

export default {
  data: () => ({
    currentElement: "",
  }),
  computed: {
    ...mapState(["dishes", "menus", "wines", "currentState", "dataToSend"]),
  },
  components: {
    CreateForm,
    UpdateForm,
  },

  methods: {
    ...mapActions(["sendDataToBackend", "stageCurrentElement"]),
    submitData(strategy) {
      if (Object.entries(this.dataToSend).length > 0) {
        this.sendDataToBackend({ data: this.dataToSend, strategy });
        this.$toast("Data was sent correctly");
      } else {
        this.$toast("Please, confirm your choises");
      }
    },
    changeCurrentElement(category, value) {
      const lowerCaseCategory = category.toLowerCase();
      const url = `http://localhost:5001/api/${lowerCaseCategory}/${value}`;
      this.stageCurrentElement(url);
    },
  },
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
