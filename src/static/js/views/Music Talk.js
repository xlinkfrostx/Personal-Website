import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Music Talk");
    }

    async getHTML() {
        return `
            <div>
                <h2>
                    Under construction... 
                </h2>

                <p> (Prepare for lots of brick wall talking!) </p>
            </div>
        `;
    }
}