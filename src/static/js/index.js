const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("Viewing Home")},
        {path: "/projects", view: () => console.log("Viewing Projects")}
    ];

    const matches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(matches);
};

document.addEventListener("DomContentLoaded", () => {
    router();
});