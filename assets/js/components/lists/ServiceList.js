import Configuracoes from '../../Configuracoes.js';
export default class ServiceList {
  constructor(servicesData) {
    this.servicesData = servicesData;
    this.configuracoes = Configuracoes.getInstance();
  }

  render() {
    const i18n = this.configuracoes.i18n.services;
    const serviceKey = this.servicesData.title.toLowerCase().replace(/\s+/g, '');
    const serviceTranslation = i18n[serviceKey];

    if (!serviceTranslation) {
      console.error('Translation for service not found:', serviceKey);
      return '';
    }

    return `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${this.servicesData.imageSrc}" alt="${this.servicesData.altText}" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${serviceTranslation.title}</h4>
          <p class="service-item-text">
            ${serviceTranslation.description}
          </p>
        </div>
      </li>
    `;
  }
}
