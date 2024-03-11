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
    async render(){
      const sectionService = await this.sectionSkill.renderAsync();
      const sectionTimeline= await this.sectionTimeline.renderAsync();
        return `
        ${this.header.render()}
        ${sectionTimeline}
        ${sectionService}
        `;
    }
}