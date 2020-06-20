var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var image = new Image();
image.src = "https://cdn.cnn.com/cnnnext/dam/assets/190911121541-barack-obama-super-tease.jpg";

var curSides = 8;

function drawPolygon(sides) {

  var perAngle = 360 / sides;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  ctx.beginPath();
  ctx.moveTo(450, 300);

  for (var i = 1; i < sides; i++) {

    ctx.lineTo((Math.sin(perAngle * i) * 150) + 300, (Math.cos(perAngle * i) * 150) + 300);

  }

  ctx.closePath();
  ctx.stroke();
  ctx.clip();

  ctx.drawImage(image, 100, 150, 400, 300);

  ctx.restore();

}

function upTris() {

  curSides++;
  drawPolygon(curSides);

}

function downTris() {

  curSides--;
  drawPolygon(curSides);

}

drawPolygon(curSides);
