import SectionSidebarInfo  from '../components/section/SectionSidebarInfo.js';
import  SectionSidebarContact  from '../components/section/SectionSidebarContact.js';
import  SectionSidebarSocial  from '../components/section/SectionSidebarSocial.js';

export default class Sidebar {
  constructor() {
    this.sidebarInfo = new SectionSidebarInfo();
    this.contactsList = new SectionSidebarContact();
    this.socialList = new SectionSidebarSocial();
  }
  afterRender(){
    this.sidebar = document.querySelector("[data-sidebar]");
    this.sidebarBtn = document.querySelector(".info_more-btn");
    this.sidebarBtn.addEventListener("click", () => this.toggle());
  }
  toggle() {
      this.sidebar.classList.toggle("active");
    }
    loadStyles() {
      const styles = [
        { id: 'sidebar-styles', href: './assets/css/sidebar.css' },
        { id: 'navbar-styles', href: './assets/css/navbar.css' },
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
  async render() {
    this.loadStyles();
    const socialListfim = await this.socialList.renderAsync();
    const contactsListListfim = await this.contactsList.renderAsync();
    return `
      ${this.sidebarInfo.render()}
      <div class="sidebar-info_more">
        <div class="separator"></div>
        ${contactsListListfim}
        <div class="separator"></div>
        ${socialListfim}
      </div>
    `;
  }    
    
}
