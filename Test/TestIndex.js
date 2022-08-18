const {Utils} = require("../")
const express = require("express")
const site = express()

const server = new Utils({
    app: site, // express application
    type: "ejs", // render middleware
    renderFile: "html", // render page file extenison
    pagesPath: __dirname+"/pages", // pages path
    assets: {
        assetsFolderPath: __dirname+"/assets", // loads the assets folder which contains css/Main.css and scripts/Main.js
        assetsPath: "/assets" // the url path
    }  
})

server.load(__dirname+"/routes", function () {
    site.listen(8080, () => {
        console.log("Site is online at https://localhost:8080")
    })
})
