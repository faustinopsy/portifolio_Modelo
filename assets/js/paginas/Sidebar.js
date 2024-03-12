export default class Sidebar {
    constructor() {
        this.sidebar = null;
        this.sidebarBtn = null;
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
      render(){
        this.loadStyles();
        return `
        <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80">
        </figure>
        <div class="info-content">
          <h1 class="name" title="Richard hanrick">Richard hanrick</h1>
          <p class="title">Web developer</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>
      <div class="sidebar-info_more">
        <div class="separator"></div>
        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Email</p>
              <a href="mailto:richard@example.com" class="contact-link">richard@example.com</a>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Phone</p>
              <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Birthday</p>
              <time datetime="1982-06-23">June 23, 1982</time>
            </div>
          </li>
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>
        <div class="separator"></div>
        <ul class="social-list">
          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
        `;
      }
      
    
}
