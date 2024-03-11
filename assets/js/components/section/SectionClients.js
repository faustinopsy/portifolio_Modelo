import FetchData from '../lib/FetchData.js';
import ClientsList from '../lists/ClientsList.js';

export default class SectionClients {
  constructor() {
    this.clients = [];
    this.url = './assets/js/json/Clientes.json';
  }

  async loadClients() {
    this.clients = await FetchData.getJSON(this.url);
  }

  async render() {
    const clientPromises = this.clients.map(post => {
        const lista = new ClientsList(post);
        return lista.render(); 
    });

    return Promise.all(clientPromises).then(clientElements => {
        const clientsList = clientElements.join('');

        return `
            <section class="clients">
                <h3 class="h3 clients-title">Clients</h3>
                <ul class="clients-list has-scrollbar">
                ${clientsList} 
                </ul>
            </section>
        `;
    });
}

  async renderAsync() {
    await this.loadClients();
    return this.render();
  }
}
