var array = [
{
  "name": "linkedin",
  "display": "linkedin.com/in/justjiffy",
  "href": "https://www.linkedin.com/in/justjiffy/"
}, {
  "name": "github",
  "display": "github.com/justjiffy",
  "href": "https://github.com/justjiffy"
},
{
  "name": "projects",
  "display": "project archives", 
  "href": "view project gallery" 
}]
//get stuff
var body = document.getElementById('body');
var canvas = document.getElementById('canvas');

window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('oreintationchange', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  draw();
}

var ctx = canvas.getContext('2d');
var length = 8;

// current status of the light switch, 0 is off
var currentStatus = 0;

// tracking mousedown or up... 
var mousedown = 0;
document.addEventListener('mousedown', function() { console.log(mousedown); mousedown++ });
document.addEventListener('mouseup', function() { console.log(mousedown); mousedown-- });


if (mousedown == 0) { resizeCanvas(); }

canvas.addEventListener('click', setStyles);   


function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if (currentStatus == 0) {
    drawChain(length);
  } else  {
    drawChain(length+6);
  }
}

function drawChain(length) {
  ctx.beginPath();
  for (i=0; i<length; i++) {          
    ctx.arc(window.innerWidth - 40, (i*5)*2, 4, 0, 2 * Math.PI);
    if (i==length-1) {
      drawBell(length);
    }
  }
  ctx.fillStyle = "gold";
  ctx.fill();
  ctx.closePath();
}

function drawBell(length) {
  var w = window.innerWidth;
  ctx.moveTo(w-30, length*10+15);
  ctx.bezierCurveTo(w-35,length*10-5, w-35, length*10-5, w-40, length*10-5);
  ctx.moveTo(w-40, length*10-5);
  ctx.bezierCurveTo(w-45, length*10-5, w-45, length*10-5, w-50, length*10+15);
  ctx.lineTo(w-30, length*10+15);
  ctx.fillStyle = "gold";
  ctx.fill();
}

function setStyles() {
 if (currentStatus == 0) {
    body.classList.add('light');
    currentStatus++
  } else {
    body.classList.remove('light');
    currentStatus--
  }
 draw();
}

//for on click on portolio links
function showLink(text) {
  var match = array.find(function(link) {
    return link.name == text;
  })
  var a = document.createElement('a');
  a.href = match.href;
  a.id = "test";
  a.classList.add('fly-start');
  a.target = "_blank";
  a.innerHTML = match.display;
  var node = document.getElementById('desc');
  node.removeChild(node.firstChild);
  node.append(a);
  document.getElementById('test').classList.add('fly-in');
  
}

var links = document.getElementsByTagName('h3');
links = Array.from(links)

links.forEach(function(link) {
  link.addEventListener('click', function() { showLink(link.id) });
  link.addEventListener('mouseenter', function() { showLink(link.id) });
})

var nameLetters = document.getElementsByTagName('span');
    nameLetters = Array.from(nameLetters);

    nameLetters.forEach(function(letter) {
      letter.classList.add('lift')
    })