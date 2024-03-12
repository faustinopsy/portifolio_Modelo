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
    loadStyles() {
      const styles = [
        { id: 'contact-styles', href: './assets/css/contact.css' },
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
    render(){
      this.loadStyles();
        return `
        ${this.header.render()}
        ${this.sectionMapbox.render()}
        ${this.sectionContactForm.render()}
        `;
    }
}