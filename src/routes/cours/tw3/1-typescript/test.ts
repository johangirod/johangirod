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
