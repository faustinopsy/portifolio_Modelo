export default class TestimonialsModal {
    constructor() {
      this.modalContainer = document.querySelector("[data-modal-container]");
      this.modalCloseBtn = document.querySelector("[data-modal-close-btn]");
      this.overlay = document.querySelector("[data-overlay]");
      this.modalImg = document.querySelector("[data-modal-img]");
      this.modalTitle = document.querySelector("[data-modal-title]");
      this.modalText = document.querySelector("[data-modal-text]");
      this.testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  
      this.modalCloseBtn.addEventListener("click", () => this.toggle());
      this.overlay.addEventListener("click", () => this.toggle());
      this.bindEvents();
    }
   
    bindEvents() {
      for (let i = 0; i < this.testimonialsItem.length; i++) {
        this.testimonialsItem[i].addEventListener("click", (event) => this.openModal(event));
      }
    }
  
    openModal(event) {
      const source = event.target.closest("[data-testimonials-item]"); 
      this.modalImg.src = source.querySelector("[data-testimonials-avatar]").src;
      this.modalImg.alt = source.querySelector("[data-testimonials-avatar]").alt;
      this.modalTitle.innerHTML = source.querySelector("[data-testimonials-title]").innerHTML;
      this.modalText.innerHTML = source.querySelector("[data-testimonials-text]").innerHTML;
      this.toggle();
    }
  
    toggle() {
      this.modalContainer.classList.toggle("active");
      this.overlay.classList.toggle("active");
    }
  }
  