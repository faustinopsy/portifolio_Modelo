export default class SkillList {
  constructor(skillsData) {
    this.skillsData = skillsData;
  }

  render() {
    return `
      <li class="skills-item">
        <div class="title-wrapper">
          <h4 class="h4">${this.skillsData.name}</h4>
        </div>
        <div class="timeline-list">
         <span>${this.skillsData.text}</span>
        </div>
    </li>
    `;

  }
}
