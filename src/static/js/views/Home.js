import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHTML() {
        return `
            <div>
                <h2>
                    Hello there!
                </h2>

                <div class="introP"><p>
                    My name is Ashir Imran. I'm a student studying towards a Computer Science degree at the University of Massachusetts, Amherst. <br>
                    I have an interest in both front and back end development, and am always trying out technologies that are new to me to broaden <br>
                    my CS knowledge. My other hobbies include producing music and playing video games.
                </p></div>

                <hr class="solid">
            </div>
        `;
    }
}