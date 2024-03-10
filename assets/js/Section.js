export default class Section {
    constructor(id, title, contentHTML) {
        this.id = id;
        this.title = title;
        this.contentHTML = contentHTML;
    }

    render() {
        const article = document.createElement('article');
        article.className = `${this.id} active`;
        article.setAttribute('data-page', this.id);

        const header = document.createElement('header');
        const h2 = document.createElement('h2');
        h2.className = 'h2 article-title';
        h2.textContent = this.title;
        header.appendChild(h2);

        const contentSection = document.createElement('section');
        contentSection.className = `${this.id}-text`;
        contentSection.innerHTML = this.contentHTML; 

        article.appendChild(header);
        article.appendChild(contentSection);

        return article;
    }
}
