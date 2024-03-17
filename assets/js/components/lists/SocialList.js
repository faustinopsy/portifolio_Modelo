export default class SocialList {
  constructor(socialData) {
    this.socialData = socialData;
  }

  async render() {
    return  `
      <li class="social-item">
        <a href="${this.socialData.url}" class="social-link">
        <i class="${this.socialData.icon}"></i>
        </a>
      </li>
    `;

  }
}
