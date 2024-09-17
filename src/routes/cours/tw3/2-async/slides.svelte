<section>
	<h1><code>Promise</code> et fonctions <code>async</code></h1>
	<h2 class="text-pink-500">Technologie web 3</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section>
		<h2>Rappel : code asynchrone = callback</h2>
		<pre><code class="language-js" data-trim data-line-numbers>
        <script type="text/template">
					domNode.addEventListener('click', function () {
						console.log('click');
					});

					setTimeout(function () {
						console.log('timeout');
					}, 1000);
				</script>
</code></pre>
	</section>
	<section>
		<h2>Problème : callback hell</h2>
		<pre><code class="language-js" data-trim data-line-numbers>
        <script type="text/template">
					setTimeout(() => {
						console.log('A');
						setTimeout(() => {
							console.log('B');
							setTimeout(() => {
								console.log('C');
								setTimeout(() => {
									console.log('D');
								}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				</script>
</code></pre>
		<p>Les <code>Promise</code> (promesses) permettent de résoudre ce problème.</p>
	</section>
</section>
<section>
	<section>
		<h2>Utiliser une <code>Promise</code></h2>
		<p class="text-xl">
			Une promesse est un objet avec une méthode <code>then</code> qui prend un callback appelé une
			fois : quand la <strong>promesse est résolue</strong>.
		</p>

		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
                    function attendre(ms: number): Promise<void> {
                        // ...
                    }
                    
                    attendre(10ms).then(() => {
                        console.log(value);
                    });
				</script>
</code></pre>
	</section>
	<section>
		<h2>Enchainer les <code>Promise</code></h2>
		<p>
			Si on retourne une promesse dans un <code>.then()</code>, on peut enchainer les promesses.
		</p>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
                    attendre(100ms)
                        .then(() => {
                            console.log('A');
                            return attendre(100ms);
                        })
                        .then(() => {
                            console.log('B');
                            return attendre(100ms);
                        })
                        .then(() => {
                            console.log('C');
                        });
				</script>
</code></pre>
	</section>
	<section>
		<h2>Créer une <code>Promise</code></h2>
		<p>
			On utilise <code>new Promise</code>, un constructeur qui accepte une fonction avec un argument
			<code>resolve</code>
		</p>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					function attendre(ms: number): Promise<void> {
						return new Promise((resolve) => {
							setTimeout(resolve, ms);
						});
					}
				</script>
        </code></pre>
	</section>
	<section>
		<h2>Les promesses peuvent retourner des valeurs</h2>
		<p>
			On peut voir les promesse comme des <strong>boites</strong> qui contiennent une valeur qui existera
			dans le futur.
		</p>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					// Attend un nombre de seconde aléatoire (max 10) puis retourne le temps écoulé
					function attendreRandom(): Promise<number> {
						const ms = Math.random() * 10000;
						return new Promise((resolve) => {
							setTimeout(() => {
								resolve(ms);
							}, ms);
						});
					}

					attendreRandom().then((value) => {
						console.log(`Temps écoulé : ${value}ms`);
					});
				</script>
        </code></pre>
	</section>
	<section>
		<h2>Combiner les promesses - <code>Promise.all</code></h2>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					Promise.all([attendre(1000), attendre(3000)]).then(() => {
						console.log('Temps écoulé : ?');
					});
				</script>
        </code></pre>
		<p>
			Les promesses sont exécutées en parallèle, puis le <code>.then()</code> est appelé une fois que
			toutes les promesses sont résolues.
		</p>
	</section>
	<section>
		<h2>Combiner les promesses - <code>Promise.race</code></h2>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					Promise.race([attendre(1000), attendre(3000)]).then(() => {
						console.log('Temps écoulé : ?');
					});
				</script>
        </code></pre>
		<p>Le <code>.then()</code> est appelé dès que la première promesse est résolue.</p>
	</section>
</section>

<section>
	<section>
		<h2><code>async</code> / <code>await</code></h2>
		<p class="text-xl">
			Quand une fonction manipule des promesses, on peut utiliser <code>async</code> et
			<code>await</code> pour rendre le code plus lisible.
		</p>
		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					async function main() {
						await attendre(1000);
						console.log('A');
						await attendre(1000);
						console.log('B');
						await attendre(1000);
						console.log('C');
					}

					main();
				</script>
</code></pre>
	</section>
	<section>
		<p class="text-xl">
			Les fonctions <code>async</code> retournent une promesse, qui est résolue avec la valeur retournée.
		</p>

		<pre><code class="language-ts" data-trim data-line-numbers>
        <script type="text/template">
					async function main(): Promise<string> {
						await attendre(1000);
						return 'A';
					}

					main().then((value) => {
						console.log(value);
					});
				</script>
	</code></pre>
	</section>
	<section>
		<h2>A savoir</h2>
		<ul>
			<li>On peut utiliser <code>await</code> pour attendre n'importe quelle promesse</li>
			<li>
				Pour utiliser <code>await</code>, la fonction doit être déclarée avec <code>async</code>.
			</li>
			<li>On peut utiliser <code>await</code> dans une boucle ou dans une condition</li>
		</ul>
	</section>
</section>
<section>
	<h2>À vous de jouer !</h2>
</section>
