import FetchData from '../lib/FetchData.js';
import ServiceList from '../lists/ServiceList.js';
export default class SectionService {
    constructor() {
        this.services = [];
        this.url = './assets/js/json/Services.json';
      }
    
      async loadServices() {
        this.services = await FetchData.getJSON(this.url);
      }
      async render() {
        const servicesPromises = this.services.map(post => {
            const lista = new ServiceList(post);
            return lista.render(); 
        });
    
        return Promise.all(servicesPromises).then(serviceElements => {
            const serviceList = serviceElements.join('');
    
            return `
            <section class="service">
                <h3 class="h3 service-title">What i'm doing</h3>
                <ul class="service-list">
                ${serviceList} 
                </ul>
            </section>
            `;
        });
    }
    
      async renderAsync() {
        await this.loadServices();
        return this.render();
      }
    
}
