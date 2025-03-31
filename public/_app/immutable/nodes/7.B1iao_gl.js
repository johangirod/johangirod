import{a as o,e as k,t as S,c as E}from"../chunks/B4pklceG.js";import"../chunks/CMei0t4b.js";import{M as s,f as p,N as i,n as v,O as u,p as H,a as L}from"../chunks/Du4uIILg.js";import{h as l}from"../chunks/Cs1o_ong.js";import{s as j}from"../chunks/BMkXc6el.js";import{i as R}from"../chunks/D4AmcDfz.js";import{S as c}from"../chunks/OjqImkSQ.js";import{R as I}from"../chunks/Dayddfh2.js";import{s as J}from"../chunks/Cv3pZryr.js";const M=""+new URL("../assets/simple-client-server.C-D8Nbjl.png",import.meta.url).href;var G=k(`<section><h1>Introduction et bases de JavaScript</h1> <h2 class="text-pink-500">Technologie web 2</h2> <p class="text-gray-500">Johan Girod</p></section> <section><section data-auto-animate=""><h1>Définition(s) du web</h1></section> <section data-auto-animate=""><h1>Définition(s) du web</h1> <blockquote>Le World Wide Web — communément appelé WWW, W3, ou le web — est un système de pages web
			publiques interconnectées à travers l'Internet.</blockquote> <cite><a href="https://developer.mozilla.org/fr/docs/Glossary/World_Wide_Web">MDN doc</a></cite> <aside class="notes"><p>Définition académique du web, inventé par Tim Berners-Lee en 1989</p> <ul><li>Les pages web sont publiques</li> <li>Les pages web sont interconnectées avec des liens hypertexte (ou hyperliens)</li> <li>Les pages web sont interconnectées à travers l'Internet</li></ul></aside></section> <section data-auto-animate=""><h1>Définition(s) du web</h1> <h2>Le web est une application internet constitué d'un réseau de serveurs et de clients échangeant
			des ressources</h2> <img alt="Schéma d'un échange entre client et serveur"> <aside class="notes"><p>Définition de l'architecte réseau</p> <ul><li>Les clients correspondent aux appareils connectés sur Internet par les personnes (par
					exemple, votre ordinateur connecté par Wi-Fi ou votre téléphone connecté sur le réseau
					mobile) et aux logiciels d'accès au Web (par exemple, les navigateurs comme Firefox ou
					Chrome).</li> <li>Les serveurs sont des ordinateurs qui stockent des pages web, des sites ou des
					applications. Lorsqu'un appareil client souhaite accéder à une page web, une copie de la
					page est téléchargée depuis le serveur vers le client, la machine utilisée affiche alors
					le contenu dans le navigateur web de l'utilisatrice ou de l'utilisateur.</li></ul></aside></section> <section data-auto-animate=""><h1>Définition(s) du web</h1> <h2>Le web est un ensemble de standards et protocoles</h2> <h3 class="fragment">Lesquels ?</h3> <aside class="notes"><p>Définition du développeur web</p> <p>Web vs internet</p></aside></section> <section data-auto-animate=""><h2>Le web est un ensemble de standards et protocoles</h2> <ul class="pt-10"><li><strong>HTTP</strong><span class="fragment">– protocole de communication client-serveur</span></li> <li><strong>HTML</strong><span class="fragment">– structure et contenu</span></li> <li><strong>CSS</strong><span class="fragment">– mise en forme</span></li> <li><strong>JavaScript</strong><span class="fragment">– interactivité</span></li> <li class="fragment">... et <a href="https://www.w3.org/TR/">bien d'autres</a> (WAI-ARIA, Browser API, WebAssembly,
				JSON...)</li></ul> <p class="fragment pt-10">L'organisation <a href="https://www.w3.org/">W3C</a> définit les standards du web</p></section> <section><h2>HTTP</h2> <p><small>HyperText Transfer Protocol</small></p> <ul><li class="fragment">Protocole de <strong>communication client-serveur</strong></li> <li class="fragment">Utilise le protocole réseau <strong>TCP/IP</strong></li> <li class="fragment">Un serveur HTTP utilise le <strong>port 80</strong></li> <li class="fragment">Le client effectue une <strong>requête HTTP pour une ressource sur une URL</strong></li> <li class="fragment">Le serveur répond avec un <strong>code de statut et un contenu</strong></li></ul> <p class="fragment"><a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Overview">En savoir plus</a></p> <aside class="notes">Ce protocole sera exploré plus en détail dans le cours de technologie web 3, lorsque vous
			apprendrez à créer un serveur web</aside></section> <section><h2>HTML</h2> <p><small>HyperText Markup Language</small></p> <p>Permet de <strong>structurer et de décrire le contenu</strong> d'une page web grâce à des balises</p> <pre><code class="language-html" data-trim="" data-noescape=""><script type="text/template">
    <h1> Titre principal </h1>
    <p> Paragraphe </p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
				<\/script><!----></code></pre></section> <section><h2>CSS</h2> <p><small>Cascading Style Sheets</small></p> <p>Permet de <strong>mettre en forme</strong> une page web grâce à des règles de style</p> <pre><code class="language-css" data-trim="" data-noescape=""></code></pre></section> <section><h2>JavaScript</h2> <p>Permet d'ajouter de l'<strong>interactivité</strong> à une page web</p> <pre><code class="language-js" data-trim="" data-noescape="">
const button = document.querySelector('button');
button.addEventListener('click', () => alert('Hello world!'));
        </code></pre></section> <section><h2>Quelles sont les étapes pour afficher une page web ?</h2> <ol><li class="fragment">Le navigateur fait une <strong>requête sur une URL</strong> du serveur avec le <strong>protocole HTTP</strong></li> <li class="fragment">Le serveur envoie une réponse qui contient <strong>code HTML de la page</strong> (et éventuellement
				du CSS et du JavaScript)</li> <li class="fragment">Le navigateur <strong>interprète</strong> le code <strong>HTML, CSS et JavaScript</strong> pour
				afficher la page à l'écran</li></ol> <aside class="notes">C'est sur cette dernière étape que nous allons nous concentrer dans ce cours</aside></section></section> <section><section><h1>Contenu du semestre</h1></section> <section><h2>Programmation en Javascript = 11 x 2h</h2> <ul><li>Bases du langage</li> <li>Manipulation du DOM</li> <li>Gestion des événements</li> <li>Utilisation des APIs du navigateur</li></ul></section> <section><h2>Evaluations</h2> <ul><li>Deux évaluations sur machine</li> <li>Durée : 1h30 (+ 30 min tiers temps)</li> <li>Coeff 1</li></ul></section></section> <section><section data-auto-animate=""><h1>Introduction à JavaScript</h1></section> <section data-auto-animate=""><h1>Introduction à JavaScript</h1> <ul><li>JavaScript (JS) est un <strong class="text-pink-500">langage de programmation interprété</strong></li> <li class="fragment"><strong class="text-pink-500">Ubiquitaire</strong> dans le développement web (et au dela)</li> <li class="fragment">En <strong class="text-pink-500">constante évolution</strong> (standardisé par l'ECMA)</li></ul> <aside class="notes"><ul><li>Interprété vs compilé</li> <li>Crée en 1995 par Brendan Eich</li> <li>En seulement 10 jours</li> <li>Inspiré de la syntaxe de Java (c'est le seul point commun)</li></ul> <ul><li>A la base, seulement pour ajouter de l'interactivité aux pages web</li> <li>Succès du web = succès de JS</li> <li>JS est devenu un langage de programmation à part entière</li> <li>LE langage le plus utilisé au monde</li> <li>Avec l'écosystème le plus riche (> 1 million de paquet NPM)</li> <li>Dans les navigateur, mais aussi</li> <li>Sur les serveurs (Node.js)</li> <li>Dans les applications mobiles (React Native)</li> <li>Dans les applications de bureau (Electron)</li> <li>Dans les jeux vidéos (Unity)</li> <li>Dans l'internet des objets (Johnny-Five)</li> <li>Apprendre JS vous permet de toucher à tous ces domaines</li></ul> <ul><li>En constante évolution. Depuis 2015, une révision majeure tous les ans, avec ajout de
					fonctionalité</li> <li>Standardisé par l'ECMA (European Computer Manufacturers Association)</li> <li>Le JS d'aujourd'hui n'a plus rien à voir avec le JS de 1995</li> <li>Dans ce cours, nous apprendrons les dernières fonctionalités du langage</li></ul></aside></section> <section><h2>Ressources</h2> <ul><li><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript">MDN doc</a> – la documentation
				officielle de JavaScript</li> <li><a href="https://javascript.info/">The Modern JavaScript Tutorial</a> – un tutoriel complet sur
				JavaScript</li> <li><a href="https://caniuse.com/">Can I use</a> – permet de savoir quelles fonctionalités sont supportées
				par quels navigateurs</li></ul></section></section> <section><section><h1>Bases du langage</h1></section> <section data-auto-animate=""><h2>Déclaration de variables</h2> <pre data-id="code-1"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
// Déclaration d'une variable
let maVariable = 12;
</code></pre></section> <section data-auto-animate=""><h2>Déclaration de variables</h2> <pre data-id="code-1"><code class="language-js" data-trim="" data-noescape="">
// Déclaration d'une variable
let maVariable = 12;

// Réaffectation d'une variable
maVariable = 42;
        </code></pre></section> <section data-auto-animate=""><h2>Déclaration de constantes</h2> <pre data-id="code-2"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="1-2">
// Déclaration d'une constante
const maConstante = 12;
</code></pre></section> <section data-auto-animate=""><h2>Déclaration de constantes</h2> <pre data-id="code-2"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="4-8">
// Déclaration d'une constante
const maConstante = 12;

maConstante = 42; // Erreur
/* 
    À noter : si une variable n'est pas réaffectée, 
    il est préférable de la déclarer en constante
*/
</code></pre></section> <section><h2>Types de données</h2> <pre data-id="code-3"><code class="language-js" data-trim="" data-noescape="">
				><script type="text/template">
					// "number", code pour les flottant et les entier
					const a = 1200;
					const b = 1_000.345; // 1000.345
					const maxNumber = Infinity;

					// "string", chaîne de caractères
					const e = 'Hello world!';
					const name = 'John';
					const f = \`Hello \${name}!\`;

					// "boolean", vrai ou faux
					const g = true;

					// "null", représente l'absence de valeur, "rien", "non applicable"
					const h = null;

					// "undefined", représente une variable non définie
					let age;
				<\/script>
</code></pre></section> <section><h2>Opérateurs</h2> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
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

					// Ternaire : \`<condition> ? <valeur_si_vrai> : <valeur_si_faux>\`
					const d = age >= 18 ? 'majeur' : 'mineur';

					// Opérateur de coalescence nulle : \`??\`
					const e = a ?? b; // a si a n'est pas null ou undefined, sinon b

					// Affectation : += -= *= ??= ++ -- ...
					let f = 12;
					f += 1; // f = f + 1;
					f--; // f = f - 1;
					f ??= 42; // f = f ?? 42;
				<\/script>
</code></pre></section> <section><h2>Structures de contrôle</h2> <pre><code class="language-js" data-trim="" data-noescape="">
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
				<\/script>
				</code></pre></section> <section><h2>Bloc logique et portée des variables</h2> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
<script type="text/template">
					let a;
					{
						a = 12;
						const b = 42;
						const c = a + b;
					}

					// a est accessible ici
					// b et c ne sont pas accessibles ici
				<\/script>
</code></pre></section></section> <section><section><h1>Fonctions</h1></section> <section data-auto-animate=""><h2>Déclaration de fonctions</h2> <pre data-id="code-3"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					// Déclaration d'une fonction
					function add(a, b) {
						return a + b;
					}
				<\/script>
</code></pre></section> <section data-auto-animate=""><h2>Déclaration de fonctions</h2> <pre data-id="code-3"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
				<script type="text/template">
					// Déclaration d'une fonction
					function add(a, b) {
						return a + b;
					}

					// Appel d'une fonction
					const res = add(10, 20);
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Scope des variables</h2> <h3>Variables locales</h3> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
				<script type="text/template">
					function sayHello(name) {
						const message = \`Hello \${name}!\`;
						alert(message);
					}

					sayHello('Bob'); // Hello Bob!

					alert(message); // Erreur : La variable message n'est pas accessible ici
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Scope des variables</h2> <h3>Variables externes</h3> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
				<script type="text/template">
					let name = 'Bob';
					function sayHello() {
						const message = \`Hello \${name}!\`;
						alert(message);
					}

					sayHello(); // Hello Bob!

					name = 'Alice';
					sayHello(); // Hello Alice!
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Valeur par défaut</h2> <pre data-id="code-4"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
				<script type="text/template">
					function sayHello(name = 'world') {
						const message = \`Hello \${name}!\`;
						alert(message);
					}

					sayHello('Bob'); // Hello Bob!
					sayHello(); // Hello world!
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Fonctions fléchés</h2> <pre data-id="code-4"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
				<script type="text/template">
					const sayHello = (name = 'world') => {
						const message = \`Hello \${name}!\`;
						alert(message);
					};

					sayHello('Bob'); // Hello Bob!
					sayHello(); // Hello world!
				<\/script>
	</code></pre></section></section> <section><section><h1>Tableaux et objets</h1></section> <section data-auto-animate=""><h2>Tableaux</h2> <pre data-id="code-5"><code class="language-js" data-trim="" data-noescape="">
				<script type="text/template">
					// Déclaration d'un tableau
					const fruits = ['pomme', 'banane', 'orange'];

					// Longueur d'un tableau
					fruits.length; // 3

					// Accès à un élément
					const firstFruit = fruits[0]; // pomme
					const penultimateFruit = fruits.at(-2); // banane

					// Sous-tableau
					const subFruits = fruits.slice(1, 3); // ['banane', 'orange']

					// Utilisation des tableaux comme tuple (déstructuration)
					const bob = ['Bob', 42];
					const [name, age] = bob; // name = 'Bob', age = 42

					// Concaténation de tableaux
					const allFruits = [...fruits, 'fraise', 'citron']; // ['pomme', 'banane', 'orange', 'fraise', 'citron']

					// Utilisation des tableaux comme liste
					const [first, ...rest] = fruits; // first = 'pomme', rest = ['banane', 'orange']
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Itération sur un tableau</h2> <pre data-id="code-5"><code class="language-js" data-trim="" data-noescape="">
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
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Objets</h2> <pre data-id="code-6"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="1-7|9-10|12-14|16-18|20-23|25-27">
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

					// Modification d'une propriété
					person.firstName = 'Alice';

					// Ajout et suppression de propriétés
					person.city = 'Paris'; // Autorisé, car javascript est un langage dynamique

					delete person.city;

					// Déstructuration d'un objet
					const { firstName, lastName } = person;
					console.log(\`Hello \${firstName} \${lastName}!\`);
				<\/script>
	</code></pre></section> <section data-auto-animate=""><h2>Itération sur un objet</h2> <pre data-id="code-6"><code class="language-js" data-trim="" data-noescape="" data-line-numbers="1-6|8-12|14-19">
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
						console.log(\`\${key} = \${value}\`);
					}

					// Avec Object.keys
					const keys = Object.keys(countries); // ['fr', 'de', 'es']
					keys.forEach((key) => {
						const value = countries[key];
						console.log(\`\${key} = \${value}\`);
					});
				<\/script>
	</code></pre></section></section> <section><h1>À vous de jouer !</h1> <h2>johangirod.com/cours</h2></section>`,1);function B(b){var g=G(),y=s(p(g),2),t=s(i(y),4),f=s(i(t),4);j(f,"src",M),v(2),u(t);var d=s(t,10),m=s(i(d),6),h=i(m);h.textContent=`
body { background-color: #f0f0f0; }
        `,u(m),u(d),v(4),u(y),v(12),o(b,g)}const z="data:image/png;base64,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";var U=S("<p><strong>Impératif</strong></p> <!> <p><strong>Fonctionnelle</strong></p> <!>",1),W=S(`<!> <h2>Exercices / TP</h2> <p>Pour effectuer les exercices, nous utiliserons un REPL (Read-Eval-Print-Loop) qui permet d’écrire du code et de l’exécuter directement.</p> <p>Le REPL JavaScript le plus répandu est celui de la console de votre navigateur. Pour y accéder, il suffit d’ouvrir le débugueur de votre navigateur (F12) et de cliquer sur l’onglet “Console”. Nous vous conseillons d’utiliser Firefox ou Chrome.</p> <p>Vous pouvez utiliser un fichier séparé pour faire les exercices et une trace de votre travail, et copier le code dans la console pour l’exécuter.</p> <h3>Exercice 1</h3> <p>Écrire une fonction qui, à partir de la hauteur d’un véhicule saisi par l’utilisateur, retourne la catégorie de tarification d’un véhicule se présentant au péage de l’autoroute :</p> <ul><li>hauteur inférieure à 2m : “véhicule léger”</li> <li>hauteur supérieure ou égale à 2m et inférieure à 3m : “véhicule intermédiaire”</li> <li>hauteur supérieure ou égale à 3m : “poids lourd”</li></ul> <p>Tester cette fonction avec plusieurs hauteurs de véhicules.</p> <!> <h3>Exercice 2</h3> <p>Écrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 10 jusqu’à ce que la réponse convienne.</p> <p>Vous pourrez utiliser la fonction <code>prompt</code> pour demander à l’utilisateur de saisir un nombre et la fonction <code>alert</code> pour afficher un message à l’utilisateur.</p> <!> <p>Le nombre pourra être determiné aléatoirement à l’aide de la fonction <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="nofollow"><code>Math.random</code></a> et de la fonction <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" rel="nofollow"><code>Math.ceil</code></a>.</p> <p>Vous aurez à utiliser la fonction <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt" rel="nofollow"><code>parseInt</code></a> pour convertir la chaîne de caractères saisie par l’utilisateur en nombre.</p> <!> <h3>Exercice 3</h3> <p>Écrire un programme capable de calculer la factorielle d’un nombre donné par l’utilisateur.</p> <!> <h3>Exercice 4</h3> <p>Écrire une fonction qui prend en paramètre un tableau de nombres et qui retourne la moyenne de ces nombres.</p> <p>Bonus : utilisez la fonction <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="nofollow"><code>reduce</code></a> pour calculer la somme des nombres du tableau.</p> <!> <h3>Exercice 5</h3> <p>Soit un tableau contenant la liste des couleurs:</p> <!> <p>Écrire une fonction <code>searchColor(query)</code> qui prend en paramètre une chaîne de caractères et qui retourne un tableau contenant les couleurs qui contiennent la chaîne de caractères passée en paramètre.</p> <p>Vous pourrez utiliser les fonctions <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="nofollow"><code>filter</code></a> et <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="nofollow"><code>includes</code></a> pour résoudre cet exercice.</p> <!> <h3>Exercice 6</h3> <p>Plutôt que d’ouvrir systématiquement une popup pour chaque affichage nous allons maintenant utiliser la méthode <code>write</code> de l’objet <code>document</code> pour écrire directement dans la fenêtre du navigateur.</p> <p>Pour commencer, nous allons changer la police d’écriture pour une police monospace. Pour cela, nous allons utiliser la propriété <code>fontFamily</code> de l’objet <code>document.body.style</code> :</p> <!> <ol><li>Écrire une fonction qui dessine une ligne d’étoiles <code>*</code> (le nb d’étoiles sera un paramètre).</li> <li>Écrire une fonction qui dessine un triangle composé d’étoiles, c’est-à-dire une succession de lignes d’étoiles de longueur 1 puis 2 puis 3 et ainsi jusqu’à n. Le passage à la ligne se fera à l’aide de la balise HTML adéquate (<code>&lt;br/&gt;</code>).</li> <li>Écrire une fonction qui dessine un carré de côté n, le bord de ce carré est composé d’étoiles,
l’intérieur de « - ».</li> <li>Écrire une fonction qui dessine un losange creux, dont le bord est signifié par des étoiles. Chaque coté de ce losange sera donc dessiné avec n étoiles. Chaque « blanc » sera représenté par un espace non sécable encodé <code>&amp;nbsp;</code>. Par exemple, pour créer une ligne de 4 espace puis une étoile, on écrira : <code>document.write("&amp;nbsp;".repeat(4) + "*");</code> Voici le rendu pour n=4 : <img alt="Un losange de 4 étoile de côté"></li></ol> <!>`,1);function Q(b,g){H(g,!1),J.set(!0),R();var y=W(),t=p(y);I(t,{children:(e,r)=>{B(e)},$$slots:{default:!0}});var f=s(t,18);c(f,{children:(e,r)=>{var a=E(),n=p(a);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> categorieVehicule</span><span style="color:#24292E">(</span><span style="color:#E36209">hauteur</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	if</span><span style="color:#24292E"> (hauteur </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		return</span><span style="color:#032F62"> 'véhicule léger'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	&#125; </span><span style="color:#D73A49">else</span><span style="color:#D73A49"> if</span><span style="color:#24292E"> (hauteur </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		return</span><span style="color:#032F62"> 'véhicule intermédiaire'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	&#125; </span><span style="color:#D73A49">else</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#D73A49">		return</span><span style="color:#032F62"> 'poids lourd'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}});var d=s(f,8);l(d,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> guess</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> prompt</span><span style="color:#24292E">(</span><span style="color:#032F62">'Entrez un nombre entre 1 et 10'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#6A737D">// ...</span></span>
<span class="line"><span style="color:#6F42C1">alert</span><span style="color:#24292E">(</span><span style="color:#032F62">'Bravo !'</span><span style="color:#24292E">);</span></span></code></pre>`);var m=s(d,6);c(m,{children:(e,r)=>{var a=E(),n=p(a);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> guessingGame</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> number</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">ceil</span><span style="color:#24292E">(Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 10</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">	let</span><span style="color:#24292E"> guess;</span></span>
<span class="line"><span style="color:#D73A49">	while</span><span style="color:#24292E"> (guess </span><span style="color:#D73A49">!==</span><span style="color:#24292E"> number) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		parseInt</span><span style="color:#24292E">(</span><span style="color:#6F42C1">prompt</span><span style="color:#24292E">(</span><span style="color:#032F62">'Entrez un nombre entre 1 et 10'</span><span style="color:#24292E">), </span><span style="color:#005CC5">10</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#6F42C1">	alert</span><span style="color:#24292E">(</span><span style="color:#032F62">'Bravo !'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">guessingGame</span><span style="color:#24292E">();</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}});var h=s(m,6);c(h,{children:(e,r)=>{var a=E(),n=p(a);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> factorial</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	switch</span><span style="color:#24292E"> (n) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		case</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#D73A49">		case</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#D73A49">			return</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">		default</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#D73A49">			return</span><span style="color:#24292E"> n </span><span style="color:#D73A49">*</span><span style="color:#6F42C1"> factorial</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}});var A=s(h,8);c(A,{children:(e,r)=>{var a=U(),n=s(p(a),2);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> average</span><span style="color:#24292E">(</span><span style="color:#E36209">numbers</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	let</span><span style="color:#24292E"> sum;</span></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">const</span><span style="color:#005CC5"> num</span><span style="color:#D73A49"> of</span><span style="color:#24292E"> numbers) &#123;</span></span>
<span class="line"><span style="color:#24292E">		sum </span><span style="color:#D73A49">+=</span><span style="color:#24292E"> num;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> num </span><span style="color:#D73A49">/</span><span style="color:#24292E"> numbers.</span><span style="color:#005CC5">length</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var P=s(n,4);l(P,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> average</span><span style="color:#24292E">(</span><span style="color:#E36209">numbers</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> numbers.</span><span style="color:#6F42C1">reduce</span><span style="color:#24292E">((</span><span style="color:#E36209">acc</span><span style="color:#24292E">, </span><span style="color:#E36209">n</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> acc </span><span style="color:#D73A49">+</span><span style="color:#24292E"> n, </span><span style="color:#005CC5">0</span><span style="color:#24292E">) </span><span style="color:#D73A49">/</span><span style="color:#24292E"> numbers.</span><span style="color:#005CC5">length</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}});var D=s(A,6);l(D,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> couleurs</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> [</span></span>
<span class="line"><span style="color:#032F62">	'rouge'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'vert'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'bleu'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'jaune'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'orange'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'violet'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'rose'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'marron'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'gris'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'noir'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'blanc'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'turquoise'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'indigo'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'beige'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'fuchsia'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'cyan'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'corail'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'chocolat'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'bordeaux'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'aquamarine'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'auburn'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'argent'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'améthyste'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'ambre'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'émeraude'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'ivoire'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'lavande'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'lilas'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'magenta'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'mauve'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'olive'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'or'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'pourpre'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'saumon'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'sépia'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'sienna'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'tan'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'turquoise'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'vermillon'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'violet'</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">	'zinzolin'</span></span>
<span class="line"><span style="color:#24292E">];</span></span></code></pre>`);var F=s(D,6);c(F,{children:(e,r)=>{var a=E(),n=p(a);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> searchColor</span><span style="color:#24292E">(</span><span style="color:#E36209">query</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> couleurs.</span><span style="color:#6F42C1">filter</span><span style="color:#24292E">((</span><span style="color:#E36209">c</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> c.</span><span style="color:#6F42C1">includes</span><span style="color:#24292E">(query));</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}});var x=s(F,8);l(x,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">document.body.style.fontFamily </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'monospace'</span><span style="color:#24292E">;</span></span></code></pre>`);var C=s(x,2),w=s(i(C),6),q=s(i(w),5);j(q,"src",z),u(w),u(C);var T=s(C,2);c(T,{children:(e,r)=>{var a=E(),n=p(a);l(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">// 1.</span></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> line</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#24292E">	document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'*'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n));</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 2.</span></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> triangle</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;=</span><span style="color:#24292E"> n; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		line</span><span style="color:#24292E">(i);</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 3.</span></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> square</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;=</span><span style="color:#24292E"> n; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		switch</span><span style="color:#24292E"> (i) &#123;</span></span>
<span class="line"><span style="color:#D73A49">			case</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#D73A49">			case</span><span style="color:#24292E"> n:</span></span>
<span class="line"><span style="color:#6F42C1">				line</span><span style="color:#24292E">(n);</span></span>
<span class="line"><span style="color:#D73A49">				break</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">			default</span><span style="color:#24292E">:</span></span>
<span class="line"><span style="color:#24292E">				document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'*'</span><span style="color:#D73A49"> +</span><span style="color:#032F62"> '°'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">				break</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 4.</span></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> diamond</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	function</span><span style="color:#6F42C1"> diamondLine</span><span style="color:#24292E">(</span><span style="color:#E36209">i</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (i </span><span style="color:#D73A49">===</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;</span><span style="color:#005CC5"> HEAD</span></span>
<span class="line"><span style="color:#6A737D">			// Si i = 1, on affiche une seule étoile, au centre</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x26;nbsp;'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">|||||||</span><span style="color:#24292E"> parent </span><span style="color:#D73A49">of</span><span style="color:#24292E"> 4</span><span style="color:#6F42C1">f6acb5</span><span style="color:#24292E"> (</span><span style="color:#6F42C1">feat</span><span style="color:#24292E">(style): add page transition)</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">" "</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> "*"</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">"&#x3C;br/>"</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">=======</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">' '</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">>>>>>>></span><span style="color:#24292E"> 4</span><span style="color:#6F42C1">f6acb5</span><span style="color:#24292E"> (</span><span style="color:#6F42C1">feat</span><span style="color:#24292E">(style): add page transition)</span></span>
<span class="line"><span style="color:#D73A49">			return</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#D73A49">&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;&#x3C;</span><span style="color:#005CC5"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x26;nbsp;'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x26;nbsp;'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(</span><span style="color:#005CC5">2</span><span style="color:#D73A49"> *</span><span style="color:#24292E"> (i </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">)) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">|||||||</span><span style="color:#24292E"> parent </span><span style="color:#D73A49">of</span><span style="color:#24292E"> 4</span><span style="color:#6F42C1">f6acb5</span><span style="color:#24292E"> (</span><span style="color:#6F42C1">feat</span><span style="color:#24292E">(style): add page transition)</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">"&#x26;nbsp;"</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> "*"</span><span style="color:#D73A49"> +</span><span style="color:#032F62"> "&#x26;nbsp;"</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(</span><span style="color:#005CC5">2</span><span style="color:#D73A49"> *</span><span style="color:#24292E"> i </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> "*"</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">"&#x3C;br/>"</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">=======</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x26;nbsp;'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(n </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#D73A49"> +</span><span style="color:#032F62"> '&#x26;nbsp;'</span><span style="color:#24292E">.</span><span style="color:#6F42C1">repeat</span><span style="color:#24292E">(</span><span style="color:#005CC5">2</span><span style="color:#D73A49"> *</span><span style="color:#24292E"> i </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 3</span><span style="color:#24292E">) </span><span style="color:#D73A49">+</span><span style="color:#032F62"> '*'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">write</span><span style="color:#24292E">(</span><span style="color:#032F62">'&#x3C;br/>'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">>>>>>>></span><span style="color:#24292E"> 4</span><span style="color:#6F42C1">f6acb5</span><span style="color:#24292E"> (</span><span style="color:#6F42C1">feat</span><span style="color:#24292E">(style): add page transition)</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;</span><span style="color:#24292E"> n; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		diamondLine</span><span style="color:#24292E">(i);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#6F42C1">	diamondLine</span><span style="color:#24292E">(n);</span></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#24292E"> n </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">></span><span style="color:#005CC5"> 0</span><span style="color:#24292E">; i</span><span style="color:#D73A49">--</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		diamondLine</span><span style="color:#24292E">(i);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(e,a)},$$slots:{default:!0}}),o(b,y),L()}export{Q as component};
