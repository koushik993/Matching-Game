# Matching-Game

In this game, there are matching smiley faces on the left and right sides of the screens with the left side having an extra face. Clicking on the extra smiley face will generate a net set of faces. Clicking onthe extra face again, will generate another new set of faces and so on. Clicking on any of the matching smiley faces on the left side will end the game. 

Project working :

index.html -  This page has the html code for craeting the left and right divisions on the screen. It also links to the css and javascript files.

my_style.css -  It consists of styling for the div's, left and right half of the screens that contain smiley faces, paragraph and h1 tags. A line dividing the two halves of the screen is also created.

match.js - 

Create an image element and depending on the size of the image and the div generate five smiley faces at random positions using top and left. Add each image to the left div using a loop.
Clone the node , remove the last child of the left div and add the node to the right div. 
Add an event handler when the extra face on the left div is clicked. Remove all the faces on the left and right div  and generate a new set of faces on both divs.
Add another event handler for the body tag when a matching smiley face is clicked. An alert should pop up with a message saying game over. There should be no other changes on the screen. 