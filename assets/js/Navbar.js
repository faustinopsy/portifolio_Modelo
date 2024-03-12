import Sidebar from './paginas/Sidebar.js';
import FetchData from './components/lib/FetchData.js';
export default class Navbar {
    constructor() {
      this.sidebar = null;
      this.menu = [];
      this.url = './assets/js/json/menu.json';
      window.addEventListener("hashchange", () => this.navigator(location.hash));
    }
    async loadMenu() {
        this.menu = await FetchData.getJSON(this.url);
      }
    async afterRender(){
        this.sidebar = new Sidebar();
        const sidebar = document.querySelector(".sidebar");
        const sidebarHTML = this.sidebar.render();
        sidebar.innerHTML = sidebarHTML;
        this.sidebar.afterRender();

        const navLinks = document.querySelectorAll("[data-nav-link]");
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const pageName = e.target.textContent.trim().toLowerCase();
                location.hash = pageName; 
            });
        });
    }
    
    render(){
        const navLinksHtml = this.menu.map(link => `
            <li class="navbar-item">
                <button class="navbar-link" data-nav-link data-target="${link.hash}">${link.name}</button>
            </li>
        `).join('');
        
        return `
            <ul class="navbar-list">
                ${navLinksHtml}
            </ul>
        `;
        
    }
    
    async updatePageContent(hash) {
        const menuItem = this.menu.find(item => item.hash === hash);
      
        if (menuItem && menuItem.componentPath) {
          try {
            const module = await import(menuItem.componentPath);
            const ComponentClass = module.default;
            const pageComponent = new ComponentClass();
      
            const pageContent = document.querySelector(`.${hash}`);
            if (pageContent) {
              pageContent.innerHTML = await pageComponent.render();
              if (typeof pageComponent.afterRender === "function") {
                pageComponent.afterRender();
              }
            }
            window.scrollTo(0, 0);
          } catch (error) {
            console.error("Failed to load page component:", error);
          }
        }
      }
      
    navigator(url='') {
        const hash = url.substring(1) || 'about';
        this.updatePageContent(hash);
        this.updateActiveLink(hash);
    }
    updateActiveLink(hash) {
        const navigationLinks = document.querySelectorAll("[data-nav-link]");
        const pages = document.querySelectorAll("[data-page]");
        navigationLinks.forEach(link => {
            if (link.textContent.trim().toLowerCase() == hash) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    
        const allSections = document.querySelectorAll("[data-page]");
        allSections.forEach(section => {
            if (section.classList.contains(hash)) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }
    
}
  