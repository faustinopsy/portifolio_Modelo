import Navbar from './Navbar.js';

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
    }
    
}
const app = new App();
window.addEventListener("hashchange", () => app.Navbar.navigator(location.hash));