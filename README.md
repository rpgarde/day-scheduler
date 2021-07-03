Hi 👋 this is a day scheduler web site

## Features
* A typical 9am to 6pm workday is displayed when you load the page 
* You can type your input and click using the corresponding save button
* Hours that are in the past are in dark blue, the present hour is orange, and the future hours are in turquoise
* When you exit/ reload the page, your entries are saved

## My approach
* This used HTML, CSS, and JS, as well as Bootstrap, JQuery, and Moment libraries
* When you load the page, it pulls from local storage and builds each hour as a form, with prefilled 'value' attributes depending on previous saved storage
    * I used an 'if' statement to check if the current hour is in the past, present, and future, and that applies different styles upon creation of the rows
    * Hovering over the save button changes colors for a better user experience
* When you make an input and press save, it saves into local storage

## Link
Here's a link to the [deployed page](http://rpgarde.github.io/day-scheduler/)