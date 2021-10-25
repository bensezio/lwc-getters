import { LightningElement, track } from 'lwc';

export default class ContactForm extends LightningElement {

  @track
  firstName;
  @track
  lastName;
  @track
  age;

  handleFormInputChange() {
    switch(event.target.name) {
      case 'fname':
      this.firstName = event.detail.value;
      break;
      case 'lname':
      this.lastName = event.detail.value;
      break;
      case 'age':
      this.age = event.detail.value
      break;
      default:
    }
  }

  updateParent() {
    const selectedEvent = new CustomEvent('entered', {
      detail: {
        fname: this.firstName,
        lname: this.lastName,
        age: this.age
      }
    });
    this.dispatchEvent(selectedEvent);
  }

}