import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHTML() {
        return `
            <h1>Hello, my name is Ashir Imran.</h1>
            <p>
                Website is still under construction.
            </p>
        `;
    }
}