export default class ClientsList {
  constructor(clientsData) {
    this.clientsData = clientsData;
  }

  async render() {
    return  `
      <li class="clients-item">
        <a href="${this.clientsData.link}">
          <img src="${this.clientsData.imageSrc}" alt="${this.clientsData.altText}">
        </a>
      </li>
    `;

  }
}
