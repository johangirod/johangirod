<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import Reveal from '$lib/Reveal.svelte';
  import Slides from './slides.svelte';
</script>

<svelte:head>

<title>Promise et fonctiona async - TW3 - Johan Girod</title>
</svelte:head>

<Reveal>
  <Slides/>
</Reveal>

## TP (suite)

On continue le jeu de memory en ajoutant des fonctionnalités asynchrones.

1. Créer une fonction asynchrone `boucleJeu`. La fonction doit :

   - attendre que l'utilisateur clique sur une carte
   - retourner la carte cliquée
   - attendre que l'utilisateur clique sur une autre carte
   - si les deux cartes retournées sont identiques, elles restent retournées, sinon elles sont cachées à nouveau après un court délai (3s).
   - répéter ces étapes jusqu'à ce que toutes les cartes soient retournées.

   On pourra utiliser la fonction suivante :

   ```typescript
   type CardIndex = number;
   /**
    * Attend qu'une carte soit cliquée et retourne son index dans le tableau.
    */
   async function clickOnCard(): Promise<CardIndex> {
   	return new Promise((resolve) => {
   		const listener = (event: MouseEvent) => {
   			if (!event.target.contains('carte')) {
   				return;
   			}
   			const index = Array.from(event.target.parentNode.children).indexOf(
   				event.target as HTMLElement
   			);
   			resolve(index);
   			document.removeEventListener('click', listener);
   		};
   		document.addEventListener('click', listener);
   	});
   }
   ```

   Vous pouvez tester cette fonction fonctionne en l'appelant dans une fonction async :

   ```typescript
   function main() {
   	const index = await clickOnCard();
   	console.log(`Carte cliquée : ${index}`);
   }
   main();
   ```

   <Solution code="482">

   ```typescript
   async function boucleJeu(cartes: Array<Carte>): Promise<boolean> {
   	let carte1: Carte | undefined;
   	let carte2: Carte | undefined;

   	while (cartes.some((carte) => !carte.visible)) {
   		afficherCarte(cartes);
   		const index1 = await clickOnCard();
   		carte1 = cartes[index1];
   		carte1.visible = true;

   		afficherCarte(cartes);
   		const index2 = await clickOnCard();
   		carte2 = cartes[index2];
   		carte2.visible = true;

   		if (carte1.symbole !== carte2.symbole) {
   			await attendre(1000);
   			carte1.visible = false;
   			carte2.visible = false;
   		}
   	}
   }
   ```

   </Solution>

2. Créer une fonction principale asynchrone `main` qui retourne `true` si le joueur a gagné, `false` sinon. Le joueur gagne si toutes les cartes sont retournées en moins de 30 secondes. On pourra utiliser `Promise.race`. Tester votre implémentation en lançant la fonction avec `jouerJeu()`.

   <Solution code="293">

   ```typescript
   async function jouerJeu(): Promise<boolean> {
   	const cartes = creerJeu();

   	await Promise.race(attendre(30000), boucleJeu(cartes));
   	return cartes.every((carte) => carte.visible);
   }
   ```

   </Solution>

3. A la fin du jeu, enlever toutes les cartes du plateau et afficher un message de félicitation si le joueur a gagné, ou un message d'encouragement sinon, avec un bouton pour rejouer.

   <Solution code="293">

   ```typescript
   async function main(): Promise<void> {
   	const gagne = await jouerJeu();
   	const message = document.createElement('div');
   	message.textContent = gagne ? 'Bravo !' : 'Dommage, tu feras mieux la prochaine fois.';
   	const button = document.createElement('button');
   	button.textContent = 'Rejouer';
   	button.addEventListener('click', main);

   	document.body.appendChild(message);
   	document.body.appendChild(button);
   }
   ```

   </Solution>

4. Faire en sorte d'afficher le nombre de secondes restantes avant la fin du jeu.
