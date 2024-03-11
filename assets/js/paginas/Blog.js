import Header from '../components/Header.js';
import SectionBlog from '../components/section/SectionBlog.js';

export default class Blog {
  constructor() {
    this.header = new Header('Blog');
    this.sectionBlog = new SectionBlog();
  }
  afterRender(){
  }
  async render() {
    const resultado = await this.sectionBlog.renderAsync();
    return `
      ${this.header.render()}
      ${resultado}
    `;
  }
}
