export default class ContactsList {
    render() {
      return `
      <ul class="contacts-list">
      <li class="contact-item">
        <div class="icon-box">
        <i class="fa-solid fa-envelope-open"></i>
        </div>
        <div class="contact-info">
          <p class="contact-title">Email</p>
          <a href="mailto:richard@example.com" class="contact-link">richard@example.com</a>
        </div>
      </li>
      <li class="contact-item">
        <div class="icon-box">
        <i class="fa-solid fa-mobile-screen"></i>
        </div>
        <div class="contact-info">
          <p class="contact-title">Phone</p>
          <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
        </div>
      </li>
      <li class="contact-item">
        <div class="icon-box">
        <i class="fa-regular fa-calendar-days"></i>
        </div>
        <div class="contact-info">
          <p class="contact-title">Birthday</p>
          <time datetime="1982-06-23">June 23, 1982</time>
        </div>
      </li>
      <li class="contact-item">
        <div class="icon-box">
        <i class="fa-solid fa-location-dot"></i>
        </div>
        <div class="contact-info">
          <p class="contact-title">Location</p>
          <address>Sacramento, California, USA</address>
        </div>
      </li>
    </ul>
      `;
    }
  }
  