import {HeaderBar} from '/src/ui/header-bar.js';

export class ApplicationBase {

    constructor(title) {
        this.title = title;
        this.headerBar = new HeaderBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    activateRoute(route) {
        let content = this.headerBar.element.find('.w-page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false) {
        this.headerBar.addLink(id, '');

        this.routeMap[id] = pageObject;

        if (defaultRoute) {
            this.defaultRoute = id;
        }
    }

    show(element) {
        this.headerBar.appendToElement(element);

        this.headerBar.element.find('.e-link').click((event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route.trim());
        });

        if (this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
}
