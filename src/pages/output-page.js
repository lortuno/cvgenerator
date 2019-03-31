import {Page} from '/src/framework/page.js';

export class OutputPage extends Page {

    constructor() {
        super('Output');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '\t<article class="container">\n' +
            '\t\t<div class="container-fluid h-100">\n' +
            '\t\t\t<div class="row h-100">\n' +
            '\t\t\t\t<!-- left drawer -->\n' +
            '\t\t\t\t<aside class="col-md-2 fixed pl-0 py-3 bg-faded">\n' +
            '\t\t\t\t\t<ul class="nav flex-md-column justify-content-center">\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link active" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t\t<li class="nav-item">\n' +
            '\t\t\t\t\t\t\t<a class="nav-link" href="#">Link</a>\n' +
            '\t\t\t\t\t\t</li>\n' +
            '\t\t\t\t\t</ul>\n' +
            '\t\t\t\t</aside>\n' +
            '\t\t\t\t<!-- center content -->\n' +
            '\t\t\t\t<div class="col fluid d-flex flex-column p-0">\n' +
            '\t\t\t\t\t<!-- main content -->\n' +
            '\t\t\t\t\t<div class="flex-grow">\n' +
            '\t\t\t\t\t\t<div class="col-12 py-4">\n' +
            '\t\t\t\t\t\t\t<h3 class="text-primary hidden-sm-down">Fixed-Fluid-Fixed <span class="small">(Holy Grail Layout)</span></h3>\n' +
            '\t\t\t\t\t\t\t<p>3 wolf moon retro jean shorts chambray sustainable roof party. Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings\n' +
            '\t\t\t\t\t\t\t\tflannel Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral\n' +
            '\t\t\t\t\t\t\t\tfap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore,\n' +
            '\t\t\t\t\t\t\t\tHelvetica Williamsburg sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>\n' +
            '\t\t\t\t\t\t\t<div class="row">\n' +
            '\t\t\t\t\t\t\t\t<div class="col-xl-3 col-md-6">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="card card-block mb-2">\n' +
            '\t\t\t\t\t\t\t\t\t\t<h2 class="text-center"><span class="label label-danger">Snippets</span></h2>\n' +
            '\t\t\t\t\t\t\t\t\t\t<h1 class="text-center">311</h1>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t<div class="col-xl-3 col-md-6 mb-2">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="card card-block">\n' +
            '\t\t\t\t\t\t\t\t\t\t<h2 class="text-center"><span class="label label-danger">Downloads</span></h2>\n' +
            '\t\t\t\t\t\t\t\t\t\t<h1 class="text-center">982</h1>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t<div class="col-xl-3 col-md-6 mb-2">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="card card-block">\n' +
            '\t\t\t\t\t\t\t\t\t\t<h2 class="text-center"><span class="label label-danger">Sales</span></h2>\n' +
            '\t\t\t\t\t\t\t\t\t\t<h1 class="text-center">112</h1>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t<div class="col-xl-3 col-md-6 mb-2">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="card card-block">\n' +
            '\t\t\t\t\t\t\t\t\t\t<h2 class="text-center"><span class="label label-danger">Questions</span></h2>\n' +
            '\t\t\t\t\t\t\t\t\t\t<h1 class="text-center">209</h1>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<article>\n' +
            '\t\t\t\t\t\t<h2>Table</h2>\n' +
            '\t\t\t\t\t\t<div class="w-table"></div>\n' +
            '\t\t\t\t\t</article>\n' +
            '\t\t\t\t\t<!-- /main content -->\n' +
            '\n' +
            '\t\t\t\t\t<footer class="navbar navbar-toggleable-xl navbar-faded navbar-light">\n' +
            '\t\t\t\t\t\t<ul class="navbar-nav">\n' +
            '\t\t\t\t\t\t\t<li class="nav-item"><a href="#" class="nav-link">Footer</a></li>\n' +
            '\t\t\t\t\t\t\t<li class="nav-item"><a href="#" class="nav-link">Link</a></li>\n' +
            '\t\t\t\t\t\t\t<li class="nav-item"><a href="#" class="nav-link">Link</a></li>\n' +
            '\t\t\t\t\t\t\t<li class="nav-item"><a href="#" class="nav-link">More</a></li>\n' +
            '\t\t\t\t\t\t</ul>\n' +
            '\t\t\t\t\t</footer>\n' +
            '\n' +
            '\t\t\t\t</div>\n' +
            '\n' +
            '\t\t\t\t<!-- right drawer -->\n' +
            '\t\t\t\t<aside class="col-md-2 fixed-2 py-3 bg-faded">\n' +
            '\t\t\t\t\t<div class="card card-block mb-2 border-0">\n' +
            '\t\t\t\t\t\tPut some content here in the sidebar like ads or links.\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<div class="card card-block mb-2 border-0">\n' +
            '\t\t\t\t\t\tPut some content here in the sidebar like ads or links.\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<div class="card card-block mb-2 border-0">\n' +
            '\t\t\t\t\t\tPut some content here in the sidebar like ads or links.\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t</aside>\n' +
            '\t\t\t</div>\n' +
            '\t\t</div>\n' +
            '\t</article>';
    }
}
