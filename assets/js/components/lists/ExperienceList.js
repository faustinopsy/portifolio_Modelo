export default class ExperienceList {
  constructor(expeData) {
    this.expeData = expeData;
  }

  render() {
    return `
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">${this.expeData.title}</h4>
        <span>${this.expeData.duration}</span>
        <p class="timeline-text">
        ${this.expeData.description}
        </p>
    </li>
    `;

  }
}
