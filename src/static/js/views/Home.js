import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHTML() {
        return `
            <div>
                <h2>Hello there!</h2>

                <div class="img-par">     
                    <div class="container">
                        <img src="../static/css/img/profile-pic.png" class="ppic" alt="Profile Pic"> 
                        <div class="middle">
                            <div class="text">Avatar by AzureChuck</div>
                        </div>
                    </div>
                    
                    <span>
                        My name is Ashir Imran. I'm a student studying towards a Computer Science degree at UMass Amherst. I have an interest in Software Engineering,
                        primarily in full stack projects, and am always trying out technologies that are new to me to broaden my CS knowledge.  I am currently looking for
                        software engineering internships as part of my studies. My other hobbies include producing hip-hop beats, talking about music and film/TV, playing video games, D&D, and just being a nerd in general.<br><br>
                        This website is a place for me to showcase my work, which includes projects that I have been working on, as well as a blog where I talk about music, whether it's discussing new releases or talking about stuff that I've produced recently.
                        <br><br> By the way, does that avatar of me look cool? It was drawn by AzureChuck, check him out!
                    </span>
                </div>

                <hr class="solid">

                <div class="technologies">
                    <h2>Relevant CS Skills</h2>

                    <h4>Languages: </h4>
                    <span>Java, Javascript, C, HTML, CSS</span> <br>
                    <h4>CS Skills/Technologies: </h4>
                    <span>Data Structures, Higher Order Functions, Object Oriented Programming, Unit Testing, Git, Github, Version Control, Eclipse IDE, VSCode, JSON,
                    node.js</span><br><br>
                </div>

                <hr class="solid">


            </div>
        `;
    }
}

// <h4>Music Production: </h4>
//                     <span>Ableton Live 10.1</span>