const express = require('express')
const { join } = require('path')
const { lstatSync, readdirSync } = require('fs')
const { QuickDB } = require("quick.db");
const db = new QuickDB()
const mdir = process.cwd()
const ejs = require("ejs")
const pug = require("pug")

class Util {
    /**
        @param {express.Application} app The express application.

@param {String} type The type of router engine middleware you want [none, ejs, pug] (case sensitive)

@param {String} renderFile The page files extension (required if you chose to use type)

@param {String} pagesPath The path to the pages of your site


*/
    constructor(app, type, renderFile, pagesPath) {
if (!type ||type=== "none") {
 this.app = app
        this.routes = new Map()
    
} else if (type&&type === "ejs") {
 this.app = app
        this.routes = new Map()
this.app.engine(renderFile, ejs.renderFile)
this.app.set("view engine", renderFile)
this.app.set("views", join(pagesPath))





    


} else if(type&&type==="pug") {
this.app = app
this.routes = new Map()
this.app.engine(renderFile, pug.renderFile)
this.app.set("view engine", renderFile)
this.app.set("views", join(pagesPath))





} else {
        new Error("Nothing was defined")
}
       }
    /**
        @param {String} dir The directory.
    */
    async load(dir) {
        let modules = readdirSync(join(dir))
        for(const file of modules) {
                if (file === "Template") {
                        
                } else {
            let stat = lstatSync(join(dir, file))
            if(stat.isDirectory()) { this.load(join(dir, file)); continue; }
            let route = require(join(dir, file))
    /* Fixed */ if(!route || !route.data) continue;
                
            this.routes.set(route.data.path, route)
            this.app.get(route.data.path, (req, res) => {
                if(route.data.path.startsWith('/image/')) req = this.support(req)
                route.execute(req, res, db, DevKey)
            })
                }
        }
    }
    /**
        @param {express.Request} req The http request.
    */
    support(req) {
        let str = JSON.stringify(req.query)
        req.query = JSON.parse(str.replaceAll('.webp', '.png'))
        return req
    }
}

module.exports = Util