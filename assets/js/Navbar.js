import Sidebar from './paginas/Sidebar.js';
import FetchData from './components/lib/FetchData.js';
import Configuracoes from './Configuracoes.js';

export default class Navbar {
    constructor() {
        this.sidebar = null;
        this.menu = [];
        this.url = './assets/js/json/menu.json';
        window.addEventListener("hashchange", () => this.navigator(location.hash));
        this.configuracoes = Configuracoes.getInstance();
    }

    async loadMenu() {
        this.menu = await FetchData.getJSON(this.url);
    }

    async afterRender() {
        this.sidebar = new Sidebar();
        const sidebar = document.querySelector(".sidebar");
        const sidebarHTML = await this.sidebar.render();
        sidebar.innerHTML = sidebarHTML;
        this.sidebar.afterRender();

        const navLinks = document.querySelectorAll("[data-nav-link]");
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                const targetHash = e.target.getAttribute('data-target');
                location.hash = targetHash;
            });
        });
    }

    render() {
        const i18n = this.configuracoes.i18n.links;
        const navLinksHtml = this.menu.map(link => `
            <li class="navbar-item">
                <button class="navbar-link" data-nav-link data-target="${link.hash}">${i18n[link.hash]}</button>
            </li>
        `).join('');

        return `
            <ul class="navbar-list">
                ${navLinksHtml}
            </ul>
        `;

    }

    async updatePageContent(hash) {
        if (hash.startsWith('post/')) {
            const postId = hash.split('/')[1];
            await this.loadPostContent(postId);
        } else {
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
    }

    async loadPostContent(postId) {
        let post;
        if (urlsJson.urls && urlsJson.urls[0]) {
            post = urlsJson.urls[0].find(p => p.id == postId);
        } else {
            const posts = await FetchData.getJSON('./assets/js/json/blogPosts.json');
            post = posts.find(p => p.id == postId);
        }
    
        if (post) {
            const pageContent = document.querySelector('.blog'); 
            pageContent.innerHTML = `
                <div class="blog-post">
                    <figure class="blog-banner-box">
                        <img src="${post.imageSrc}" alt="${post.imageAlt}" loading="lazy">
                    </figure>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <p class="blog-category">${post.category}</p>
                            <span class="dot"></span>
                            <time datetime="${post.date}">${post.date}</time>
                        </div>
                        <h3 class="h3 blog-item-title">${post.title}</h3>
                        <p class="blog-text">
                            ${post.text}
                        </p>
                    </div>
                </div>
            `;
            window.scrollTo(0, 0);
        } else {
            console.error('Post not found');
        }
    }
    

    navigator(url = '') {
        const defaultUrl = location.hash ? location.hash : '#about';
        const hash = url.substring(1) || defaultUrl.substring(1);
    
        if (hash.startsWith('post/')) {
            const postId = hash.split('/')[1];
            this.loadPostContent(postId);
        } else {
            this.updatePageContent(hash);
            this.updateActiveLink(hash);
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
