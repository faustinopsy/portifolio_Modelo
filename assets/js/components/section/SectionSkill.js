import FetchData from '../lib/FetchData.js';
import SkillList from '../lists/SkillList.js';
export default class SectionSkill {
  constructor() {
    this.skill = [];
    this.url = './assets/js/json/skills.json';
  }

  async loadSkill() {
    this.skill = await FetchData.getJSON(this.url);
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
