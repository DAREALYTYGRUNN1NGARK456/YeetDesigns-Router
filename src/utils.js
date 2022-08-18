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
     * @param {Object} options
        @param {express.Application} options.app The express application.

@param {String} options.type The type of router engine middleware you want [none, ejs, pug] (case sensitive)

@param {String} options.renderFile The page files extension (required if you chose to use type)

@param {String} options.pagesPath The path to the pages of your site

@param {Object} options.assets
@param {String} options.assets.assetsPath the url path
@param {String} options.assets.assetsFolderPath the folder path for all your assets 


*/
    constructor(options = {}) {
let type = options.type
let app = options.app
let renderFile = options.renderFile
let pagesPath = options.pagesPath
let assetsPath = options.assets.assetsPath
let assetsFolderPath = options.assets.assetsFolderPath
if (!type ||type=== "none") {
 this.app = app
        this.routes = new Map()
    
} else if (type&&type === "ejs") {
 this.app = app
        this.routes = new Map()
this.app.engine(renderFile, ejs.renderFile)
this.app.set("view engine", renderFile)
this.app.set("views", join(pagesPath))

if (assetsPath&&assetsFolderPath) {
    this.app.use(assetsPath, express.static(join(assetsFolderPath)))
} else {
    return new Error(`
    You didnt put the "options.assets" object right
    [
        assets: {
            assetsPath: "/assets",
            assetsFolderPath: __dirname+"/assets"
        }
    ]
    Please try again with the format above
    `)
}



    


} else if(type&&type==="pug") {
this.app = app
this.routes = new Map()
this.app.engine(renderFile, pug.renderFile)
this.app.set("view engine", renderFile)
this.app.set("views", join(pagesPath))
if (assetsPath&&assetsFolderPath) {
    this.app.use(assetsPath, express.static(join(assetsFolderPath)))
} else {
    return new Error(`
    You didnt put the "options.assets" object right
    [
        assets: {
            assetsPath: "/assets",
            assetsFolderPath: __dirname+"/assets"
        }
    ]
    Please try again with the format above
    `)
}




} else {
        new Error("Nothing was defined")
}
       }
    /**
    * @param {String} dir The directory.
    * @param {Function} callback the callback function
    */
    async load(dir, callback) {
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
                route.execute(req, res, db)
            })
            callback()
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
