import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHTML() {
        return `
            <h1>Projects</h1>
            <p>
                These are my projects (crickets...)
            </p>
        `;
    }
}