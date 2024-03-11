import Header from '../components/Header.js';
import SectionAbout from '../components/section/SectionAbout.js';
import SectionClients from '../components/section/SectionClients.js';
import SectionService from '../components/section/SectionService.js';
import SectionTestimonials from '../components/section/SectionTestimonials.js';
import TestimonialsModal from '../components/TestimonialsModal.js';
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
    async render(){
        const clientsSection = await this.sectionClients.renderAsync();
        const sectionService = await this.sectionService.renderAsync();
        return `
            ${this.header.render()}
            ${this.sectionAbout.render()}
            ${sectionService}
            ${this.sectionTestimonials.render()}
            ${clientsSection}
    
        `;
    }
  }