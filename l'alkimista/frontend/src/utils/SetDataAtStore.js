export default function setDataAtStore() {
  if (this.confirm) {
    this.setDataToSend(this.createObjectToSend());
  } else {
    this.setDataToSend({});
  }
}
