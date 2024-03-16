export default class SectionSidebarSocial {
  constructor(social) {
      this.social = social;
  }

  render() {
      return `
      <ul class="social-list">
      <li class="social-item">
        <a href="https://facebook.com/yourprofile" class="social-link">
        <i class="fa-brands fa-facebook"></i>
        </a>
      </li>
      <li class="social-item">
        <a href="https://twitter.com/yourprofile" class="social-link">
        <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
      <li class="social-item">
        <a href="https://instagram.com/yourprofile" class="social-link">
        <i class="fa-brands fa-instagram"></i>
        </a>
      </li>
      </ul>
      `;
  }
}
