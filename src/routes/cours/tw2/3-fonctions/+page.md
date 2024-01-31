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

Ce TP est disponible sur gitlab. Vous pouvez le cloner avec la commande suivante

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-3.git
```

Utilisez les identifiants de votre compte universitaire pour vous connecter. Si cela ne fonctionne pas, vous pouvez vous rendre sur le lien suivant : https://sources.univ-jfc.fr/techno-web-2/tp-3, cliquer sur le bouton « Code » et télécharger le fichier zip.

Ouvrez le dossier `tp-3` dans votre éditeur de code (VSCode par exemple).

Dans le terminal, lancez les tests avec la commande suivante :

```bash
sh test.sh
```

Tout est en rouge, c'est normal, les tests ne passent pas. Au fur et à mesure que vous compléterez le code, les tests passeront au vert.

<Message>

<div slot='title'>Pas de navigateur ?</div>

Le JavaScript que vous allez écrire dans ce TP ne sera pas exécuté dans un navigateur. Nous allons utiliser NodeJS pour exécuter notre code, et le framework vitest pour faire tourner les tests.

Dans la pratique, vous n'aurez pas besoin de vous soucier de cet aspect, vous pouvez vous concentrer sur l'écriture de votre code, c'est le même JavaScript que vous utilisez dans le navigateur.

</Message>

### Exercice 1

Ouvrez le fichier `exercice1.js` dans votre éditeur de code, et complétez le code pour que tous les tests passent de l'exercice 1 passent.

### Exercice 2

Complétez le code du fichier `exercice2.js` pour que tous les tests de l'exercice 2 passent.
