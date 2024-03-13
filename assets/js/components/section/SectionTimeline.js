import FetchData from '../lib/FetchData.js';
import ExperienceList from '../lists/ExperienceList.js';
import EducationList from '../lists/EducationList.js';
import Configuracoes from '../../Configuracoes.js';
export default class SectionTimeline {
  constructor() {
    this.experience = [];
    this.education = [];
    this.urlEdu = './assets/js/json/education.json';
    this.urlXp = './assets/js/json/experience.json';
    this.configuracoes = Configuracoes.getInstance();
  }

  async loadXP() {
    this.experience = await FetchData.getJSON(this.urlXp);
  }

  async loadEdu() {
    this.education = await FetchData.getJSON(this.urlEdu);
  }

  async renderLists(list, ListClass) {
    const promises = list.map(item => new ListClass(item).render());
    const elements = await Promise.all(promises);
    return elements.join('');
  }

  async render() {
    await this.loadXP();
    await this.loadEdu();
    const i18n = this.configuracoes.i18n;
    const xpList = await this.renderLists(this.experience, ExperienceList);
    const eduList = await this.renderLists(this.education, EducationList);

    return `
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 class="h3">${i18n.education}</h3>
        </div>
        <ol class="timeline-list">${eduList}</ol>
      </section>
      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 class="h3">${i18n.experience}</h3>
        </div>
        <ol class="timeline-list">${xpList}</ol>
      </section>
    `;
  }

  async renderAsync() {
    await this.loadXP();
    return this.render();
  }
   
}
