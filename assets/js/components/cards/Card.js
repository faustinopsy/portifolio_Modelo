export default class Card {
    constructor(postData) {
        this.postData = postData;
    }

    render() {
        return `
            <li class="blog-post-item">
                <a href="#">
                    <figure class="blog-banner-box">
                        <img src="${this.postData.imageSrc}" alt="${this.postData.alt}" loading="lazy">
                    </figure>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <p class="blog-category">${this.postData.category}</p>
                            <span class="dot"></span>
                            <time datetime="${this.postData.date}">${this.postData.date}</time>
                        </div>
                        <h3 class="h3 blog-item-title">${this.postData.title}</h3>
                        <p class="blog-text">
                            ${this.postData.text}
                        </p>
                    </div>
                </a>
            </li>
        `;
    }
}
