import About from './paginas/About.js';
import Blog from './paginas/Blog.js';
import Contact from './paginas/Contact.js';
import Portifolio from './paginas/Portifolio.js';
import Resume from './paginas/Resume.js';
import Sidebar from './paginas/Sidebar.js';

export default class Navbar {
    constructor() {
      
      this.contact = null;
      this.resume = null;
      this.blog = null;
      this.about = null;
      this.portifolio = null;
      this.sidebar = null;
      window.addEventListener("hashchange", () => this.navigator(location.hash));
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
        
        return `
            <ul class="navbar-list">
                <li class="navbar-item">
                    <button class="navbar-link  active" data-nav-link>About</button>
                </li>
                <li class="navbar-item">
                    <button class="navbar-link" data-nav-link>Resume</button>
                </li>
                <li class="navbar-item">
                    <button class="navbar-link" data-nav-link>Portfolio</button>
                </li>
                <li class="navbar-item">
                    <button class="navbar-link" data-nav-link>Blog</button>
                </li>
                <li class="navbar-item">
                    <button class="navbar-link" data-nav-link>Contact</button>
                </li>
            </ul>`
    }
    
    navigator(url='') {
        const hash = url.substring(1) || 'about';
        this.updatePageContent(hash);
        this.updateActiveLink(hash);
    }
    
    updatePageContent(hash) {
        let pageComponent;
        switch(hash) {
            case 'contact': 
                pageComponent = new Contact();
                break;
            case 'portfolio': 
                pageComponent = new Portifolio();
                break;
            case 'resume': 
                pageComponent = new Resume();
                break;
            case 'blog': 
                pageComponent = new Blog();
                break;
            case 'about': 
            default: 
                pageComponent = new About();
                break;
        }
        
        const pageContent = document.querySelector(`.${hash}`);
        if(pageContent) {
            pageContent.innerHTML = pageComponent.render();
            if (typeof pageComponent.afterRender === "function") {
                pageComponent.afterRender();
            }
        }
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
  