import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHTML() {
        return `
            <div class="hero-image">
                <div class="hero-text">
                    <h3>Hello, my name is</h3>
                    <h1>Ashir Imran</h1>
                    <p>Programmer and music producer</p>
                </div>
            </div> 
        `;
    }
}