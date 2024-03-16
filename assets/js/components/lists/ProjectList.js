export default class ProjectList {
    constructor(project) {
        this.project = project;
    }

    render() {
        return `
            <li class="project-item active" data-filter-item data-category="${this.project.category}">
                <a href="#">
                    <figure class="project-img">
                        <div class="project-item-icon-box">
                        <i class="fa-regular fa-eye"></i>
                        </div>
                        <img src="${this.project.imageSrc}" alt="${this.project.altText}" loading="lazy">
                    </figure>
                    <h3 class="project-title">${this.project.title}</h3>
                    <p class="project-category">${this.project.category}</p>
                </a>
            </li>
        `;
    }
}
