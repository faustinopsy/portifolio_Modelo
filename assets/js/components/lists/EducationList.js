export default class EducationList {
  constructor(educaData) {
    this.educaData = educaData;
  }

  render() {
    return `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${this.educaData.title}</h4>
        <span>${this.educaData.duration}</span>
        <p class="timeline-text">
        ${this.educaData.description}
        </p>
    </li>
    `;

  }
}
