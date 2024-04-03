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
![]({particles})

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
