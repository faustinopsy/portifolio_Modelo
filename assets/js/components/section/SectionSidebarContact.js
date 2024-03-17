import FetchData from '../lib/FetchData.js';
import ContactList from '../lists/ContactList.js';
export default class SectionSidebarContact {
  constructor() {
    this.Contact = [];
    this.url = './assets/js/json/ContactsList.json';
  }

  async loadContact() {
    this.Contact = await FetchData.getJSON(this.url);
  }

  async render() {
    const ContactPromises = this.Contact.map(sci => {
        const lista = new ContactList(sci);
        return lista.render(); 
    });

    return Promise.all(ContactPromises).then(ContactElements => {
        const ContactList = ContactElements.join('');

      return `
      <ul class="contacts-list">
        ${ContactList}
      </ul>
      `;
    });
  }
  async renderAsync() {
    await this.loadContact();
    return this.render();
  }
}
