import CustomSelect from '../components/CustomSelect.js';
import Header from '../components/Header.js';
import SectionProjects from '../components/section/SectionProjects.js';
export default class Portifolio {
    constructor() {
        this.customSelect= null;
        this.header = new Header('Portifolio');
        this.sectionProjects = new SectionProjects();
    }
    afterRender(){
      this.customSelect = new CustomSelect();
    }
    render(){
        return `
        ${this.header.render()}
        ${this.sectionProjects.render()}
        `;
    }
}