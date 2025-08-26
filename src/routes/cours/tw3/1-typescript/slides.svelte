<script>
	import processJPG from './process.jpg';
</script>

<section>
	<h1>Introduction à Typescript</h1>
	<h2 class="text-pink-600">Technologie web 3</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section>
		<h2>Petit rappel</h2>
		<p class="text-xl">Javascript est un langage <strong>interprété...</strong></p>
		<p class="fragment text-xl">...et <strong>sans typage statique</strong></p>
		<pre class="fragment"><code class="language-js" data-trim data-line-numbers=""
				><script type="text/template">
					function add(a, b) {
						return a + b;
					}
					const result = add([1], (x) => x + 1);
				</script></code
			></pre>

		<aside class="notes">
			<p>Que veut dire interprété ?</p>
			<ul>
				<li>Le code est exécuté à la volée par un interpréteur (le navigateur)</li>
				<li>
					Par défaut, le code n'est pas compilé en amont (le code qui est écrit dans votre éditeur
					est celui envoyé au navigateur)
				</li>
				<li>Pas de vérification en amont</li>
			</ul>

			<p>Que veut dire sans typage statique ?</p>
			<ul>
				<li>
					Cela veut dire que le seul moyen de détecter des erreurs de type est d'executer le
					programme
				</li>
			</ul>
		</aside>
	</section>
	<section>
		<p>
			💥 Cela pose problème pour la <strong>maintenabilité</strong> et la
			<strong>robustesse</strong> des bases de codes.
		</p>
		<aside class="notes">
			<p>Maintenabilité : C'est la capacité d'un logiciel à être modifié facilement.</p>
			<p>
				Robustesse : C'est la capacité d'un logiciel à fonctionner correctement dans toutes les
				conditions.
			</p>

			<p>En gros, moins de type, plus de bug non repérés</p>
		</aside>
	</section>
	<section>
		<h2>Typescript</h2>
		<h3><a href="https://www.typescriptlang.org/">typescriptlang.org</a></h3>
		<ul>
			<li>Langage de programmation open-source développé par Microsoft</li>
			<li>Sur-ensemble de Javascript</li>
			<li>Permet de vérifier que le typage est bon</li>
			<li>Est compilé en Javascript</li>
		</ul>
		<div class="fragment">
			<hr />
			<pre><code class="language-js" data-trim data-line-numbers="1-3|5-7"
					><script type="text/template">
						const a = 6 - '12'; // Ce code ne compile pas en Typescript
					</script></code
				></pre>
		</div>
		<aside class="notes">
			<p>Pourquoi le code en exemple ne compile pas ?</p>
			<p>Aujourd'hui, quasiment tous les nouveaux projets JS utilisent Typescript.</p>
		</aside>
	</section>
	<section>
		<h2>Typescript dans un projet</h2>
		<img src={processJPG} alt="processus de compilation de typescript" />
		<aside class="notes">
			<ul>
				<li>Typescript est un compilateur, qui prend des fichiers `.ts` en entrée</li>
				<li>
					Ce compilateur est lancé dans votre IDE et affiche les erreurs de compilation au fur et à
					mesure
				</li>
				<li>
					Lorsque vous souhaitez publier votre projet, vous lancez la compilation pour générer les
					fichier JS sans les annotations de type
				</li>
				<li>
					Il est possible de spécifier des options au compilateur dans un fichier tsconfig.json
				</li>
			</ul>
		</aside>
	</section>
</section>

<section>
	<section>
		<h2>Syntaxe : déclaration</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-2|4-7|9-12"
				><script type="text/template">
					// Déclaration de variable
					const a: number = 5;

					// Déclaration de fonction
					function sayHello(name: string): string {
						return `Hello ${name}`;
					}

					// Déclaration de fonction anonymes (function fléchées)
					const printValue = (value: number): void => {
						console.log(value);
					};
				</script></code
			></pre>
		<p>
			Types de base : <code>number</code>, <code>string</code>, <code>boolean</code>,
			<code>void</code>, <code>undefined</code>, <code>null</code> et <code>void</code>
		</p>
	</section>
	<section>
		<h2>Syntaxe : type alias et union</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-2|4-6"
				><script type="text/template">
					// Type alias
					type NumberOrString = number | string;

					function printValue(value: NumberOrString): void {
						console.log(value);
					}
				</script></code
			></pre>
	</section>
	<section>
		<h2>Syntaxe : classes</h2>
		<pre><code class="language-js" data-trim data-line-numbers="3|4|6|1-14|16-18"
				><script type="text/template">
					// Déclaration
					class Person {
						private name: string;
						private age: number | undefined;

						constructor(name: string, age?: number) {
							this.name = name;
							this.age = age;
						}

						public sayHello(): string {
							return `Hello ${this.name}`;
						}
					}

					// Affectation
					const person: Person = new Person('Sarah', 25);
				</script></code
			></pre>
		<p>Il est possible de préciser des interfaces</p>
	</section>
	<section>
		<h2>Tableau et tuple</h2>
		<pre><code class="language-js" data-trim data-line-numbers=""
				><script type="text/template">
					// Tableau
					const numbers: Array<number> = [1, 2, 3]; // Tableau de nombre

					// Tuple
					const tuple: [boolean, boolean] = [true, false];
				</script></code
			></pre>
		<pre class="fragment"><code class="language-js" data-trim data-line-numbers="1-5"
				><script type="text/template">
					const tuple: [string, number] = ['test']; // Erreur
				</script></code
			></pre>

		<aside class="notes">Quel est la différence entre tableau et tuple ?</aside>
	</section>
	<section>
		<h2>Objets</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-6|8-10"
				><script type="text/template">
					// Objets
					type Personne = {
						id: number;
						name: string;
						birthDate?: Date;
					};

					function sayHello(person: Personne): string {
						return `Hello ${person.name}`;
					}
				</script></code
			></pre>
		<aside class="notes">
			<ul>
				<li>Personne est un type alias</li>
				<li>Attention, on termine avec le point virgule</li>
			</ul>
		</aside>
	</section>
	<section>
		<h2>Dictionnaire</h2>
		<p>
			Les dictionnaires sont une structure de donnée qui associe une <strong>clé</strong> à
			<strong>une valeur</strong>
		</p>
		<pre><code class="language-js" data-trim data-line-numbers=""
				><script type="text/template">
					type ComptePrénoms = Record<string, number>;

					const prénoms: ComptePrénoms = {
						Alice: 1,
						Bob: 2,
						Charlie: 3
					};
				</script></code
			></pre>
		<aside class="notes">
			<p>Quelle est la différence entre un objet et un dictionnaire ?</p>
			<ul>
				<li>Les clés d'un dictionnaires ne sont pas connues à l'avance</li>
				<li>Toutes les valeurs d'un dictionnaire sont du même type</li>
				<li>Ce sont les même objets en JS</li>
			</ul>
		</aside>
	</section>
	<section>
		<h2>Syntaxe - autres notions</h2>

		<ol>
			<li>
				<a href="https://www.typescriptlang.org/fr/docs/handbook/modules/reference.html"
					>Exporter et importer des types</a
				>
			</li>
			<li>
				<a href="https://www.typescriptlang.org/fr/docs/handbook/utility-types.html"
					>Helpers de types (`Exclude`, `NonNullable`, `Parameter`, ...)</a
				>
			</li>
			<li>
				<a href="https://www.typescriptlang.org/fr/docs/handbook/2/generics">Types génériques</a>
			</li>
		</ol>
	</section>
</section>
<section>
	<h2>À vous de jouer !</h2>
</section>
