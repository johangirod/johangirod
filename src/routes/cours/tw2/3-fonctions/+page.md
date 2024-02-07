<script>
	import Message from '$lib/Message.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

Dans ce TP, nous allons nous concentrer sur les fonctions et la manipulation de tableau en JavaScript. Nous utiliserons des tests pour vérifier que nos fonctions sont correctes. Le but est de se familiariser avec ces aspects, afin d'attaquer les prochains TP avec plus de sérénité.

### Mise en place

Ce TP est disponible sur gitlab. La première étape est de le cloner sur votre machine, c'est à dire de le télécharger avec git. Ouvrez un terminal et tapez la commande suivante :

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-3.git
```

Utilisez les identifiants de votre compte universitaire pour vous connecter.

> _Si cela ne fonctionne pas, vous pouvez vous rendre sur le lien suivant : https://sources.univ-jfc.fr/techno-web-2/tp-3, cliquer sur le bouton « Code » et télécharger le fichier zip._

Ouvrez le dossier `tp-3` dans votre éditeur de code. Vous pouvez le faire avec la commande suivante :

```bash
cd tp-3
code .
```

#### Tests

Dans le terminal, lancez les tests avec la commande suivante :

```bash
sh test.sh
```

Tout est en rouge, c'est normal, les tests ne passent pas. Au fur et à mesure que vous compléterez les exercices, les tests passeront au vert.

Vous pouvez laisser le terminal ouvert, les tests se relanceront automatiquement à chaque modification de votre code.

<Message>

<div slot='title'>Pas de navigateur ?</div>

Le JavaScript que vous allez écrire dans ce TP ne sera pas exécuté dans un navigateur. Nous allons utiliser NodeJS pour exécuter notre code, et le framework vitest pour faire tourner les tests.

Dans la pratique, vous n'aurez pas besoin de vous soucier de cet aspect, vous pouvez vous concentrer sur l'écriture de votre code, c'est le même JavaScript que vous utilisez dans le navigateur.

</Message>

**Important** : les trois exercices sont indépendants, et de difficulté croissante. Si vous bloquez sur un exercice, vous pouvez passer à l'exercice suivant. N'hésitez pas à demander de l'aide si vous êtes bloqué, ou si un énoncé n'est pas clair.

### Exercice 1 : fonctions

Ouvrez le fichier `exercice-1.js` dans votre éditeur de code. Il contient plusieurs fonctions à compléter. Chaque fonction a une description de ce qu'elle doit faire (au dessus). Le but de l'exercice est d'implémenter les fonctions (écrire le code) pour que les tests passent.

Chaque fonction est testée dans le fichier `exercice-1.test.js`. La fonction est correcte si le test passe (en vert).

<Message>
<div slot='title'>Description en JSDoc</div>

Les fonctions ont une description en JSDoc. C'est une convention pour documenter les fonctions en JavaScript. Cela permet d'avoir une description de la fonction directement dans le code, et d'avoir une description qui s'affiche au survol dans l'éditeur de code.

La première partie contient une description de ce que fait la fonction. Ensuite, on a la liste des paramètres, avec leur type et leur description. Enfin, on a la description de la valeur de retour (si applicable), et eventuellement des exemples d'utilisation.

</Message>

### Exercice 2 : manipulation de tableau

Complétez le code du fichier `exercice-2.js` pour que tous les tests de l'exercice 2 passent.

### Exercice 3 : fonctions de manipulation du DOM

Complétez le code du fichier `exercice-3.js` pour que tous les tests de l'exercice 3 passent.
