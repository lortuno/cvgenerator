import {BaseElement} from './base-element.js';

export class HeaderBar extends BaseElement {

    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }

    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }

    getElementString() {
        let links = '';
        for (let link of this.links)
            links += `<li class="nav-item">
                    <a class="nav-link cursor-pointer e-link">${link.title}</a></li>\n`;
        return `
            <header>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a class="navbar-brand" href="#">${this.title}</a>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                             ${links}
                            </ul>
                          </div>
                        </nav>
            </header>
            <main>
               <div class="w-page-content"></div>
            </main>
        `;
    }
}
