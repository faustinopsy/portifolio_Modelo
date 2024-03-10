export default class Router {
    constructor(routes) {
        this.routes = routes; 
        window.addEventListener('hashchange', this.handleRouteChange.bind(this));
    }

    handleRouteChange() {
        const path = window.location.hash.slice(1);
        const SectionComponent = this.routes[path];
        if (SectionComponent) {
            const sectionInstance = new SectionComponent();
            const main = document.querySelector('main');
            main.innerHTML = ''; 
            main.appendChild(sectionInstance.render());
        }
    }
}
