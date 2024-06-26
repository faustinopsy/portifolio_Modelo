import FetchData from '../lib/FetchData.js';
import ContactList from '../lists/ContactList.js';
export default class SectionSidebarContact {
  constructor() {
    this.Contact = [];
    this.url = './assets/js/json/ContactsList.json';
  }

  async loadContact() {
    if (urlsJson.urls && urlsJson.urls[2]) {
      this.Contact = urlsJson.urls[2];
    } else {
      this.Contact = await FetchData.getJSON(this.url);
      if (!urlsJson.urls) {
          urlsJson.urls = [];
      }
      urlsJson.urls[2] = this.Contact;
    }
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
