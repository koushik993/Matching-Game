var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
	for(var i=0; i< 5; i++) {
		var img = document.createElement("img");
		img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		var top = Math.floor(Math.random() * 400);
		var left = Math.floor(Math.random() * 400);
		img.style.top = top + 'px';
		img.style.left = left + 'px';
		theLeftSide.appendChild(img);
		
		}
	leftSideImages = theLeftSide.cloneNode(true);
	leftSideImages.removeChild(leftSideImages.lastChild);
	theRightSide.appendChild(leftSideImages);
		
	theLeftSide.lastChild.onclick = 
	function nextLevel(event){
		event.stopPropagation();
		while (theLeftSide.firstChild)
			theLeftSide.removeChild(theLeftSide.firstChild);
		while (theRightSide.firstChild)
			theRightSide.removeChild(theRightSide.firstChild);
		numberOfFaces += 5;
		generateFaces();
	}
		
		
	theBody.onclick = function gameOver() {
	alert("Game Over!");
	theBody.onclick = null;
	theLeftSide.lastChild.onclick = null;
	}

		





}

