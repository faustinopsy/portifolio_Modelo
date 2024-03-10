import Header from '../components/Header.js';
import SectionBlog from '../components/section/SectionBlog.js';
export default class Blog {
    constructor(){
      this.header = new Header('Blog');
      this.sectionBlog = new SectionBlog()
    }
    render(){
        return `
        ${this.header.render()}
        ${this.sectionBlog.render()}
        `;
    }
}