import Header from '../components/Header.js';
import SectionContactForm from '../components/section/SectionContactForm.js';
import SectionMapbox from '../components/section/SectionMapbox.js';
export default class Contact {
    constructor() {
      this.header = new Header('Contact');
      this.sectionContactForm = new SectionContactForm();
      this.sectionMapbox = new SectionMapbox()
    }
    afterRender(){
    }
    render(){
        return `
        ${this.header.render()}
        ${this.sectionMapbox.render()}
        ${this.sectionContactForm.render()}
        `;
    }
}