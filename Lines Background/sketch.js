var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lines = [];
var numLines = Math.floor(Math.random() * 100) + 50;

for (var i = 0; i < numLines; i++) {
  var length = Math.floor(Math.random() * 200) + 50;
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  var angle = Math.random() * 2 * Math.PI;
  var size = Math.floor(Math.random() * 4) + 1;
  lines.push({
    x1: x,
    y1: y,
    x2: x,
    y2: y,
    vx: Math.cos(angle) * size,
    vy: Math.sin(angle) * size,
    length: length,
    size: size,
    color: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",1)"
  });
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < numLines; i++) {
    var line = lines[i];
    line.x2 += line.vx;
    line.y2 += line.vy;
    if (Math.abs(line.x2 - line.x1) >= line.length || Math.abs(line.y2 - line.y1) >= line.length) {
      line.vx *= -1;
      line.vy *= -1;
    }
    drawLine(line.x1, line.y1, line.x2, line.y2, line.color, line.size);
  }
  requestAnimationFrame(update);
}

function drawLine(x1, y1, x2, y2, color, size) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

update();
