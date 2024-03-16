export default class CustomSelect {
    constructor() {
      this.select = null;
      this.selectItems = null;
      this.selectValue = null;
      this.filterBtn = null;
     
    }
    render(){
      return `
      <ul class="filter-list">
            <li class="filter-item">
              <button class="active" data-filter-btn>All</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Web design</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Applications</button>
            </li>
            <li class="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul>
          <div class="filter-select-box">
            <button class="filter-select" data-select>
              <div class="select-value" data-selecct-value>Select category</div>
              <div class="select-icon">
              <i class="fa-solid fa-chevron-down"></i>
              </div>
            </button>
            <ul class="select-list">
              <li class="select-item">
                <button data-select-item>All</button>
              </li>
              <li class="select-item">
                <button data-select-item>Web design</button>
              </li>
              <li class="select-item">
                <button data-select-item>Applications</button>
              </li>
              <li class="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div>
      `
    }
    afterRender() {
      this.select = document.querySelector(".data-select");
      this.select.addEventListener("click", () => this.toggle());
      this.selectItems = document.querySelectorAll(".data-select-item");
      this.selectValue = document.querySelector(".data-selecct-value");
      this.filterBtn = document.querySelectorAll(".data-filter-btn");
      
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
  