<script>
	import clientServeurImg from './simple-client-server.png';
</script>

<section>
	<h1>Introduction et bases de JavaScript</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
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
				JavaScript (JS) est un <strong class="text-pink-500"
					>langage de programmation interprété</strong
				>
			</li>
			<li class="fragment">
				<strong class="text-pink-500">Ubiquitaire</strong> dans le développement web (et au dela)
			</li>
			<li class="fragment">
				En <strong class="text-pink-500">constante évolution</strong> (standardisé par l'ECMA)
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
		<pre data-id="code-1"><code class="language-js" data-trim data-noescape data-line-numbers="4-5">
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
		<pre data-id="code-3"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-6 | 8-11 | 13-14 | 16-17 | 19-20">
				><script type="text/template">
					// "number", code pour les flottant et les entier
					const a = 12;
					const b = 1_000.345; // 1000.345
					const c = 1.2e3; // 1200
					const d = 0x12; // 18
					const maxNumber = Infinity;

					// "string", chaîne de caractères
					const e = 'Hello world!';
					const name = 'John';
					const f = `Hello ${name}!`;

					// "boolean", vrai ou faux
					const g = true;

					// "null", représente l'absence de valeur, "rien"
					const h = null;

					// "undefined", représente une variable non définie
					let age;
				</script>
</code></pre>
	</section>
	<section>
		<h2>Opérateurs</h2>
		<pre><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-3|5-6|8-9|11-12|14-15|17-19|21-25">
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
					const e = a !== null && a !== undefined ? a : b;

					// Affectation : += -= *= ??= ++ -- ...
					let f = 12;
					f += 1; // f = f + 1;
					f--; // f = f - 1;
					f ??= 42; // f = f ?? 42;
				</script>
</code></pre>
	</section>
	<section>
		<h2>Structures de contrôle</h2>
		<pre><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-8|10-24|26-30|31-35">
<script type="text/template">
					// if ... else if ... else
					if (condition1) {
						// ...
					} else if (condition2) {
						// ...
					} else {
						// ...
					}

					// switch ... case ... default
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

					// for
					for (let i = 0; i < 10; i++) {
						// ...
					}

					// while
					while (condition) {
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
					{
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

					alert(message); // <-- Error! La variable message n'est pas accessible ici
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
		<h1>Tableaux et objets</h1>
	</section>
	<section data-auto-animate>
		<h2>Tableaux</h2>
		<pre data-id="code-5"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-2|4-7|9-10|12-13|15-16|18-19">
				<script type="text/template">
					// Déclaration d'un tableau
					const fruits = ['pomme', 'banane', 'orange'];

					// Accès à un élément
					const firstFruit = fruits[0]; // pomme
					const lastFruit = fruits[fruits.length - 1]; // orange
					const penultimateFruit = fruits.at(-2); // banane

					// Sous-tableau
					const subFruits = fruits.slice(1, 3); // ['banane', 'orange']

					// Utilisation des tableaux comme tuple (déstructuration)
					const [age, name] = [42, 'Bob'];

					// Utilisation des tableaux comme liste
					const [first, ...rest] = fruits; // first = 'pomme', rest = ['banane', 'orange']

					// Concaténation de tableaux
					const allFruits = [...fruits, 'fraise', 'citron']; // ['pomme', 'banane', 'orange', 'fraise', 'citron']
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Itération sur un tableau</h2>
		<pre data-id="code-5"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-5|7-10|12-15">
				<script type="text/template">
					// Itération sur un tableau
					for (let i = 0; i < fruits.length; i++) {
						const fruit = fruits[i];
						console.log(fruit);
					}

					// Itération sur un tableau
					for (const fruit of fruits) {
						console.log(fruit);
					}

					// Itération sur un tableau
					fruits.forEach((fruit) => {
						console.log(fruit);
					});
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Objets</h2>
		<pre data-id="code-6"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-7|9-12|14-15|17-19|21-23">
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
					person['lastName']; // Dylan
					person.hairColor; // undefined

					// Modification d'une propriété
					person.firstName = 'Alice';

					// Ajout et suppression de propriétés
					person.city = 'Paris';
					delete person.city;

					// Déstructuration d'un objet
					const { firstName, lastName } = person;
					console.log(`Hello ${firstName} ${lastName}!`);
				</script>
	</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Itération sur un objet</h2>
		<pre data-id="code-6"><code
				class="language-js"
				data-trim
				data-noescape
				data-line-numbers="1-6|8-12|14-18">
				<script type="text/template">
					const countries = {
						fr: 'France',
						de: 'Allemagne',
						es: 'Espagne'
						// ...
					};

					// Avec une boucle for ... in
					for (const key in countries) {
						const value = countries[key];
						console.log(`${key} = ${value}`);
					}

					// Avec Object.keys
					Object.keys(countries).forEach((key) => {
						const value = countries[key];
						console.log(`${key} = ${value}`);
					});
				</script>
	</code></pre>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
