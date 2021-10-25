import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class Mutation extends LightningElement {
  contact;

  @wire(getRecord, { recordId: '123456', fields: ['Contact.Name', 'Contact.Title'] })
  handleRecord({ err, data }) {
    if (data) {
      // Error: Invalid mutation! THIS OBJECT IS READ-ONLY
      data.fields.Summary = {
        value: `${data.fields.Name.value} (${data.fields.Title.value})`
      };

      // This might be REALLY SLOW!
      const copiedData = JSON.parse(JSON.stringify(data));

      copiedData.fields.Summary = {
        value: `${data.fields.Name.value} (${data.fields.Title.value})`
      };

      this.contact = data;

      this.contact = copiedData;
    }

    // The correct way via OBJECT DESTRUCTURING/ object.assign();
    if (data) {
      const { fields } = data;

      // Only copy what is needed.
      this.contact = {
        fields: {
          ...fields,
          Summary: {
            value: `${fields.Name.value} (${fields.Title.value})`
          }
        }
      }
    }
  }
}