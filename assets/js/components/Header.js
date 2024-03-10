export default class Header {
    constructor(title) {
        this.title = title;
    }
    render(){
        return `
        <header>
            <h2 class="h2 article-title">${this.title}</h2>
        </header>
        `;
    }
  }