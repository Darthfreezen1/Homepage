# AMHT: Another Minimal Homepage Template this sucks check my new homepage repo <- that also sucks i got another new one.
Tired of using Chrome or Firefoxes default or "custom built" default home page? What something lightweight, fast, and customizable? Do you like to tinker, and make things your own? Look no further!

The goal of AHMT is to increase productivity while having some fun along the way.

## Features
1. Easy to modify. Only need change a few lines for a quick setup, or customize HTML/CSS to your liking!
2. Quick access to links you use
3. Displays current weather +3 days!
4. The good feeling of creating something yourself!

## Usage
### Using DarkSky weather:
1. In `index.html`, change line 59 from `script src="load_image.js"` to `script src="weather.js"`
2. Then, in `weather.js`, add your latitude/longitude to the variables `let long` and `let lat`
3. Create an account on https://darksky.net/dev and grab an api key from the dev page
4. Place the api string in the variable `const api = `${proxy} your-api-here`
5. Add index.html as your homepage. In newer versions of Firefox and Chrome, you may have to host the site locally using a webserver like Apache and set the localhost link to be your homepage

### Using wttr.in (Uses a bash script. May not work on all platforms)
1. In `index.html`, change line 59 from `script src="weather.js"` to `"script src="load_image.js"`
2. In the *Scripts* folder, edit `getweather.sh` wget path to download images to the weather_images folder in the Homepage folder.
3. Still in `getweather.sh`, edit the wttr.in link and add your city/town
4. Run the script, it should download a png of the current +3 days of weather
*Optionally, set the script to run at startup. Im on i3 currently so I can just add an exec line to the config*

*NOTE: This doesnt look as good as the Darksky method, but is more functional for less effort :p*

## TODO
1. Make it even easier to change weather methods
2. Make it even easier to change colors
3. For linux users: add pywal support, or at least read color schemes from .Xdefaults/resources

## Tools I Used
The color scheme matches my current desktop and terminal color scheme. I got the colors using KDE's color picker widget.

Font: UbuntuMono from the Nerd Fonts collection here: https://nerdfonts.com/

Editor: vscode

DarkSky and wttr.in
