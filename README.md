# rf-production-font
A Webfont for with symbold for prodction

![rf-production-font-reference](https://github.com/Rapidfacture/rf-production-font/blob/master/rf-production-font-reference.png)


## Installation
* for reference of the icons see the file font/rf-icons-reference.html
* add actual version of rf-production-font to you package.json
* copy the font folder (it includes .css, .eot, .ttf, .woff) from this package to our webserver
* and add the .css to the heas section of your index.html

```html
<head>
   <meta charset="utf-8">

   <!-- add the font here -->
   <link rel="stylesheet" href="static/rf-production-font/font/rf-production-font.css" type="text/css">

   <script src="js/app.js"></script>
</head>
```

## Development
* add svg-files in the src folder in your project
* create the icon font using grunt
* when working correct, update the rf-production-font project
* push the new version to our server and publish on npm using np


## Project structure
* each icons is created as single svg image, grunt-webfont generates the font
* src folder: svg icons
* font folder: compiled output  


## License
* free for private use only. If you want to use it commercially, feel free to contact us.
* contribution is welcome
* Rapidfacture GmbH, info@rapidfacture.com
