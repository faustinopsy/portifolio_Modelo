export default class ContactList {
  constructor(ContactListData) {
    this.ContactListData = ContactListData;
  }

  async render() {
    return  `
    <li class="contact-item">
    <div class="icon-box">
    <i class="${this.ContactListData.icon}"></i>
    </div>
    <div class="contact-info">
      <p class="contact-title">${this.ContactListData.type}</p>
      <a href="${this.ContactListData.link}" class="contact-link">${this.ContactListData.value}</a>
    </div>
  </li>
    `;

  }
}
