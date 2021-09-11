export default function setDataAtStore() {
  if (this.confirm) {
    this.setDataToSend(this.createDishesObjectToSend());
  } else {
    this.setDataToSend({});
  }
}
