import Card from '../cards/Card.js';
import FetchData from '../lib/FetchData.js';

export default class SectionBlog {
  constructor() {
    this.blogPosts = [];
    this.blogIndexUrl = './assets/js/json/blogsIndex.json';
    this.cards = null;
  }

  async loadPosts() {
    if (urlsJson.urls && urlsJson.urls[0]) {
      this.blogPosts = urlsJson.urls.filter(url => typeof url === 'object' && url.id !== undefined);
    } else {
      const blogIndex = await FetchData.getJSON(this.blogIndexUrl);
      const blogUrls = blogIndex.map(id => `/assets/js/json/blog/${id}.json`);
      
      const blogPosts = await Promise.all(blogUrls.map(url => FetchData.getJSON(url)));
      this.blogPosts = blogPosts;
      
      if (!urlsJson.urls) {
          urlsJson.urls = [];
      }
      urlsJson.urls.push(...blogPosts);
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
