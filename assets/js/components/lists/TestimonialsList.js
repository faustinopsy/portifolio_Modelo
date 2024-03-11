export default class TestimonialsList {
    constructor(testimonials) {
      this.testimonials = testimonials;
    }
  
    render() {
        return `
        <li class="testimonials-item" data-testimonials-item data-id="${this.testimonials.id}">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img src="${this.testimonials.avatar}" alt="${this.testimonials.name}" width="60" data-testimonials-avatar>
            </figure>
            <h4 class="h4 testimonials-item-title" data-testimonials-title>${this.testimonials.name}</h4>
            <div class="testimonials-text" data-testimonials-text>
              <p>${this.testimonials.testimonial}</p>
            </div>
          </div>
        </li>
        <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>
        <section class="testimonials-modal">
        <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
        </button>
        <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
            <img src="" alt="" width="80" data-modal-img>
            </figure>
            <img src="./assets/images/icon-quote.svg" alt="quote icon">
        </div>
        <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title></h4>
            <time datetime=""></time>
            <div data-modal-text>
            
            </div>
        </div>
        </section>
    </div>
      `;
    }
  }
  