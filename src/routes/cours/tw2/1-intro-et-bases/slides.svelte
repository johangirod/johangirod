<script>
	import clientServeurImg from './simple-client-server.png';
</script>

<section>
	<section>
		<h1>Introduction et bases de JavaScript</h1>
		<h2 class="text-pink-600">Technologie web 2</h2>
		<p class="text-gray-500">Johan Girod</p>
	</section>
	<section>
		<h1>Avant-propos</h1>
		<aside class="notes">
			<h2>A propos de moi</h2>
			<ul>
				<li></li>
			</ul>
			<h2>Quelques vues d'insiders</h2>

			<ul>
				<li>Beaucoup de développeurs utilisent les LLMs pour générer du code en grande quantité</li>
				<li>Peu de personnes capable d'auditer, de comprendre et de critiquer ce code</li>
				<li>
					Pourtant c'est 50% du taf de développeur : relire du code, écrit par les autres, écrit par
					les LLMs, etc.
				</li>
				<li>
					Les LLMs proposent souvent 3 ou 4 solutions. Des fois ils en implémentent une mauvaise. La
					moitié du temps je dois préciser ou corriger.
				</li>
				<li>C'est la différence entre un bon dev et un proxy LLM</li>
				<li>Comment savoir si une solution est bonne / mauvaise ?</li>
			</ul>
			<ul>
				<li>En apprenant les <strong>bases</strong>. Et c'est ce pourquoi vous êtes ici.</li>
				<li>
					Le but de ce cours n'est pas de savoir créer un site en 3 semaines (il y a des bootcamp
					pour cela).
				</li>
				<li>C'est de repartir des fondamentaux du web : le navigateur, et les standards</li>
				<li>
					Ça pourra sembler long, ardu, complexe, par rapport à une solution LLM qui utilise des
					framework prêt à l'emploi (ex. react)
				</li>
				<li>Mais trois bonnes nouvelles</li>
				<li>
					Les bases, c'est durable. Ce que je vous verrez ici était valable il y a 10 ans et sera
					valable encore dans 10 ans.
				</li>
				<li>Les bases c'est standard, tout les développeurs webs les partagent</li>
				<li>
					Les bases c'est ce qui vous permettra de corriger les LLMs. Et c'est ce qui fera la
					différence aux entretiens d'embauche
				</li>
				<li>
					A garder en tête lorsque vous galererez sur des problèmes, des erreurs de syntaxe, etc.
				</li>
			</ul>
			<ul>
				<li>Le marché du travail des développeurs est en mutation</li>

				<li>Très peu de postes ouverts aux juniors</li>
				<li>Vous allez devoir vous former vite, car les entreprises ne veulent plus le faire</li>
				<li>
					Il faut que vous développiez un maximum de savoir maintenant. Vous avez accès à des
					professeurs. Vous avez du temps pour vous former. Profitez-en ! Posez des questions /
					Codez chez vous / Développez votre curiosité
				</li>
				<li>
					Réussir les TPs, c'est pas le sujet, le plus important c'est de comprendre et d'être
					curieux
				</li>
				<li>
					Et sur l'utilisation des LLMs, je déconseille **très fortement** de les utiliser en mode
					écriture pendant votre apprentissage (« write »).
				</li>
				<li>Ok pour les utiliser en classe mais avec ces règles :</li>
				<li>1. Écrivez d'abord du code</li>
				<li>2. Utilisez le mode apprentissage</li>
				<li>J'experimente cette année ! Si je vois qu'il y a des abus je reviendrai en arrière</li>
			</ul>
		</aside>
	</section>
</section>
<section>
	<section data-auto-animate>
		<h1>Définition(s) du web</h1>
	</section>
	<section data-auto-animate>
		<h1>Définition(s) du web</h1>
		<blockquote>
			Le World Wide Web — communément appelé WWW, W3, ou le web — est un système de pages web
			publiques interconnectées à travers l'Internet.
		</blockquote>
		<cite><a href="https://developer.mozilla.org/fr/docs/Glossary/World_Wide_Web">MDN doc</a></cite>
		<aside class="notes">
			<p>Définition académique du web, inventé par Tim Berners-Lee en 1989</p>
			<ul>
				<li>Les pages web sont publiques</li>
				<li>Les pages web sont interconnectées avec des liens hypertexte (ou hyperliens)</li>
				<li>Les pages web sont interconnectées à travers l'Internet</li>
			</ul>
		</aside>
	</section>
	<section data-auto-animate>
		<h1>Définition(s) du web</h1>
		<h2>
			Le web est une application internet constitué d'un réseau de serveurs et de clients échangeant
			des ressources
		</h2>
		<img src={clientServeurImg} alt="Schéma d'un échange entre client et serveur" />
		<aside class="notes">
			<p>Définition de l'architecte réseau</p>
			<ul>
				<li>
					Les clients correspondent aux appareils connectés sur Internet par les personnes (par
					exemple, votre ordinateur connecté par Wi-Fi ou votre téléphone connecté sur le réseau
					mobile) et aux logiciels d'accès au Web (par exemple, les navigateurs comme Firefox ou
					Chrome).
				</li>
				<li>
					Les serveurs sont des ordinateurs qui stockent des pages web, des sites ou des
					applications. Lorsqu'un appareil client souhaite accéder à une page web, une copie de la
					page est téléchargée depuis le serveur vers le client, la machine utilisée affiche alors
					le contenu dans le navigateur web de l'utilisatrice ou de l'utilisateur.
				</li>
			</ul>
		</aside>
	</section>
	<section data-auto-animate>
		<h1>Définition(s) du web</h1>
		<h2>Le web est un ensemble de standards et protocoles</h2>
		<h3 class="fragment">Lesquels ?</h3>
		<aside class="notes">
			<p>Définition du développeur web</p>
			<p>Web vs internet</p>
		</aside>
	</section>
	<section data-auto-animate>
		<h2>Le web est un ensemble de standards et protocoles</h2>

		<ul class="pt-10">
			<li>
				<strong>HTTP </strong><span class="fragment"
					>– protocole de communication client-serveur</span
				>
			</li>
			<li>
				<strong>HTML </strong><span class="fragment">– structure et contenu</span>
			</li>
			<li>
				<strong>CSS </strong><span class="fragment">– mise en forme</span>
			</li>
			<li>
				<strong>JavaScript </strong><span class="fragment">– interactivité</span>
			</li>
			<li class="fragment">
				... et <a href="https://www.w3.org/TR/">bien d'autres</a> (WAI-ARIA, Browser API, WebAssembly,
				JSON...)
			</li>
		</ul>
		<p class="fragment pt-10">
			L'organisation <a href="https://www.w3.org/">W3C</a> définit les standards du web
		</p>
	</section>
	<section>
		<h2>HTTP</h2>
		<p><small>HyperText Transfer Protocol</small></p>
		<ul>
			<li class="fragment">Protocole de <strong>communication client-serveur</strong></li>
			<li class="fragment">Utilise le protocole réseau <strong>TCP/IP</strong></li>
			<li class="fragment">Un serveur HTTP utilise le <strong>port 80</strong></li>
			<li class="fragment">
				Le client effectue une <strong>requête HTTP pour une ressource sur une URL</strong>
			</li>
			<li class="fragment">
				Le serveur répond avec un <strong>code de statut et un contenu</strong>
			</li>
		</ul>
		<p class="fragment">
			<a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Overview">En savoir plus</a>
		</p>
		<aside class="notes">
			Ce protocole sera exploré plus en détail dans le cours de technologie web 3, lorsque vous
			apprendrez à créer un serveur web
		</aside>
	</section>
	<section>
		<h2>HTML</h2>
		<p><small>HyperText Markup Language</small></p>
		<p>
			Permet de <strong>structurer et de décrire le contenu</strong> d'une page web grâce à des balises
		</p>
		<pre><code class="language-html" data-trim data-noescape
				><script type="text/template">
    <h1> Titre principal </h1>
    <p> Paragraphe </p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
				</script></code
			></pre>
	</section>
	<section>
		<h2>CSS</h2>
		<p><small>Cascading Style Sheets</small></p>
		<p>Permet de <strong>mettre en forme</strong> une page web grâce à des règles de style</p>
		<pre><code class="language-css" data-trim data-noescape>
body {'{'} background-color: #f0f0f0; {'}'}
        </code></pre>
	</section>
	<section>
		<h2>JavaScript</h2>
		<p>Permet d'ajouter de l'<strong>interactivité</strong> à une page web</p>
		<pre><code class="language-js" data-trim data-noescape>
const button = document.querySelector('button');
button.addEventListener('click', () => alert('Hello world!'));
        </code></pre>
	</section>
	<section>
		<h2>Quelles sont les étapes pour afficher une page web ?</h2>
		<ol>
			<li class="fragment">
				Le navigateur fait une <strong>requête sur une URL </strong>
				du serveur avec le <strong>protocole HTTP</strong>
			</li>
			<li class="fragment">
				Le serveur envoie une réponse qui contient <strong>code HTML de la page</strong> (et éventuellement
				du CSS et du JavaScript)
			</li>
			<li class="fragment">
				Le navigateur <strong>interprète</strong> le code <strong>HTML, CSS et JavaScript</strong> pour
				afficher la page à l'écran
			</li>
		</ol>
		<aside class="notes">
			C'est sur cette dernière étape que nous allons nous concentrer dans ce cours
		</aside>
	</section>
</section>
<section>
	<section>
		<h1>Contenu du semestre</h1>
	</section>
	<section>
		<h2>Programmation en Javascript = 11 x 2h</h2>
		<ul>
			<li>Bases du langage</li>
			<li>Manipulation du DOM</li>
			<li>Gestion des événements</li>
			<li>Utilisation des APIs du navigateur</li>
		</ul>
	</section>
	<section>
		<h2>Evaluations</h2>
		<ul>
			<li>Deux évaluations sur machine</li>
			<li>Durée : 1h30 (+ 30 min tiers temps)</li>
			<li>Coeff 1</li>
		</ul>
	</section>
</section>
<section>
	<section data-auto-animate>
		<h1>Introduction à JavaScript</h1>
	</section>
	<section data-auto-animate>
		<h1>Introduction à JavaScript</h1>
		<ul>
			<li>
				JavaScript (JS) est un <strong class="text-pink-600"
					>langage de programmation interprété</strong
				>
			</li>
			<li class="fragment">
				<strong class="text-pink-600">Ubiquitaire</strong> dans le développement web (et au dela)
			</li>
			<li class="fragment">
				En <strong class="text-pink-600">constante évolution</strong> (standardisé par l'ECMA)
			</li>
		</ul>
		<aside class="notes">
			<ul>
				<li>Interprété vs compilé</li>
				<li>Crée en 1995 par Brendan Eich</li>
				<li>En seulement 10 jours</li>
				<li>Inspiré de la syntaxe de Java (c'est le seul point commun)</li>
			</ul>
			<ul>
				<li>A la base, seulement pour ajouter de l'interactivité aux pages web</li>
				<li>Succès du web = succès de JS</li>
				<li>JS est devenu un langage de programmation à part entière</li>
				<li>LE langage le plus utilisé au monde</li>
				<li>Avec l'écosystème le plus riche (> 1 million de paquet NPM)</li>
				<li>Dans les navigateur, mais aussi</li>
				<li>Sur les serveurs (Node.js)</li>
				<li>Dans les applications mobiles (React Native)</li>
				<li>Dans les applications de bureau (Electron)</li>
				<li>Dans les jeux vidéos (Unity)</li>
				<li>Dans l'internet des objets (Johnny-Five)</li>
				<li>Apprendre JS vous permet de toucher à tous ces domaines</li>
			</ul>
			<ul>
				<li>
					En constante évolution. Depuis 2015, une révision majeure tous les ans, avec ajout de
					fonctionalité
				</li>
				<li>Standardisé par l'ECMA (European Computer Manufacturers Association)</li>
				<li>Le JS d'aujourd'hui n'a plus rien à voir avec le JS de 1995</li>
				<li>Dans ce cours, nous apprendrons les dernières fonctionalités du langage</li>
			</ul>
		</aside>
	</section>
	<section>
		<h2>Ressources</h2>
		<ul>
			<li>
				<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">MDN doc</a> – la documentation
				officielle de JavaScript
			</li>
			<li>
				<a href="https://javascript.info/">The Modern JavaScript Tutorial</a> – un tutoriel complet sur
				JavaScript
			</li>
			<li>
				<a href="https://caniuse.com/">Can I use</a> – permet de savoir quelles fonctionalités sont supportées
				par quels navigateurs
			</li>
		</ul>
	</section>
</section>
<section>
	<section>
		<h1>Bases du langage</h1>
	</section>
	<section data-auto-animate>
		<h2>Déclaration de variables</h2>
		<pre data-id="code-1"><code class="language-js" data-trim data-noescape data-line-numbers>
// Déclaration d'une variable
let maVariable = 12;
</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Déclaration de variables</h2>
		<pre data-id="code-1"><code class="language-js" data-trim data-noescape>
// Déclaration d'une variable
let maVariable = 12;

// Réaffectation d'une variable
maVariable = 42;
        </code></pre>
	</section>

	<section data-auto-animate>
		<h2>Déclaration de constantes</h2>
		<pre data-id="code-2"><code class="language-js" data-trim data-noescape data-line-numbers="1-2">
// Déclaration d'une constante
const maConstante = 12;
</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Déclaration de constantes</h2>
		<pre data-id="code-2"><code class="language-js" data-trim data-noescape data-line-numbers="4-8">
// Déclaration d'une constante
const maConstante = 12;

maConstante = 42; // Erreur
/*
    À noter : si une variable n'est pas réaffectée,
    il est préférable de la déclarer en constante
*/
</code></pre>
	</section>

	<section>
		<h2>Types de données</h2>
		<pre data-id="code-3"><code class="language-js" data-trim data-noescape>
				><script type="text/template">
					// "number", code pour les flottant et les entier
					const a = 1200;
					const b = 1_000.345; // 1000.345
					const maxNumber = Infinity;

					// "string", chaîne de caractères
					const e = 'Hello world!';
					const name = 'John';
					const f = `Hello ${name}!`;

					// "boolean", vrai ou faux
					const g = true;

					// "null", représente l'absence de valeur, "rien", "non applicable"
					const h = null;

					// "undefined", représente une variable non définie
					let age;
				</script>
</code></pre>
	</section>
	<section>
		<h2>Opérateurs</h2>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
<script type="text/template">
					// Arithmétique : + - * / % **
					const a = (-1 + 2) * 3;
					const b = 2 ** 3 % 3;

					// Comparaison : < > <= >= === !==
					const res = a === 3;

					// Logique : && || !
					const condition = a > 10 && (b < 10 || !res);

					// Concaténation : +
					const c = 'Hello ' + 'world!';

					// Ternaire : `<condition> ? <valeur_si_vrai> : <valeur_si_faux>`
					const d = age >= 18 ? 'majeur' : 'mineur';

					// Opérateur de coalescence nulle : `??`
					const e = a ?? b; // a si a n'est pas null ou undefined, sinon b

					// Affectation : += -= *= ??= ++ -- ...
					let f = 12;
					f += 1; // f = f + 1;
					f--; // f = f - 1;
					f ??= 42; // f = f ?? 42;
				</script>
</code></pre>
	</section>
	<section>
		<h2>Structures de contrôle : if/else</h2>
		<pre><code class="language-js" data-trim data-noescape>
<script type="text/template">
					if (condition1) {
						// ...
					} else if (condition2) {
						// ...
					} else {
						// ...
					}
				</script>
				</code></pre>
	</section>
	<section>
		<h2>Structures de contrôle : boucles</h2>
		<pre><code class="language-js" data-trim data-noescape>
<script type="text/template">
					for (let i = 0; i < 10; i++) {
						// ...
					}

					while (condition) {
						// ...
					}
				</script>
				</code></pre>
	</section>
	<section>
		<h2>Structures de contrôle : switch</h2>
		<pre><code class="language-js" data-trim data-noescape>
<script type="text/template">
					switch (expression) {
						case valeur1:
							// expression === valeur1
							// ...
							break;
						case valeur2:
						case valeur3:
							// expression === valeur2 || expression === valeur3
							// ...
							break;
						default:
						// autres cas
						// ...
					}
				</script>
				</code></pre>
	</section>
	<section>
		<h2>Bloc logique et portée des variables</h2>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers="">
<script type="text/template">
					let a;
					if (condition) {
						a = 12;
						const b = 42;
						const c = a + b;
					}

					// a est accessible ici
					// b et c ne sont pas accessibles ici
				</script>
</code></pre>
	</section>
</section>

<section>
	<section>
		<h1>Fonctions</h1>
	</section>
	<section data-auto-animate>
		<h2>Déclaration de fonctions</h2>

		<pre data-id="code-3"><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					// Déclaration d'une fonction
					function add(a, b) {
						return a + b;
					}
				</script>
</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Déclaration de fonctions</h2>

		<pre data-id="code-3"><code class="language-js" data-trim data-noescape data-line-numbers>
				<script type="text/template">
					// Déclaration d'une fonction
					function add(a, b) {
						return a + b;
					}

					// Appel d'une fonction
					const res = add(10, 20);
				</script>
	</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Scope des variables</h2>
		<h3>Variables locales</h3>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
				<script type="text/template">
					function sayHello(name) {
						const message = `Hello ${name}!`;
						alert(message);
					}

					sayHello('Bob'); // Hello Bob!

					alert(message); // Erreur : La variable message n'est pas accessible ici
				</script>
	</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Scope des variables</h2>
		<h3>Variables externes</h3>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
				<script type="text/template">
					let name = 'Bob';
					function sayHello() {
						const message = `Hello ${name}!`;
						alert(message);
					}

					sayHello(); // Hello Bob!

					name = 'Alice';
					sayHello(); // Hello Alice!
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Valeur par défaut</h2>
		<pre data-id="code-4"><code class="language-js" data-trim data-noescape data-line-numbers>
				<script type="text/template">
					function sayHello(name = 'world') {
						const message = `Hello ${name}!`;
						alert(message);
					}

					sayHello('Bob'); // Hello Bob!
					sayHello(); // Hello world!
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Fonctions fléchés</h2>
		<pre data-id="code-4"><code class="language-js" data-trim data-noescape data-line-numbers>
				<script type="text/template">
					const sayHello = (name = 'world') => {
						const message = `Hello ${name}!`;
						alert(message);
					};

					sayHello('Bob'); // Hello Bob!
					sayHello(); // Hello world!
				</script>
	</code></pre>
	</section>
</section>

<section>
	<section>
		<h1>Tableaux</h1>
	</section>
	<section data-auto-animate>
		<h2>Déclaration et accès</h2>
		<pre data-id="code-5"><code class="language-js" data-trim data-noescape>
				<script type="text/template">
					// Déclaration d'un tableau
					const fruits = ['pomme', 'banane', 'orange'];

					// Longueur d'un tableau
					fruits.length; // 3

					// Accès à un élément
					const firstFruit = fruits[0]; // pomme
					const penultimateFruit = fruits.at(-2); // banane
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Modifications de tableau</h2>
		<pre data-id="code-5"><code class="language-js" data-trim data-noescape>
				<script type="text/template">
					// Modifier un élement
					fruits[0] = 'abricot';

					// Ajouter un élément à la fin
					fruits.push('cerise');
					const nouveauxFruits = [...fruits, 'framboise']; // Version immutable
				</script>
	</code></pre>
	</section>

	<section data-auto-animate>
		<h2>Portion de tableau</h2>
		<pre data-id="code-5"><code class="language-js" data-trim data-noescape>
				<script type="text/template">
					// Récupérer un sous tableau
					const sousTableau = [1, 2, 3, 4].slice(0, 2); // [1, 2]
					const sousTableau = [1, 2, 3, 4].slice(1, -1); // [2, 3, 4]
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Portion de tableau</h2>
		<pre data-id="code-5"><code class="language-js" data-trim data-noescape>
				<script type="text/template">
					// Récupérer un sous tableau
					const sousTableau = [1, 2, 3, 4].slice(0, 2); // [1, 2]
					const sousTableau = [1, 2, 3, 4].slice(1, -1); // [2, 3, 4]
					const sousTableau = [1, 2, 3, 4].slice(-1); // ?
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Itération sur un tableau</h2>
		<pre data-id="code-5"><code class="language-js" data-trim data-noescape>
				<script type="text/template">
					// Version « à l'ancienne » (à éviter)
					for (let i = 0; i < fruits.length; i++) {
						const fruit = fruits[i];
						console.log(fruit);
					}

					// Version standard
					for (const fruit of fruits) {
						console.log(fruit);
					}

					// Version fonctionnelle
					fruits.forEach((fruit) => {
						console.log(fruit);
					});
				</script>
	</code></pre>
	</section>
</section>
<section>
	<section>
		<h1>Objets</h1>
	</section>

	<section>
		<h2>Objets: Déclaration et accès</h2>
		<pre data-id="code-6"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-7|9-10|12-14|16-18">
				<script type="text/template">
					// Déclaration d'un objet
					const person = {
						firstName: 'Bob',
						lastName: 'Dylan',
						age: 80,
						isAlive: true
					};

					// Accès à une propriété
					person.firstName; // Bob

					// Accès à une propriété dynamiquement
					const propertyName = 'age';
					person[propertyName]; // 80

					// Propriété inexistante
					person.hairColor; // undefined
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Objet: modification de propriété</h2>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers="1-2|4-5|7">
		<script type="text/template">
					// Modification d'une propriété
					person.firstName = 'Alice';

					// Ajout et suppression de propriétés
					person.city = 'Paris'; // Autorisé, car javascript est un langage dynamique

					delete person.city;
				</script>
		</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Objet: destructuration</h2>
		<pre data-id="obj-destructuring"><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					const person = { firstName: 'Bob', lastName: 'Dylan' };

					function greet(person) {
						console.log(`Hello ${person.firstName} ${person.lastName}!`);
					}
				</script>
		</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Objet: destructuration</h2>
		<pre data-id="obj-destructuring"><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					const person = { firstName: 'Bob', lastName: 'Dylan' };

					function greet(person) {
						const { firstName, lastName } = person;
						console.log(`Hello ${firstName} ${lastName}!`);
					}
				</script>
		</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Objet: destructuration</h2>
		<pre data-id="obj-destructuring"><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					const person = { firstName: 'Bob', lastName: 'Dylan' };

					function greet({ firstName, lastName }) {
						console.log(`Hello ${firstName} ${lastName}!`);
					}
				</script>
		</code></pre>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
