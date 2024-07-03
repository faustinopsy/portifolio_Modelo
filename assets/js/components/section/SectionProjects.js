import ProjectList from '../lists/ProjectList.js';
import FetchData from '../lib/FetchData.js';
import CustomSelect from '../CustomSelect.js';
export default class SectionProjects {
    constructor() {
      this.projects = [];
      this.url = './assets/js/json/projects.json';
      this.CustomSelect = new CustomSelect();
    }

    async loadProjects() {
      if (urlsJson.urls && urlsJson.urls[4]) {
        this.projects = urlsJson.urls[4];
      } else {
        this.projects = await FetchData.getJSON(this.url);
        if (!urlsJson.urls) {
            urlsJson.urls = [];
        }
        urlsJson.urls[4] = this.projects;
      }
    }
    render() {
      let card;
      const projectsItems = this.projects.map(proj => {
        card = new ProjectList(proj);
        return card.render();
      }).join('');
      
        return `
        <section class="projects">
          ${this.CustomSelect.render()}
          ${projectsItems}
        </section>
        `
    }
   
    async renderAsync() {
      await this.loadProjects();
      return this.render();
    }
}
