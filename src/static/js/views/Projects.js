import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Projects");
    }

    async getHTML() {
        return `
            <div>
                <h2>
                    Under construction...
                </h2>
            </div>
        `;
    }
}