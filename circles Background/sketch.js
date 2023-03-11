var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var circles = [];
var numCircles = Math.floor(Math.random() * 20) + 300;

for (var i = 0; i < numCircles; i++) {
  var radius = Math.floor(Math.random() * 200) + 50;
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  var vx = (Math.random() - 0.5) * 10;
  var vy = (Math.random() - 0.5) * 10;
  var color = "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ",0.5)";
  var isIntersecting = false;
  for (var j = 0; j < circles.length; j++) {
    var circle = circles[j];
    var dx = circle.x - x;
    var dy = circle.y - y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < circle.radius + radius) {
      isIntersecting = true;
      break;
    }
  }
  if (!isIntersecting) {
    circles.push({
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      radius: radius,
      color: color
    });
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.x += circle.vx;
    circle.y += circle.vy;
    if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
      circle.vx *= -1;
    }
    if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
      circle.vy *= -1;
    }
    drawCircle(circle.x, circle.y, circle.radius, circle.color);
  }
  requestAnimationFrame(update);
}

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

update();
