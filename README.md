# rf-production-font
A Webfont for with symbold for prodction

![rf-production-font-reference](https://github.com/Rapidfacture/rf-production-font/blob/master/rf-production-font-reference.png)


## Installation
* add actual version of rf-production-font to you package.json
* copy the font folder (it includes .css, .eot, .ttf, .woff) from this package to our webserver
* and add the .css to your index.html
* for reference of the icons see the file font/rf-icons-reference.html


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
* Rapidfacture GmbH, info@rapidfacture.com
