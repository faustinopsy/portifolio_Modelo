import Header from '../components/Header.js';
import SectionTimeline from '../components/section/SectionTimeline.js';
import SectionSkill from '../components/section/SectionSkill.js';
export default class Resume {
  constructor() {
    this.header = new Header('Resume');
    this.sectionTimeline = new SectionTimeline();
    this.sectionSkill = new SectionSkill();
  }
  afterRender(){
  }
  loadStyles() {
    const styles = [
      { id: 'resume-styles', href: './assets/css/resume.css' },
      { id: 'responsive-styles', href: './assets/css/responsive.css' }
    ];
    styles.forEach(style => {
      if (!document.getElementById(style.id)) {
        const link = document.createElement('link');
        link.id = style.id;
        link.href = style.href;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    });
  }
  async render(){
    this.loadStyles();
    const sectionService = await this.sectionSkill.renderAsync();
    const sectionTimeline= await this.sectionTimeline.renderAsync();
      return `
      ${this.header.render()}
      ${sectionTimeline}
      ${sectionService}
      `;
  }
}