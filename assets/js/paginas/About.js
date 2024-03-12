import Header from '../components/Header.js';
import SectionAbout from '../components/section/SectionAbout.js';
import SectionClients from '../components/section/SectionClients.js';
import SectionService from '../components/section/SectionService.js';
import SectionTestimonials from '../components/section/SectionTestimonials.js';
import TestimonialsModal from '../components/modal/TestimonialsModal.js';
export default class About {
    constructor() {
        this.testimonialsModal = null;
        this.header = new Header('About');
        this.sectionAbout = new SectionAbout();
        this.sectionService = new SectionService();
        this.sectionTestimonials = new SectionTestimonials();
        this.sectionClients = new SectionClients();
    }
    afterRender(){
        this.testimonialsModal = new TestimonialsModal();
    }
    loadStyles() {
        const styles = [
          { id: 'about-styles', href: './assets/css/about.css' },
          { id: 'clients-styles', href: './assets/css/clients.css' },
          { id: 'service-styles', href: './assets/css/service.css' },
          { id: 'testemonials-styles', href: './assets/css/testemonials.css' },
          { id: 'modal-styles', href: './assets/css/modal.css' },
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
        const clientsSection = await this.sectionClients.renderAsync();
        const sectionService = await this.sectionService.renderAsync();
        const sectionTestimonials = await this.sectionTestimonials.renderAsync();
        return `
            ${this.header.render()}
            ${this.sectionAbout.render()}
            ${sectionService}
            ${sectionTestimonials}
            ${clientsSection}
    
        `;
    }
  }