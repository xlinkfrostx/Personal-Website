const express = require("express");
const path = require("path");

const webapp = express();

webapp.use("/static", express.static(path.resolve(__dirname, "src", "static")));

webapp.get("/*", (request, resolve) => {
    resolve.sendFile(path.resolve(__dirname, "src", "index.html"));
});

webapp.listen(process.env.PORT || 49152, () => console.log("Website is running"));