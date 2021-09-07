<template>
  <section class="wines">
    <form v-if="action === 'Create'" @submit.prevent class="wines__create-form">
      <h4>Create:</h4>
      <div>
        <label for="name">Wine:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="category">Category:</label>
        <input type="text" name="category" />
      </div>
      <button type="submit" class="form-submit">Send</button>
    </form>
    <form v-if="action === 'Update'">
      <h4>Update:</h4>
    </form>
    <form v-if="action === 'Delete'">
      <h4>Delete:</h4>
    </form>
  </section>
</template>

<script>
export default {
  methods: {
    print() {
      console.log(this.action);
    },
  },
  props: {
    action: String,
    category: String,
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

.form-submit {
  margin: 0 auto;
  width: fit-content;
  padding: 0.1rem 0.4rem;
  background-color: #bf0101;
  border: 2px solid #d32a2a;
  color: #fff;
}
</style>
