const Utils = require("../src/utils")
const express = require("express")
const app = express()
const mdir = __dirname
const util = new Utils(app, "ejs", "YeetDesigns", mdir+"/pages")