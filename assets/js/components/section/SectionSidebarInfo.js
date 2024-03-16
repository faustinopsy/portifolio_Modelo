export default class SidebarInfo {

    render() {
      return `
        <div class="sidebar-info">
          <figure class="avatar-box">
            <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80">
          </figure>
          <div class="info-content">
            <h1 class="name" title="Richard hanrick">Richard hanrick</h1>
            <p class="title">Web developer</p>
          </div>
          <button class="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      `;
    }
  
  }
  