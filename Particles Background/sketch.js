let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-canvas');
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background('#222');
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].display();
    }
}

class Particle {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.acceleration = createVector(-0.001, 0.01);
        this.color = color(random(255), random(255), random(255), 100);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        if (this.position.x < 0 || this.position.x > width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.position.y < 0 || this.position.y > height) {
            this.velocity.y = -this.velocity.y;
        }
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, 10, 10);
    }
}
