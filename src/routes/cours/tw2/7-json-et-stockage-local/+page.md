<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
  import { showSolution } from '$lib/showSolution.ts';
  showSolution.set(true);
</script>

<Reveal>
    <Slides/>
</Reveal>

## TP 7 : Quizz Creator

Nous allons créer une application web qui permet de créer des quizz, et d'y jouer.

Notre application sera composée de deux parties :

- Une page de création de quizz `/create`
- Une page de jeu `/play`

Cela veut dire qu'il y aura deux fichiers HTML, un pour chaque page, et un fichier JavaScript pour chaque page.

### Création du projet

Cloner le repo du projet avec la commande suivante :

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp7-quizzcreator.git
```

Le projet contient déjà les fichiers suivants :

- `create.html` : la page de création de quizz
- `style.css` : le fichier de style
- `create.js` : le fichier JavaScript de la page de création

Pour tester le projet, vous pouvez installer l'exension `Live Server` dans Visual Studio Code.

Faites un clic droit sur le fichier `create.html` et cliquez sur `Open with Live Server`. La page devrait s'ouvrir dans votre navigateur.

### Page de création de quizz

La page de création de quizz contiendra un formulaire qui permettra de saisir les questions et les réponses possibles.

Ouvrez le fichier `create.html` et prenez un temps pour vous familiariser avec le code HTML.

<Message> <div slot="title">Structure des formulaires</div>

Dans ce formulaire, nous utilisons plusieurs éléments importants pour l'accessibilité et l'experience utilisateur en général :

- `<label>` associé aux champs avec l'attribut `for` qui correspond à l'id du champ
  `<fieldset>` qui regroupe les champs liés avec une `<legend>` qui explique le groupe
- L'attribut `required` qui indique que le champ est obligatoire
- Des boutons radio (`<input type="radio">` : <input type="radio">) pour selectionner une réponse parmi plusieurs
- Un bouton de type `submit` pour envoyer le formulaire

</Message>

A votre avis, quelles sont les fonctionnalités que nous devons implémenter pour cette page ?

#### 1. Récupération des données du formulaire

Pour cela, vous allez ajouter un écouteur d'événement sur le formulaire pour intercepter l'événement de soumission.

```js
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	console.log(formData);
	console.log(formData.get('question'));
});
```

A quoi ressemble l'objet `formData` ? Comment est-il créé à votre avis ? Que fait `formData.get` ?

#### 2. Stockage des données

Les questions vont être stockées sous forme d'un tableau d'objets dans le `localStorage`.

Chaque question est représentée par un objet avec la structure suivante :

```json
{
	"text": "Quelle est la capitale de la France ?",
	"answers": ["Paris", "Londres", "Berlin", "Madrid"],
	"correct": 0
}
```

Faire en sorte que les questions soient stockées dans le `localStorage` sous la clé `questions`, à chaque fois qu'une question est ajoutée.

Vous devrez penser à :

- Récupérer les questions déjà enregistrées
- Ajouter la nouvelle question
- Stocker le tout dans le `localStorage`
- Réinitialiser le formulaire après l'ajout de la question
- Gérer le cas où il n'y a pas de questions déjà existantes

N'oubliez pas, pour stocker un objet dans le `localStorage`, vous devez le transformer en chaîne de caractères avec `JSON.stringify`.

<Solution showAnyway>

```js
const questions = JSON.parse(localStorage.getItem('questions')) ?? [];
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page
  const data = new FormData(form); // Récupère les données du formulaire
  const question = {
    question: data.get('question'),
    correct: Number.parseInt(data.get('correct')),
    answers: [data.get('answer1'), data.get('answer2'), data.get('answer3'), data.get('answer4')]
  }
  questions.push(question);
  localStorage.setItem('questions', JSON.stringify(questions)); // Stocke les questions dans le localStorage
  form.reset(); // Réinitialise le formulaire
});
```

</Solution>

#### 3. Affichage des questions

Nous souhaitons afficher les questions précédemment ajoutées sous forme de liste en dessous du formulaire.

Pour cela, vous allez créer une fonction `renderQuestions` qui sera appelée à chaque fois qu'une question est ajoutée avec la liste des questions en paramètre.

```js
/**
 * Affiche les questions dans la liste
 * @param {Array<string>} questions - Les questions à afficher
 */
function renderQuestion(questions)
```

<Solution>

```js
// à appeler juste avant form.reset()
function renderQuestion(questions) {
  const list = document.querySelector('#questions-container');
  list.innerHTML = '';
  questions.forEach((question, index) => {
    const item = document.createElement('li');
    item.textContent = `${question.question}`;
    list.appendChild(item);
  });
}

```

</Solution>

### Page de jeu

La page de jeu contiendra un formulaire qui permettra de répondre aux questions. Les questions seront posées une par une.

Pour cela, vous allez :

- Créer un fichier `play.html`
- Créer un fichier `play.js`
- Créer un formulaire HTML dans `play.html` avec un champ pour la question et des boutons radio pour les réponses
- Récupérer cinq questions aléatoires parmis celles stockées dans le `localStorage`.
- Afficher la première question
- Gérer la soumission du formulaire pour passer à la question suivante
- Enregistrer les réponses de l'utilisateur au fur et à mesure

<Solution>

**play.html**
```html
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quiz Creator - Création</title>
        <link rel="stylesheet" href="style.css" />
        <script src="play.js" type="module"></script>
    </head>
    <body>
        <header>
            <h1>Quizz Creator</h1>
            <nav>
                <a href="create.html">Créer</a>
                <a href="play.html" aria-current="page">Jouer</a>
            </nav>
        </header>
        <main>
            <h2>Quizz</h2>
            <form id="question-form">
                <div id="question">
                </div>
                <fieldset>
                    <legend>Réponses</legend>
                    <div class="form-group">
                        <input
                            type="radio"
                            id="answer1"
                            name="answer"
                            value="0"
                            required
                        />
                        <label for="answer1">
                        </label>
                    </div>
                    <div class="form-group">
                        <input
                            type="radio"
                            id="answer2"
                            name="answer"
                            value="1"
                            required
                        />
                        <label for="answer2">
                        </label>
                    </div>
                    <div class="form-group">
                        <input
                            type="radio"
                            id="answer3"
                            name="answer"
                            value="2"
                            required
                        />
                        <label for="answer3"></label>
                    </div>
                    <div class="form-group">
                        <input
                            type="radio"
                            id="answer4"
                            name="answer"
                            value="3"
                            required
                        />
                    </div>
                    <label for="answer4"></label>
                </fieldset>
                <button type="submit">Valider</button>
            </form>
        </main>
    </body>
</html>
```

**play.js**
```javascript
const questions = JSON.parse(localStorage.getItem("questions"));

const quizzQuestions = questions
    .sort(() => Math.random() - 0.5) // Mélange le tableau questions
    .slice(0, 5); // Récupère les cinq premières questions

let indice = 0;
let score = 0;

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (event) => {
  // Empecher que la page se recharge
  event.preventDefault();

  // Récupérer les données du formulaire
  const data = new FormData(formElement);

  // Récupérer la réponse selectionnée par l'utilisateur
  const answer = data.get("answer");

  // Récupérer la réponse correcte à la question
  const correctAnswer = quizzQuestions[indice].correct;

  if (Number.parseInt(answer) === correctAnswer) {
    score++;
  }

  formElement.reset(); // Réinitialise le formulaire
  indice++; // On passe à la question suivante
  renderQuestion(); // On affiche la question suivante
});

function renderQuestion() {
  const currentQuestion = quizzQuestions[indice];
  const questionContainer = document.querySelector("#question");
  questionContainer.textContent = currentQuestion.question;

  // Affiche les réponse
  document.querySelector('label[for="answer1"]').textContent = currentQuestion.answers[0];
  document.querySelector('label[for="answer2"]').textContent = currentQuestion.answers[1];
  document.querySelector('label[for="answer3"]').textContent = currentQuestion.answers[2];
  document.querySelector('label[for="answer4"]').textContent = currentQuestion.answers[3];
}

renderQuestion();

```

</Solution>


#### `sessionStorage`

Nous avons un quizz qui fonctionne, mais il y a un problème : si on recharge la page, on perd toutes les réponses !

Pour résoudre ce problème, nous allons utiliser le `sessionStorage` pour stocker l'état du quizz. Les données stockées seront :

- Les questions du quizz
- Le score de l'utilisateur
- L'index de la question en cours

A chaque fois qu'une question est répondue, on met à jour le `sessionStorage`.

Et au chargement de la page, on vérifie si des données sont présentes dans le `sessionStorage` pour les charger.

### Page résultat

A la fin du quizz, on souhaite afficher le score de l'utilisateur. Pour cela, vous allez créer une page `result.html` et un fichier `result.js`.

Au chargement de la page, vous devrez récupérer les réponses de l'utilisateur dans le `sessionStorage`, et calculer le score, puis l'afficher.

Il reste à afficher un bouton « Voir les résultats » sur la page de jeu qui redirigera vers la page de résultat, lorsque le quizz est terminé.
