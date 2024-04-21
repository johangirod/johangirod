const WIDTH = 1000;
const HEIGHT = 800;
const NUMBER_PARTICLES = 100;

class Particle {
	constructor(x, y, dx, dy) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.color = randomColor();
	}
	update() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.x < 0 || this.x > WIDTH) {
			this.dx = -this.dx;
		}
		if (this.y < 0 || this.y > HEIGHT) {
			this.dy = -this.dy;
		}
	}
	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, 3, 3);
	}
}

class RandomParticle extends Particle {
	constructor() {
		super(
			Math.random() * WIDTH,
			Math.random() * HEIGHT,
			Math.random() * 3 - 1,
			Math.random() * 3 - 1
		);
	}
}

function randomColor() {
	return `hsl(${Math.random() * 360}, ${50 + Math.random() * 50}%, ${50 + Math.random() * 50}%)`;
}

const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

document.body.appendChild(canvas);
const context = canvas.getContext('2d');
let particles = Array.from({ length: NUMBER_PARTICLES }, () => new RandomParticle());

function renderParticles() {
	context.clearRect(0, 0, WIDTH, HEIGHT);
	particles.forEach((particle) => {
		particle.update();
		particle.draw(context);
	});
	requestAnimationFrame(renderParticles);
}

renderParticles();

canvas.addEventListener('click', (event) => {
	console.log('click');
	const { x, y } = event;
	const RADIUS = 10;
	particles = particles.concat(
		Array.from(
			{ length: 100 },
			() =>
				new Particle(
					random(x - RADIUS, x + RADIUS),
					random(y - RADIUS, y + RADIUS),
					random(-1, 1) * 2,
					random(-1, 1) * 2
				)
		)
	);
});

function random(a, b) {
	return Math.random() * (b - a) + a;
}
