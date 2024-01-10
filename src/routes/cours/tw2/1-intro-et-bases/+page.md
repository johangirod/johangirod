<script>
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import losange from './losange.png';
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

Pour effectuer les exercices, nous utiliserons un REPL (Read-Eval-Print-Loop) qui permet d'écrire du code et de l'exécuter directement. 

Le REPL JavaScript le plus répandu est celui de la console de votre navigateur. Pour y accéder, il suffit d'ouvrir le débugueur de votre navigateur (F12) et de cliquer sur l'onglet "Console". Nous vous conseillons d'utiliser Firefox ou Chrome.

Vous pouvez utiliser un fichier séparé pour faire les exercices et une trace de votre travail, et copier le code dans la console pour l'exécuter.
 

### Exercice 1

Écrire une fonction qui, à partir de la hauteur d’un véhicule saisi par l’utilisateur, retourne la catégorie de tarification d’un véhicule se présentant au péage de l’autoroute :

-  hauteur inférieure à 2m : "véhicule léger"
-  hauteur supérieure ou égale à 2m et inférieure à 3m : "véhicule intermédiaire"
-  hauteur supérieure ou égale à 3m : "poids lourd"

Tester cette fonction avec plusieurs hauteurs de véhicules.

### Exercice 2

Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 10 jusqu'à ce que la réponse convienne.

Vous pourrez utiliser la fonction `prompt` pour demander à l'utilisateur de saisir un nombre et la fonction `alert` pour afficher un message à l'utilisateur. 

```js
const guess = prompt("Entrez un nombre entre 1 et 10");
// ...
alert("Bravo !");
```

Le nombre pourra être determiné aléatoirement à l'aide de la fonction [`Math.random`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random) et de la fonction [`Math.ceil`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

Vous aurez à utiliser la fonction [`parseInt`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) pour convertir la chaîne de caractères saisie par l'utilisateur en nombre.

### Exercice 3

Écrire un programme capable de calculer la factorielle d’un nombre donné par l’utilisateur.

### Exercice 4

Écrire une fonction qui prend en paramètre un tableau de nombres et qui retourne la moyenne de ces nombres.

Bonus : utilisez la fonction [`reduce`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) pour calculer la somme des nombres du tableau.

### Exercice 5

Soit un tableau contenant la liste des couleurs:

```js
const couleurs = ["rouge", "vert", "bleu", "jaune", "orange", "violet", "rose", "marron", "gris", "noir", "blanc", "turquoise", "indigo", "beige", "fuchsia", "cyan", "corail", "chocolat", "bordeaux", "aquamarine", "auburn", "argent", "améthyste", "ambre", "émeraude", "ivoire", "lavande", "lilas", "magenta", "mauve", "olive", "or", "pourpre", "saumon", "sépia", "sienna", "tan", "turquoise", "vermillon", "violet", "zinzolin"];
```

Écrire une fonction `searchColor(query)` qui prend en paramètre une chaîne de caractères et qui retourne un tableau contenant les couleurs qui contiennent la chaîne de caractères passée en paramètre.

Vous pourrez utiliser les fonctions [`filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) et [`includes`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) pour résoudre cet exercice.

### Exercice 6

Plutôt que d’ouvrir systématiquement une popup pour chaque affichage nous allons maintenant utiliser la méthode `write` de l’objet `document` pour écrire directement dans la fenêtre du navigateur.

1. Écrire une fonction qui dessine une ligne d’étoiles `*` (le nb d’étoiles sera un paramètre).
2. Écrire une fonction qui dessine un triangle composé d’étoiles, c’est-à-dire une succession de lignes d’étoiles de longueur 1 puis 2 puis 3 et ainsi jusqu’à n. Le passage à la ligne se fera à l’aide de la balise HTML adéquate (`<br/>`).
3. Écrire une fonction qui dessine un carré de côté n, le bord de ce carré est composé d’étoiles,
l’intérieur de « - ».
1. Écrire une fonction qui dessine un losange creux, dont le bord est signifié par des étoiles. Chaque coté de ce losange sera donc dessiné avec n étoiles. Chaque « blanc » sera représenté par un espace. Voici le rendu pour n=4 : ![Un losange de 4 étoile de côté]({losange})