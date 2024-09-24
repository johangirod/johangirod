function afficherCarte(cartes: Array<Carte>): void {
	document.querySelector('.carte-container')?.remove();
	const container = document.createElement('div');
	container.classList.add('carte-container');
	document.body.appendChild(container);

	cartes.forEach((carte) => {
		const button = document.createElement('button');
		button.classList.add('carte');
		button.textContent = carte.visible ? carte.symbole : ' ';
		container.appendChild(button);
	});
}

type Emoji = '🍎' | '🍌' | '🍒' | '🍓' | '🍇' | '🍉' | '🍊' | '🍍';
type Carte = {
	symbole: Emoji;
	visible: boolean;
};
const symboles: Array<Emoji> = ['🍎', '🍌', '🍒', '🍓', '🍇', '🍉', '🍊', '🍍'];
function creerJeu(): Array<Carte> {
	const cartes: Array<Carte> = [];
	symboles.forEach((symbole) => {
		cartes.push({ symbole, visible: false });
		cartes.push({ symbole, visible: false });
	});
	return cartes.sort(() => Math.random() - 0.5);
}

const cartes = creerJeu();
afficherCarte(cartes);

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

function attendre(ms: number): Promise<false> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(false), ms);
	});
}

async function boucleJeu(cartes: Array<Carte>): Promise<boolean> {
	while (!cartes.every((carte) => carte.visible)) {
		afficherCarte(cartes);

		const index1 = await clickOnCard();
		const carte1 = cartes[index1];
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
	return true;
}

async function main(): Promise<void> {
	const cartes = creerJeu();

	// Cette promesse est résolu dès que l'une des deux promesses se termine.
	const gagné = await Promise.race([attendre(30000), boucleJeu(cartes)]);

	// On affiche les cartes restantes
	cartes.forEach((carte) => (carte.visible = true));
	afficherCarte(cartes);

	const message = document.createElement('div');
	message.textContent = gagné ? 'Bravo !' : 'Dommage, tu feras mieux la prochaine fois.';

	const button = document.createElement('button');
	button.textContent = 'Rejouer';

	button.addEventListener('click', main);
}

main();
