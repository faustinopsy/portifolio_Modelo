import Card from '../cards/Card.js';
import FetchData from '../lib/FetchData.js';

export default class SectionBlog {
  constructor() {
    this.blogPosts = [];
    this.url = './assets/js/json/blogPosts.json';
    this.cards = null;
  }

  async loadPosts() {
    if (urlsJson.urls && urlsJson.urls[0]) {
      this.blogPosts = urlsJson.urls[0];
    } else {
      this.blogPosts = await FetchData.getJSON(this.url);
      if (!urlsJson.urls) {
          urlsJson.urls = [];
      }
      urlsJson.urls[0] = this.blogPosts;
    }
  }
  render() {
    let card;
    const blogPostItems = this.blogPosts.map(post => {
      card = new Card(post);
      return card.render();
    }).join('');
    return `
      <section class="blog-posts">
        <ul class="blog-posts-list">
          ${blogPostItems}
        </ul>
      </section>
    `;
  }

  async renderAsync() {
    await this.loadPosts();
    return this.render();
  }
}
