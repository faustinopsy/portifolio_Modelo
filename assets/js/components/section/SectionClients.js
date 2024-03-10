export default class SectionClients {
    constructor() {
    }

    render() {
        return `
        <section class="clients">
            <h3 class="h3 clients-title">Clients</h3>
            <ul class="clients-list has-scrollbar">
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-1-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-2-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-3-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-4-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-5-color.png" alt="client logo">
                </a>
            </li>
            <li class="clients-item">
                <a href="#">
                <img src="./assets/images/logo-6-color.png" alt="client logo">
                </a>
            </li>
            </ul>
        </section>
        `
    }
}
