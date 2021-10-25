import { LightningElement, track } from 'lwc';

export default class TrackDate extends LightningElement {
  @track x = new Date();

  initDate() {
    this.x = new Date();
  }

  // updateDate() {
  //   this.x.setHours(7); // No mutation detected
  // }

  updateDate() {
    const cloned = new Date(this.x.getTime());
    cloned.setHours(7);

    // Assign the new date instance to rerender the component.
    this.x = cloned;
  }
}