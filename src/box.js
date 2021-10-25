import { LightningElement } from 'lwc';

export default class Box extends LightningElement {
  bgColor = '';

  handleInputChange(event) {
    this.bgColor = event.target.value
  }

  get divStyle() {
    return `width: 100px; height: 100px; background-color: #${this.bgColor};`
  }

}