<template>
  <section class="form">
    <form
      @submit.prevent="
        submitData({ category, action, currentElementId, dataToSend })
      "
      class="form__create-form"
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
          @change="changeCurrentElement(currentElement._id)"
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
        v-if="action === 'Update' && thereIsAnObject"
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
    thereIsAnObject: false,
  }),
  computed: {
    ...mapState([
      "dishes",
      "menus",
      "wines",
      "currentState",
      "dataToSend",
      "currentElementId",
    ]),
  },
  components: {
    CreateForm,
    UpdateForm,
  },

  methods: {
    ...mapActions(["sendDataToBackend", "stageCurrentElement"]),
    submitData(strategy) {
      if (Object.entries(this.dataToSend).length > 0) {
        this.sendDataToBackend(strategy);
        this.$toast("Data was sent correctly");
      } else {
        this.$toast("Please, confirm your choises");
      }
    },
    changeCurrentElement(value) {
      this.thereIsAnObject = true;
      this.stageCurrentElement(value);
    },
  },
  props: {
    action: String,
    category: String,
  },
};
</script>
<style >
.form {
  gap: 0.7rem;
  padding: 1rem;
  border: 5px double #bf0101;
  border-radius: 1rem;
}
.form__create-form {
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
