<script>
	import RevealCode from '$lib/RevealCode.svelte';
</script>

<section>
	<h1>Modules et classes</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section>
		<h1>Les modules (ESModule)</h1>
	</section>
	<section>
		<h2>À quoi servent les modules ?</h2>
		<ul>
			<li>découper son code en plusieurs fichiers pour <strong>mieux s'y retrouver</strong></li>
			<li><strong>réutiliser</strong> du code d'un fichier à un autre</li>
			<li>cacher les <strong>détails d'implémentation</strong> (variables « privée »)</li>
		</ul>
	</section>
	<section>
		<h2>Exporter des variables</h2>

		<RevealCode>
			<script type="text/template">
				export const helloStr = 'Hello world!';
			</script>
		</RevealCode>
		<RevealCode>
			<script type="text/template">
				export function sayHello() {
					console.log('Hello world!');
				}
			</script>
		</RevealCode>
	</section>
	<section>
		<h2>Importer des variables</h2>

		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					// Dans un autre fichier
					import { sayHello, helloStr } from './hello.js';
				</script>
	</code></pre>
		<strong>à noter</strong>
		<ul>
			<li>Les instructions <code>import</code> doivent être au début du fichier</li>
			<li>
				Les noms des variables importées <strong>doivent être les mêmes que ceux exportés</strong>
			</li>
			<li>Le chemin du fichier est relatif au fichier qui importe</li>
		</ul>
	</section>
	<section>
		<h3>On peut renommer un import</h3>

		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					import { sayGoodbye as bye } from './hello.js';

					bye();
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Export par défaut</h2>

		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					// Dans un fichier hello.js
					export default function sayHello() {
						console.log('Hello world!');
					}
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Export par défaut</h2>

		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					// Dans un autre fichier
					import sayHelloFunction from './hello.js';
					sayHelloFunction();
				</script>
	</code></pre>
		<strong>À noter</strong>
		<ul>
			<li>On peut nommer la fonction importée comme on veut</li>
			<li>On ne peut avoir qu'un seul export par défaut par fichier</li>
			<li>
				Mais on peut mélanger les exports nommés et par défaut

				<pre class="fragment"><code class="language-js" data-trim data-noescape>
					<script type="text/template">
							import sayHelloFunction, { helloStr } from './hello.js';
						</script>
					</code></pre>
			</li>
		</ul>
	</section>
	<section>
		<h3>Les modules sont des singletons</h3>
		<p>Un module est « chargé » une seule fois, même si on l'importe plusieurs fois.</p>
		<pre><code class="language-js" data-trim data-noescape>
	<script type="text/template">
					// Dans un fichier hello.js
					export default randomNum = Math.random();
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Dans un navigateur</h2>
		<pre><code class="language-html" data-trim data-noescape>
		<script type="text/template">
					<script type="module" src="main.js" />;
				</script>
	</code></pre>
		<p>Les modules sont chargés de manière asynchrone, et sont exécutés dans l'ordre d'import.</p>
	</section>
</section>
<section>
	<section>
		<h1>Les classes en Javascript</h1>
	</section>
	<section>
		<h2>Créer une classe</h2>

		<pre><code class="language-js" data-trim data-noescape data-line-numbers="1-10|2-5|6-8|12">
		<script type="text/template">
					class Rectangle {
						constructor(height, width) {
							this.height = height;
							this.width = width;
						}

						area() {
							return this.height * this.width;
						}
					}

					const rect = new Rectangle(10, 20);
				</script>
</code></pre>
	</section>
	<section>
		<h2>Méthode static et propriétés privées</h2>

		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
		<script type="text/template">
					class Point {
						#x;
						#y;

						constructor(x, y) {
							this.#x = x;
							this.#y = y;
						}

						static distance(a, b) {
							const dx = a.#x - b.#x;
							const dy = a.#y - b.#y;

							return Math.hypot(dx, dy);
						}
					}

					const p1 = new Point(5, 5);
					const p2 = new Point(10, 10);

					const distance = Point.distance(p1, p2);
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Étendre une classe</h2>

		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
		<script type="text/template">
					class Square extends Rectangle {
						constructor(side) {
							super(side, side);
						}
					}

					const square = new Square(10);
				</script>
	</code></pre>
	</section>
</section>
