<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import Reveal from '$lib/Reveal.svelte';
  import Slides from './slides.svelte';
  import { showSolution } from '$lib/showSolution.ts';
  showSolution.set(true);
</script>

<svelte:head>

<title>Promise et fonctiona async - TW3 - Johan Girod</title>
</svelte:head>

<Reveal>
  <Slides/>
</Reveal>

## TP Memory (suite)

On continue le jeu de memory en ajoutant des fonctionnalités asynchrones.

1. Créer une fonction asynchrone `boucleJeu`. La fonction doit :
   - attendre que l'utilisateur clique sur une carte
   - retourner la carte cliquée
   - répéter ces étapes jusqu'à ce que toutes les cartes soient retournées.

   On pourra utiliser la fonction suivante :

   ```typescript
   /**
    * Renvoie une `Promise` qui `resolve` quand une carte a été cliquée. Le contenu de la Promise est l'index de cette carte dans le tableau.
    */
   type CardIndex = number;
   async function clickOnCard(): Promise<CardIndex> {
   	return new Promise((resolve) => {
   		const listener = (event: MouseEvent) => {
   			console.log(event.target);
   			if (!event.target.classList.contains('carte')) {
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

   Cette fonction retourne une promesse resolvant sur la l'index de la carte cliqué. On peut donc l'utiliser dans une fonction asynchrone pour attendre que l'utilisateur clique sur une carte.

   ```typescript
   async function boucleJeu() {
   	// à compléter ...
   	const index = await clickOnCard();
   	console.log(`Carte cliquée : ${index}`);
   	// à compléter ...
   }
   boucleJeu();
   ```

   <Solution >

   ```typescript
   async function boucleJeu(cartes: Array<Carte>): Promise<boolean> {
   	while (cartes.some((carte) => !carte.visible)) {
   		afficherCarte(cartes);
   		const index = await clickOnCard();
   		carte1 = cartes[index];
   		carte1.visible = true;
   	}
   }
   ```

   </Solution>

2. Modifier la fonction ci-dessus pour ajouter le comportement suivant :

   > Si deux cartes sont retournées, les cacher après une seconde si elles ne sont pas identiques.

   <Solution>

   ```typescript
   async function boucleJeu(cartes: Array<Carte>): Promise<boolean> {
   	while (!cartes.every((carte) => carte.visible)) {
   		afficherCarte(cartes);

   		const index1 = await clickOnCard();
   		const carte1 = cartes[index];
   		carte1.visible = true;
   		afficherCarte(cartes);

   		const index2 = await clickOnCard();
   		const carte2 = cartes[index2];
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

3. Créer une fonction principale asynchrone `main`. Le jeu se termine si toutes les cartes sont retournées en moins de 30 secondes, ou si le joueur a gagné. Lorsque le jeu se termine :
   - retourner face visible toutes les cartes restantes
   - afficher un message de félicitations si le joueur a gagné, ou un message d'encouragement sinon.
   - afficher un bouton pour rejouer.

   > On pourra utiliser `Promise.race`.

   <Solution>

   ```typescript
   async function main(): Promise<void> {
   	const cartes = creerJeu();

   	// Cette promesse est résolu dès que l'une des deux promesses se termine.
   	await Promise.race(attendre(30000), boucleJeu(cartes));

   	// On affiche les cartes restantes
   	cartes.forEach((carte) => (carte.visible = true));
   	afficherCarte(cartes);

   	const message = document.createElement('div');
   	message.textContent = gagne ? 'Bravo !' : 'Dommage, tu feras mieux la prochaine fois.';

   	const button = document.createElement('button');
   	button.textContent = 'Rejouer';

   	button.addEventListener('click', main);
   }

   main();
   ```

   </Solution>

4. Faire en sorte d'afficher le nombre de secondes restantes avant la fin du jeu.
