
INSTALLATION
------------

Gulp and Bower are required to manage assets.

First, you will need to install NodeJS.

Install gulp and bower with 'npm install -g gulp bower' from the command line. On some setups, sudo may be required.

From the parent (neato) theme directory, enter 'bower install' in the command line. This will pull in the component assets for Neato. These
are referenced includes from the STARTER theme for you - no need to copy them into the STARTER/subthemes.

Create a subtheme. See the BUILD A THEME WITH DRUSH section below on how to do that.

Run 'gulp' from the subtheme command line to compile CSS from SASS. Gulpfile.js controls what happens in this process. Feel free to
add your own tools into this file to facilitate development.

Lastly, run 'gulp watch' to instruct Gulp to keep continuous watch on SCSS, JS, and Twig files for changes. Saving will trigger a
cache rebuild, css/js rebuild, and all BrowserSync browsers to reload.

BUILD A THEME WITH DRUSH
----------------------------------
It is highly encouraged to use Drush to generate a sub theme for editing. Do not edit the parent 'neato' theme!

Drush command:
  drush ngt [THEMENAME] [Description !Optional]