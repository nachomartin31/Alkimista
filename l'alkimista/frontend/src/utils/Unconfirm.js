export default function unconfirm() {
  if (this.confirm) {
    this.confirm = !this.confirm;
    this.setDataAtStore();
  }
}
