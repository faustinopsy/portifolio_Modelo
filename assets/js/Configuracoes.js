class Configuracoes {
    constructor() {
      this.loadStyles();
      this.render();
      this.afterRender();
      this.loadConfig();
    }
  
    loadStyles() {
      const styles = [
        { id: 'floatButtom-styles', href: './assets/css/floatButtom.css' },
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
      const settingsHtml = `
        <div id="config-modal" class="modal-container" hidden>
          <div class="overlay"></div>
          <div class="testimonials-modal">
            <button class="modal-close-btn">X</button>
            <div class="modal-content">
              <h3>Configurações de Tema</h3>
              <div>
                <label for="primary-color" class="service-item-text">Cor Primária:</label>
                <input type="color" id="primary-color" name="primary-color" value="#222222">
              </div>
              <div>
                <label for="font-family" class="service-item-text">Fonte:</label>
                <select id="font-family" name="font-family">
                    <option value="'Poppins', sans-serif">Poppins</option>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="'Courier New', monospace">Courier New</option>
                </select>
              </div>
              <div>
                <label for="background-color" class="service-item-text">Cor de Fundo:</label>
                <input type="color" id="background-color" name="background-color" value="#070707">
              </div>
              <div>
                <label for="background-color" class="service-item-text">Cor de Fundo do painel:</label>
                <input type="color" id="background-painel" name="background-painel" value="#070707">
              </div>
              <div>
                <label for="shadow-intensity" class="service-item-text">Intensidade da Sombra:</label>
                <input type="range" id="shadow-intensity" name="shadow-intensity" min="0" max="25" value="8">
              </div>
              <button type="button" id="apply-settings" class="service-item-text">Aplicar</button>
            </div>
          </div>
        </div>
      `;
      const buttonHtml = `<button id="config-btn">Configurações</button>`;
      document.body.insertAdjacentHTML('beforeend', settingsHtml);
      document.body.insertAdjacentHTML('beforeend', buttonHtml);
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
  
      document.getElementById('apply-settings').addEventListener('click', () => {
        const settings = {
          primaryColor: document.getElementById('primary-color').value,
          fontFamily: document.getElementById('font-family').value,
          shadowIntensity: document.getElementById('shadow-intensity').value,
          backgroundColor: document.getElementById('background-color').value,
          backgroundPainel: document.getElementById('background-painel').value
        };
        
        this.aplicarConfig(settings);
        this.saveConfig(settings); 
      });
    }
    aplicarConfig(settings) {
        document.documentElement.style.setProperty('--jet', settings.primaryColor);
        document.documentElement.style.setProperty('--ff-poppins', settings.fontFamily);
        document.documentElement.style.setProperty('--shadow-1', `-4px 8px ${settings.shadowIntensity}px hsla(0, 0%, 0%, 0.25)`);
        document.documentElement.style.setProperty('--smoky-black', settings.backgroundColor);
        document.documentElement.style.setProperty('--eerie-black-2', settings.backgroundPainel);
    
        document.getElementById('config-modal').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    saveConfig(settings) {
        localStorage.setItem('configSettings', JSON.stringify(settings));
      }
    loadConfig() {
        const settings = JSON.parse(localStorage.getItem('configSettings'));
        if (settings) {
          document.getElementById('primary-color').value = settings.primaryColor;
          document.getElementById('font-family').value = settings.fontFamily;
          document.getElementById('shadow-intensity').value = settings.shadowIntensity;
          document.getElementById('background-color').value = settings.backgroundColor;
          document.getElementById('background-painel').value = settings.backgroundPainel;
          
          this.aplicarConfig(settings); 
        }
      }
  }
  
  const configuracoes = new Configuracoes();
  