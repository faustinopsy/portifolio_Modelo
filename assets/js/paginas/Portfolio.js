import Header from '../components/Header.js';
import SectionProjects from '../components/section/SectionProjects.js';
export default class Portfolio {
    constructor() {
        this.customSelect= null;
        this.header = new Header('Portifolio');
        this.sectionProjects = new SectionProjects();
    }
    afterRender(){
    }
    async render() {
        const resultado = await this.sectionProjects.renderAsync();
        return `
          ${this.header.render()}
          ${resultado}
        `;
      }
}