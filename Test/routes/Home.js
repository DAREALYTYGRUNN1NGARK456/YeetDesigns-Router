const Builder = require("../../src/builder")
module.exports = {
        data: new Builder()
    .setPath('/')
    .setExplain('Home Page'),
   async execute(req, res, db) { 
           res.render("index", {
                   message: {
                           main: "Hello World!"
                   }
           })
    }
}