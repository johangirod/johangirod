const WIDTH = 1000;
const HEIGHT = 800;
const NUMBER_PARTICLES = 1500;

class Particle {
	constructor(x, y, dx, dy) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.color = randomColor();
	}
	update(mouseX, mouseY) {
		if (mouseX && mouseY) {
			const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
			if (distance < 300) {
				const angle = Math.atan2(mouseY - this.y, mouseX - this.x);
				const force = distance / 1000;
				this.dx += Math.cos(angle) * force;
				this.dy += Math.sin(angle) * force;
			} else {
				this.dx *= 0.995;
				this.dy *= 0.995;
			}
		}

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
		context.beginPath();
		context.arc(this.x, this.y, 2, 0, Math.PI * 2);
		context.fill();
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

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (event) => {
	mouseX = event.x;
	mouseY = event.y;
});
function renderParticles() {
	context.clearRect(0, 0, WIDTH, HEIGHT);
	particles.forEach((particle) => {
		particle.update(mouseX, mouseY);
		particle.draw(context);
	});
	requestAnimationFrame(renderParticles);
}

renderParticles();

canvas.addEventListener('click', (event) => {
	const { x, y } = event;
	const RADIUS = 20;
	particles = particles.concat(
		Array.from(
			{ length: 100 },
			() =>
				new Particle(
					random(x - RADIUS, x + RADIUS),
					random(y - RADIUS, y + RADIUS),
					random(-2, 2),
					random(-2, 2)
				)
		)
	);
});

function random(a, b) {
	return Math.random() * (b - a) + a;
}
