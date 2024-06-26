import FetchData from '../lib/FetchData.js';
import SocialList from '../lists/SocialList.js';
export default class SectionSidebarSocial {
  constructor() {
    this.social = [];
    this.url = './assets/js/json/SocialLinks.json';
  }

  async loadSocial() {
    if (urlsJson.urls && urlsJson.urls[8]) {
      this.social = urlsJson.urls[8];
    } else {
      this.social = await FetchData.getJSON(this.url);
      if (!urlsJson.urls) {
          urlsJson.urls = [];
      }
      urlsJson.urls[8] = this.social;
    }
  }
  async render() {
    const socialPromises = this.social.map(sci => {
        const lista = new SocialList(sci);
        return lista.render(); 
    });

    return Promise.all(socialPromises).then(socialElements => {
        const socialList = socialElements.join('');

      return `
      <ul class="social-list">
        ${socialList}
      </ul>
      `;
    });
  }
  async renderAsync() {
    await this.loadSocial();
    return this.render();
  }
}
