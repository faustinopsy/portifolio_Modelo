import Configuracoes from '../../Configuracoes.js';
export default class SectionAbout {
    constructor() {
        this.configuracoes = Configuracoes.getInstance();
    }

    render() {
        const i18n = this.configuracoes.i18n.about;
        if (!i18n) {
        console.error('Translation for service not found:', serviceKey);
        return '';
        }
        return `
        <section class="about-text">
            <p> ${i18n.pum}</p>
        </section>
        `
    }
}
