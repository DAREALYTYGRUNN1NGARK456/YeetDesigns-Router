---------
# YeetDesigns EXPRESS GET ROUTER
![npm](https://img.shields.io/npm/dw/yeetdesigns-router?logo=npm&style=for-the-badge)
## About
### this npm package uses
#### versions of npm packages
#### - quick.db v9.0.5
#### - express v4.18.1
#### - ejs v3.1.8
#### - pug v3.0.2
- [QUICK.DB NPM](https://www.npmjs.com/package/quick.db)
- [QUICK.DB DOCS](https://quickdb.js.org/)
- [EXPRESS NPM](https://www.npmjs.com/package/express)
- [EXPRESS DOCS](https://expressjs.com/)
- [PUG NPM](https://www.npmjs.com/package/pug)
- [PUG DOCS](https://pugjs.org/api/getting-started.html)
- [EJS NPM](https://www.npmjs.com/package/ejs)
- [EJS DOCS](https://ejs.co/)
---------
## LINKS
* [Docs](https://docs.yeetdesigns.xyz/router)
* [Discord](https://docs.yeetdesigns.xyz/router/support/discord)
---------
## Example
* [render engine examples](/Docs/Render%20Engine%20Examples.md)
### Main File
```js
const express = require("express")
const site = express()
const {Utils} = require("ydrouter")



const server = new Create(site)

server.load('./routes').then(() => {
    site.listen(process.env.PORT || 3000, () => {
        console.log('Listening the webserver.')
    })
})


```
### Routes/Home.js
```js
const {Builder} = require("ydrouter")

module.exports = {
    data: new Builder()
    .setPath('/')
    .setExplain('Home Page'),
    execute(req, res, db) {
res.send("Hello World!")
    }
}
```
---------
# Credits

- [Main Coder](https://docs.yeetdesigns.xyz/router/maincoder)
- [Package Publisher](https://docs.yeetdesigns.xyz/router/packagepublisher)

