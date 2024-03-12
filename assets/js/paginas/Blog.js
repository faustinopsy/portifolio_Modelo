import Header from '../components/Header.js';
import SectionBlog from '../components/section/SectionBlog.js';

export default class Blog {
  constructor() {
    this.header = new Header('Blog');
    this.sectionBlog = new SectionBlog();
  }
  afterRender(){
  }
  loadStyles() {
    const styles = [
      { id: 'blog-styles', href: './assets/css/blog.css' },
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
    const resultado = await this.sectionBlog.renderAsync();
    return `
      ${this.header.render()}
      ${resultado}
    `;
  }
}
