<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import particles from './canvas.png';
</script>

<Reveal>
    <Slides/>
</Reveal>

<!-- TODO : un memory -->

## TP-6 : Un système de particules

Nous allons implémenter un système de particules en JavaScript, grâce à la balise `canvas`.

Voici une capture d'écran de ce que nous allons réaliser :

<div style="background-color: black">

![]({particles})

</div>

Bien sûr dans notre cas, les particules se déplaceront.

### 1. Création du canvas

Le `canvas` est une balise HTML qui permet de dessiner des graphiques en 2D ou en 3D. Il est très utilisé pour les jeux vidéo ou les animations.

Dans un fichier `index.js`, créez deux constantes `WIDTH` et `HEIGHT` qui définiront la taille du canvas. Vous pouvez les initialiser à 800 et 600 par exemple. Créez un élément canvas avec ces dimensions et ajoutez-le au `body` de la page.

Pour mieux voir les particules, vous pouvez ajouter un fond noir au canvas, dans un fichier `style.css` :

```css
canvas {
	background-color: black;
}
```

### 2. Création de la classe `Particle`

Créer une classe `Particle` qui contiendra les méthodes suivantes :

- `constructor(x, y, dx, dy, color)` : initialise une nouvelle particule avec les paramètres suivants :

  - `x` : la position en x de la particule
  - `y` : la position en y de la particule
  - `dx` : la vitesse en x de la particule
  - `dy` : la vitesse en y de la particule

  Cette méthode initialisera également la couleur de la particule. Pour générer une couleur aléatoire, vous pouvez utiliser la fonction suivante :

  ```javascript
  function randomColor() {
  	return `hsl(${Math.random() * 360}, ${50 + Math.random() * 50}%, ${50 + Math.random() * 50}%)`;
  }
  ```

- `update()` : met à jour la position de la particule en fonction de sa vitesse
  Lorsque la particule atteint le bord du canvas, elle doit rebondir.

- `draw(ctx)` : dessine la particule sur le canvas
  Pour la couleur, vous pouvez utiliser la méthode `fillStyle` du contexte 2D.
  Vous pouvez utiliser la méthode `fillRect` du contexte 2D du canvas (ctx) pour dessiner un rectangle de 2 pixels de côté.

### 3. Création du système de particules

Initialisez un tableau de particules dans le fichier `index.js`. Ce tableau sera initialisé avec un nombre de particules spécifié dans une constante `PARTICLE_COUNT`.

Pour cela, on crée une fonction `renderParticles` qui dessinera toutes les particules du tableau. Elle appellera la méthode `update` de chaque particule pour les faire bouger, puis la méthode `draw` pour les dessiner.

Cette fonction devra être appellée à intervalles réguliers pour animer les particules. Vous pouvez utiliser la fonction `requestAnimationFrame` pour cela. Elle est plus adaptée que `setInterval` pour les animations, car elle est synchronisée avec le taux de rafraîchissement du navigateur.

### 4. Explosion au clic

Ajoutez un écouteur d'événement sur le canvas pour détecter les clics de souris. Lorsque l'utilisateur clique, une explosion de particules doit se produire à l'endroit du clic.

Pour cela, vous pouvez ajouter une méthode `explode(x, y)` qui ajoutera des particules autour du point `(x, y)`.

### 5. Champs de force gravitationnel

Ajoutez un champ de force gravitationnel autour de la souris. Lorsque l'utilisateur bouge la souris, les particules doivent être repoussées par la souris.

Pour cela, vous devrez modifier la vitesse par rapport à la position de souris.

Vous pouvez utiliser la formule suivante :

```js
const angle = Math.atan2(mouseY - this.y, mouseX - this.x);
this.dx += Math.cos(angle);
this.dy += Math.sin(angle);
```

- Faire en sorte que le champs de force ne s'applique qu'à une certaine distance de la souris.
- Faire en sorte que les particules hors de cette distance rallentissent progressivement.
- Faire en sorte de pouvoir paramétrer la force du champs de force.
- Faire en sorte que le champs de force dépende de la distance à la souris.
- Modifier les différents paramètres jusq'à obtenir un résultat qui vous plait.

## Corrigé

<Solution>

```javascript
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
	update(mouseX, mouseY) {
		this.dx += 1 / (mouseX - this.x) ** 2;
		this.dy += 1 / (mouseY - this.y) ** 2;
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

let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (event) => {
	mouseX = event.x;
	mouseY = event.y;
});
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
```

</Solution>
