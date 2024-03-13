export default class Configuracoes {
  static instance;
  constructor() {
    if (Configuracoes.instance) {
      return Configuracoes.instance;
    }
    this.i18n = {};
    this.selectedLanguage = localStorage.getItem('configSettings') ? JSON.parse(localStorage.getItem('configSettings')).language : 'en';
    this.loadStyles();
    this.render();
    this.loadI18n(this.selectedLanguage || 'en');
    Configuracoes.instance = this;
  }

  async loadI18n(language) {
    const response = await fetch(`./assets/i18n/${language}.json`);
    this.i18n = await response.json();
    this.updateI18nTexts();
    this.loadConfig();
  }

  loadStyles() {
    const styles = [
      { id: 'modal-styles', href: './assets/css/modal.css' },
      { id: 'floatButtom-styles', href: './assets/css/floatButtom.css' }
    ];
    styles.forEach(style => {
      if (!document.getElementById(style.id)) {
        const link = document.createElement('link');
        link.id = style.id;
        link.href = style.href;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    });
  }

  render() {
    const buttonHtml = `<button id="config-btn"></button>`;
    const modalHtml = `
      <div id="config-modal" class="modal-container" hidden>
        <div class="overlay"></div>
        <div class="testimonials-modal">
          <button class="modal-close-btn">X</button>
          <div class="modal-content" id="modal-content"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.insertAdjacentHTML('beforeend', buttonHtml);
    this.afterRender();
  }

  afterRender() {
    document.getElementById('config-btn').addEventListener('click', () => {
      document.getElementById('config-modal').classList.add('active');
      document.querySelector('.overlay').classList.add('active');
    });

    document.querySelector('.modal-close-btn').addEventListener('click', () => {
      document.getElementById('config-modal').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    });

    document.querySelectorAll('.language-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const selectedLanguage = e.target.getAttribute('data-language');
        this.selectedLanguage = selectedLanguage;
          this.updateI18nTexts();
          this.loadConfig();
      });
    });
  }

  updateI18nTexts() {
    document.getElementById('config-btn').textContent = this.i18n.settingsButton;
    const settings = JSON.parse(localStorage.getItem('configSettings'));
    
    const linguas = `
      <div>
        <button type="button" class="language-btn" data-language="en">English</button>
        <button type="button" class="language-btn" data-language="pt">Português</button>
        <button type="button" class="language-btn" data-language="es">Español</button>
      </div>
    `;

    const settingsHtml = `
      <h3>${this.i18n.settingsTitle}</h3>
      <div>
        <label for="primary-color">${this.i18n.primaryColor}:</label>
        <input type="color" id="primary-color" name="primary-color" value="${settings.primaryColor}">
      </div>
      <div>
        <label for="font-family">${this.i18n.fontFamily}:</label>
        <select id="font-family" name="font-family">
            <option value="'Poppins', sans-serif">Poppins</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
        </select>
      </div>
      <div>
        <label for="font-size">${this.i18n.fontSize}:<span id="font-size-value">${settings.fontSize}</span></label>
        <input type="range" id="font-size" name="font-size" min="12" max="33" value="${settings.fontSize}">
      </div>
      <div>
        <label for="background-color">${this.i18n.backgroundColor}:</label>
        <input type="color" id="background-color" name="background-color" value="${settings.backgroundColor}">
      </div>
      <div>
        <label for="background-painel">${this.i18n.backgroundPanelColor}:</label>
        <input type="color" id="background-painel" name="background-painel" value="${settings.backgroundPainel}">
      </div>
      <div>
        <label for="shadow-intensity">${this.i18n.shadowIntensity}:</label>
        <input type="range" id="shadow-intensity" name="shadow-intensity" min="0" max="25" value="${settings.shadowIntensity}">
      </div>
      ${linguas}
      <button type="button" id="apply-settings">${this.i18n.applyButton}</button>
    `;

    document.getElementById('modal-content').innerHTML = settingsHtml;
    document.getElementById('apply-settings').addEventListener('click', () => {
      this.preApplySettings();
    });

    document.querySelectorAll('.language-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const selectedLanguage = e.target.getAttribute('data-language');
        console.log(selectedLanguage)
        this.selectedLanguage = selectedLanguage;
        this.preApplySettings();
          this.updateI18nTexts();
          this.loadConfig();
      });
    });
  }

  preApplySettings() {
    const settings = {
      primaryColor: document.getElementById('primary-color').value,
      fontFamily: document.getElementById('font-family').value,
      fontSize: document.getElementById('font-size').value,
      shadowIntensity: document.getElementById('shadow-intensity').value,
      backgroundColor: document.getElementById('background-color').value,
      backgroundPainel: document.getElementById('background-painel').value,
      language: this.selectedLanguage
    };
    this.aplicarConfig(settings);
    this.saveConfig(settings);
  }

  aplicarConfig(settings) {
    document.documentElement.style.setProperty('--jet', settings.primaryColor);
    document.documentElement.style.setProperty('--ff-poppins', settings.fontFamily);
    document.documentElement.style.setProperty('--shadow-1', `-4px 8px ${settings.shadowIntensity}px hsla(0, 0%, 0%, 0.25)`);
    document.documentElement.style.setProperty('--smoky-black', settings.backgroundColor);
    document.documentElement.style.setProperty('--eerie-black-2', settings.backgroundPainel);
    const fontSize = `${settings.fontSize}px`;
    document.documentElement.style.setProperty('--fs-6', fontSize);
    document.getElementById('font-size-value').textContent = settings.fontSize;
    document.getElementById('config-modal').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
  }

  saveConfig(settings) {
    localStorage.setItem('configSettings', JSON.stringify(settings));
    location.reload();
  }

  loadConfig() {
    const savedSettings = localStorage.getItem('configSettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        document.getElementById('primary-color').value = settings.primaryColor;
        document.getElementById('font-family').value = settings.fontFamily;
        document.getElementById('font-size').value = settings.fontSize;
        document.getElementById('shadow-intensity').value = settings.shadowIntensity;
        document.getElementById('background-color').value = settings.backgroundColor;
        document.getElementById('background-painel').value = settings.backgroundPainel;
        this.selectedLanguage = settings.language;
          this.updateI18nTexts(); 
          this.aplicarConfig(settings); 
      } 
    }
    static getInstance() {
      if (!Configuracoes.instance) {
        Configuracoes.instance = new Configuracoes();
      }
      return Configuracoes.instance;
    }
  }


const configuracoes = new Configuracoes();
