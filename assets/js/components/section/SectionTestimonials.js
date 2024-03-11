import FetchData from '../lib/FetchData.js';
import TestimonialsList from '../lists/TestimonialsList.js';
export default class SectionTestimonials {
    constructor() {
        this.testimonials = [];
        this.url = './assets/js/json/testimonials.json';
      }
    
      async loadTestimon() {
        this.testimonials = await FetchData.getJSON(this.url);
      }

      async render() {
        const testPromises = this.testimonials.map(test => {
            const lista = new TestimonialsList(test);
            return lista.render(); 
        });
    
        return Promise.all(testPromises).then(testElements => {
            const testList = testElements.join('');
        return `
        <section class="testimonials">
            <h3 class="h3 testimonials-title">Testimonials</h3>
            <ul class="testimonials-list has-scrollbar">
                ${testList}
            </ul>
        </section>

        `
    });

    }
    async renderAsync() {
        await this.loadTestimon();
        return this.render();
      }

      
}
