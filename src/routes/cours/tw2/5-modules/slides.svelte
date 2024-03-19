<script>
</script>

<section>
	<h1>Les modules en Javascript (ESModule)</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
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

	<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
				// Dans un fichier hello.js
				export function sayHello() {
					console.log('Hello world!');
				}

				export const helloStr = 'Hello world!';

				function sayGoodbye() {
					console.log('Goodbye world!');
				}
				export { sayGoodbye };
			</script>
	</code></pre>
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
		<li>Les noms des variables importées doivent être les mêmes que ceux exportés</li>
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
