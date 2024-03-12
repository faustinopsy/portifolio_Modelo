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
    loadStyles() {
      const styles = [
        { id: 'portfolio-styles', href: './assets/css/portfolio.css' },
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
        const resultado = await this.sectionProjects.renderAsync();
        return `
          ${this.header.render()}
          ${resultado}
        `;
      }
}