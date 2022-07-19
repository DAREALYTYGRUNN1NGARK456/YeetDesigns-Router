# Render Engine Examples
## EJS
### Ejs Engine
```js
const express = require("express")
const site = express()
const {Utils} = require("ydrouter")



const server = new Create(site, "ejs", "html", "./pages")

server.load('./routes').then(() => {
    site.listen(process.env.PORT || 3000, () => {
        console.log('Listening the webserver.')
    })
})

```
### Ejs Page File
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Ejs Page File</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
        <%- include("Templates/BootStrap_ContainerDIV_START.ejs") %>
  <% if (message.main === "Hello World!") { %>
          
<h1><%= message.main %></h1>
          <% } %>
                  <%- include("Templates/BootStrap_ContainerDIV_END.ejs") %>
  <script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>

 <!--
This script places a badge on your repl's full-browser view back to your repl's cover page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green, teal, blue, blurple, magenta, pink!
-->
<script src="https://replit.com/public/js/replit-badge.js" theme="blurple" defer></script> 
</body>

</html>

```
### Ejs Page Template BootStrap Container Start file
```html
<div class="container">
```
### Ejs Page Template BootStrap Container End file
```html
</div>
```
## PUG

### Pug Engine
```js
const express = require("express")
const site = express()
const {Utils} = require("ydrouter")



const server = new Create(site, "pug", "html", "./pages")

server.load('./routes').then(() => {
    site.listen(process.env.PORT || 3000, () => {
        console.log('Listening the webserver.')
    })
})

```
### Pug Page File
```pug
doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
```