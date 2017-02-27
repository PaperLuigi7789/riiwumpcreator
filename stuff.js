//setup of things
function audioFade() {
    var backgroundAudio=document.getElementById("bgm");
	backgroundAudio.volume = 0;
	$(backgroundAudio).animate({volume: 0.4}, 2000);
	backgroundAudio.setAttribute("oncanplay", "#");
}

function openTab(name) {
    var i;
    var x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(name).style.display = "block";  
}

var canvas = document.querySelector( 'canvas' ),
    c = canvas.getContext( '2d' ),
    width = 400;
    height = 385;

canvas._intervalId = setInterval(tryToDraw, 1000 / 60);

canvas.width = width;
canvas.height = height;

var link = document.getElementById('savebutton');
	link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "wumpus.png";
}, false);

function polyAudio(path, copies) {
  var elems = [], index = 0
  for (var i = 0; i < 16; i++) elems.push(new Audio(path))
  return {
    play: function() {
      if (window.chrome) elems[index].load()
      elems[index].play()
      index = (index + 1) % copies
    }
  }
}

var resetSnd = polyAudio("snd/reset.mp3", 10);
var pop = polyAudio("snd/pop.mp3", 10);
var moveU = polyAudio("snd/moveU.mp3", 10);
var moveD = polyAudio("snd/moveD.mp3", 10);
var Mclick = polyAudio("snd/click.mp3", 10);
var hover = polyAudio("snd/hover.mp3", 10);

// begin giant table of wump body part outcomes
var wumpbody = new Image();
wumpbody.src = 'img/wump-body.png';

var wumpear = new Image();
wumpear.src = 'img/wump-ear.png';

var earX = 0;
var earY = 0;
 
var wumpeye = new Image();
wumpeye.src = 'img/wump-eye.png';

var eyeX = 0;
var eyeY = 0;
 
var wumpmouth = new Image();
wumpmouth.src = 'img/wump-mouth.png';

var mouthX = 0;
var mouthY = 0;
 
var wumpnose = new Image();
wumpnose.src = 'img/wump-nose.png';

var noseX = 0;
var noseY = 0;

var wumpaccess = new Image();
wumpaccess.src = 'img/null.png';

var accessX = 0;
var accessY = -35;
 
 var loaded=0;

wumpbody.onload = function () 
{
    loaded++; //does the same as loaded+=1
}
 
wumpear.onload = function () 
{
    loaded++; //does the same as loaded+=1
}

wumpeye.onload = function () 
{
    loaded++; //does the same as loaded+=1
}
 
wumpmouth.onload = function ()
{
    loaded++;
}

wumpnose.onload = function () 
{
    loaded++; //does the same as loaded+=1
}

wumpaccess.onload = function () 
{
    loaded++; //does the same as loaded+=1
}

function tryToDraw()
{
    if (loaded==6) //the total amount of images
    {
		c.clearRect(0,0,width,height);
		c.drawImage(wumpbody, canvas.width / 2 - wumpbody.width / 2, canvas.height / 2 - wumpbody.height / 2);
		c.drawImage(wumpear, (canvas.width / 2 - wumpear.width / 2) + earX, (canvas.height / 2 - wumpear.height / 2) + earY);
		c.drawImage(wumpeye, (canvas.width / 2 - wumpeye.width / 2) + eyeX, (canvas.height / 2 - wumpeye.height / 2) + eyeY);
		c.drawImage(wumpmouth, (canvas.width / 2 - wumpmouth.width / 2) + mouthX, (canvas.height / 2 - wumpmouth.height / 2) + mouthY);
		c.drawImage(wumpnose, (canvas.width / 2 - wumpnose.width / 2) + noseX, (canvas.height / 2 - wumpnose.height / 2) + noseY);
		c.drawImage(wumpaccess, (canvas.width / 2 - wumpaccess.width / 2) + accessX, (canvas.height / 2 - wumpaccess.height / 2) + accessY);
    }
	if (loaded > 6) {
		loaded = 6;
	}
}

function reset() {
resetSnd.play();
wumpbody.src = 'img/wump-body.png';
wumpear.src = 'img/wump-ear.png';
earX = 0;
earY = 0;
wumpeye.src = 'img/wump-eye.png';
eyeX = 0;
eyeY = 0;
wumpmouth.src = 'img/wump-mouth.png';
mouthX = 0;
mouthY = 0;
wumpnose.src = 'img/wump-nose.png';
noseX = 0;
noseY = 0;
wumpaccess.src = 'img/null.png';
accessX = 0;
accessY = -35;
}