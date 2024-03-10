export default class SectionService {
    constructor() {
    }

    render() {
        return `
        <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>
        <ul class="service-list">
        <li class="service-item">
            <div class="service-icon-box">
            <img src="./assets/images/icon-design.svg
            " alt="design icon" width="40">
            </div>
            <div class="service-content-box">
            <h4 class="h4 service-item-title">Web design</h4>
            <p class="service-item-text">
                The most modern and high-quality design made at a professional level.
            </p>
            </div>
        </li>
        <li class="service-item">
            <div class="service-icon-box">
            <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40">
            </div>
            <div class="service-content-box">
            <h4 class="h4 service-item-title">Web development</h4>
            <p class="service-item-text">
                High-quality development of sites at the professional level.
            </p>
            </div>
        </li>
        <li class="service-item">
            <div class="service-icon-box">
            <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40">
            </div>
            <div class="service-content-box">
            <h4 class="h4 service-item-title">Mobile apps</h4>
            <p class="service-item-text">
                Professional development of applications for iOS and Android.
            </p>
            </div>
        </li>
        <li class="service-item">
            <div class="service-icon-box">
            <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40">
            </div>
            <div class="service-content-box">
            <h4 class="h4 service-item-title">Photography</h4>
            <p class="service-item-text">
                I make high-quality photos of any category at a professional level.
            </p>
            </div>
        </li>
        </ul>
    </section>
        `
    }
}
