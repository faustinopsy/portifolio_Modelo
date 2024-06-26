import Navbar from './Navbar.js';
window.urlsJson = []
class App{
    constructor(){
        this.Navbar = new Navbar();
        this.init()
    }
    async init(){
        const nav = document.getElementById("nav");
        await this.Navbar.loadMenu();
        nav.innerHTML = this.Navbar.render();
        this.Navbar.afterRender();
        this.Navbar.navigator();

        workX.addEventListener('message', async (event) => {
            const { type, data, error } = event.data;
            if (type === 'dadosJson') {
              if (data) {
                urlsJson = data
              }
            } else if (type === 'error') {
              console.error('Erro ao buscar estruturas:', error);
            }
          });
    }
    
}
const app = new App();
window.addEventListener("hashchange", () => app.Navbar.navigator(location.hash));