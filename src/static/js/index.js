import Home from "./views/Home.js";
import Projects from "./views/Projects.js";

const navTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: "/", view: Home},
        {path: "/projects", view: Projects}
    ];

    const matches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = matches.find(m => m.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHTML();

    //console.log(match.routes.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link")) {
            e.preventDefault();
            navTo(e.target.href);
        }
    });
    
    router();
});