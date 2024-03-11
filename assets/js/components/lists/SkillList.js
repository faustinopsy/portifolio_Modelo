export default class SkillList {
  constructor(skillsData) {
    this.skillsData = skillsData;
  }

  render() {
    return `
      <li class="skills-item">
        <div class="title-wrapper">
          <h5 class="h5">${this.skillsData.name}</h5>
          <data value="${this.skillsData.percentage}">${this.skillsData.percentage}</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${this.skillsData.progressBarWidth}"></div>
        </div>
    </li>
    `;

  }
}
