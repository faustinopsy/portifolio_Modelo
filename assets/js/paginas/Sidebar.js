import SidebarInfo  from '../components/Sidebar/SidebarInfo.js';
import  ContactsList  from '../components/Sidebar/ContactsList.js';
import  SocialList  from '../components/Sidebar/SocialList.js';

export default class Sidebar {
  constructor() {
    this.sidebarInfo = new SidebarInfo();
    this.contactsList = new ContactsList();
    this.socialList = new SocialList();
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
  render() {
    this.loadStyles();
    return `
      ${this.sidebarInfo.render()}
      <div class="sidebar-info_more">
        <div class="separator"></div>
        ${this.contactsList.render()}
        <div class="separator"></div>
        ${this.socialList.render()}
      </div>
    `;
  }    
    
}
