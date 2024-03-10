import Header from '../components/Header.js';
import SectionTimeline from '../components/section/SectionTimeline.js';
import SectionSkill from '../components/section/SectionSkill.js';
export default class Resume {
  constructor() {
    this.header = new Header('Resume');
    this.sectionTimeline = new SectionTimeline();
    this.sectionSkill = new SectionSkill();
  }

    render(){
        return `
        ${this.header.render()}
        ${this.sectionTimeline.render()}
        ${this.sectionSkill.render()}
        `;
    }
}