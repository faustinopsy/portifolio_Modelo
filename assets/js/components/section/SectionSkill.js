import FetchData from '../lib/FetchData.js';
import SkillList from '../lists/SkillList.js';
export default class SectionSkill {
  constructor() {
    this.skill = [];
    this.url = './assets/js/json/skills.json';
  }

  async loadSkill() {
    if (urlsJson.urls[7]) {
      this.skill = urlsJson.urls[7];
    } else {
      this.skill = await FetchData.getJSON(this.url);
      if (!urlsJson.urls) {
          urlsJson.urls = [];
      }
      urlsJson.urls[7] = this.skill;
    }
  }

  async render() {
    const skillsPromises = this.skill.map(skls => {
        const lista = new SkillList(skls);
        return lista.render(); 
    });

    return Promise.all(skillsPromises).then(skillElements => {
        const skillList = skillElements.join('');

        return `
        <section class="skill">
          <h3 class="h3 skills-title">My skills</h3>
          <ul class="skills-list content-card">
          ${skillList} 
          </ul>
       
        `;
    });
}

  async renderAsync() {
    await this.loadSkill();
    return this.render();
  }

}
