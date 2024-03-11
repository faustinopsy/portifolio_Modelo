export default class ServiceList {
  constructor(servicesData) {
    this.servicesData = servicesData;
  }

  render() {
    return `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${this.servicesData.imageSrc}" alt="${this.servicesData.altText}" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${this.servicesData.title}</h4>
          <p class="service-item-text">
            ${this.servicesData.description}
          </p>
        </div>
      </li>
    `;

  }
}
