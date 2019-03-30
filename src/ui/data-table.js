import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {

    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    getElementString() {

        let thTags = '';
        for (let h of this.headers) {
            thTags += `<th scope="col">${h}</th>\n`;
        }

        let trTags = '';
        for (let row of this.data) {
            trTags += `<tr>`;
            let tdTags = '';
            for (let property of this.headers) {
                let field = row[property.toLowerCase()];
                trTags += `<td>
                             ${field}
                           </td>
                          `;
            }
            trTags += '</tr>';
        }

        return `
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    ${thTags}
                    </tr>
                </thead>
                <tbody>
                    ${trTags}
                </tbody>
            </table>

        `;
    }

}
