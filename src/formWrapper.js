import { LightningElement } from 'lwc';

export default class EventsDemo extends LightningElement {

  handleFormContact(event) {
    console.log('Values are ' + JSON.stringify(event.detail));
    console.log('First Name is ' + event.detail.fname);
    console.log('Last Name is ' + event.detail.lname);
    console.log('Age is ' + event.detail.age);
  }

}