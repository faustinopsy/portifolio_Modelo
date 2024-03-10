export default class CustomSelect {
    constructor() {
      this.select = document.querySelector("[data-select]");
      this.selectItems = document.querySelectorAll("[data-select-item]");
      this.selectValue = document.querySelector("[data-selecct-value]");
      this.filterBtn = document.querySelectorAll("[data-filter-btn]");
  
      this.select.addEventListener("click", () => this.toggle());
      this.bindEvents();
    }
  
    bindEvents() {
      for (let i = 0; i < this.selectItems.length; i++) {
        this.selectItems[i].addEventListener("click", (event) => this.selectItem(event));
      }
    }
  
    selectItem(event) {
      this.selectValue.innerText = event.target.innerText;
      this.toggle();
      this.filterFunc(event.target.innerText.toLowerCase());
    }
  
    toggle() {
      this.select.classList.toggle("active");
    }
  
    filterFunc(selectedValue) {
        const filterItems = document.querySelectorAll("[data-filter-item]");
        for (let i = 0; i < filterItems.length; i++) {
            if (selectedValue === "all") {
              filterItems[i].classList.add("active");
            } else if (selectedValue === filterItems[i].dataset.category) {
              filterItems[i].classList.add("active");
            } else {
              filterItems[i].classList.remove("active");
            }
        
          }
    }
  }
  