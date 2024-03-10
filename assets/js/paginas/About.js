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
    render(){
        return `
            ${this.header.render()}
            ${this.sectionAbout.render()}
            ${this.sectionService.render()}
            ${this.sectionTestimonials.render()}
            ${this.sectionClients.render()}
    
        `;
    }
  }