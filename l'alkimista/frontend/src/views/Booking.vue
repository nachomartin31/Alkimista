<template>
  <main>
    <h2>Reservar</h2>
    <form action="">
      <label>Nom</label>
      <input type="text" placeholder="Nom" />
      <label>Dia</label>
      <input type="Date" placeholder="Dia" />
      <label>Servei</label>
      <select placeholder="Servei">
        <option value="Migdia">Migdia</option>
        <option value="Nit">Nit</option>
      </select>
      <label for="">Torn</label>
      <select placeholder="Torn">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </form>
  </main>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 12rem;
}
</style>
