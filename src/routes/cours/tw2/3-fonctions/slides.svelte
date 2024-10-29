<script>
</script>

<section>
	<h1>Utilisations des fonctions en Javascript</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section>
		<h1>Les fonctions en JavaScript</h1>
		<h2>Approfondissement</h2>
	</section>
	<section>
		<h2>Rappel : syntaxes pour écrire une fonction</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers="">
			<script type="text/template">
					function add1(a, b) {
						return a + b;
					}
					const add2 = (a, b) => {
						return a + b;
					};
					const add3 = (a, b) => a + b;
				</script>
		</code></pre>
	</section>
	{#each [0, 1, 1.1, 1.2, 2, 2.1, 3, 4] as i}
		<section data-auto-animate>
			<h2>Javascript est un langage fonctionnel</h2>
			{#if i === 0}<p class="pb-6 text-gray-500">
					Les fonctions sont des <strong>objets de première classe</strong>.
				</p>{/if}
			<aside class="notes">Comme OCAML</aside>
			<ol class:py-12={i === 4}>
				{#if i >= 1}<li class:opacity-50={i >= 2 && i !== 4}>
						Une fonction peut être <strong>assignées à une variable</strong>
					</li>{/if}
				{#if i >= 2}
					<li class:opacity-50={i >= 3 && i !== 4}>
						Une fonction peut être <strong>passée en paramètre</strong> d'une autre fonction
					</li>
				{/if}
				{#if i >= 3}
					<li>
						Une fonction peut être <strong>retournée par une fonction</strong>
					</li>
				{/if}
			</ol>
			{#if i === 1.1}
				<h3>Exemple 1</h3>
				<pre><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
							function sayHello() {
								console.log('Hello!');
							}
							const foo = sayHello; // la variable foo contient la fonction sayHello
							foo();
						</script>
			</code></pre>
			{/if}
			{#if i === 1.2}
				<h3>Exemple 2</h3>

				<pre><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
							const operations = {
								add: (a, b) => {
									return a + b;
								}
							};

							const addition = operations.add; // la variable addition contient une fonction
							addition(3, 2);
						</script>
		</code></pre>
			{/if}
			{#if i >= 2 && i < 3}
				<h3>Exemple 3</h3>

				<pre data-id="code-animation">
					<code class="language-js" data-trim data-noescape data-line-numbers>
						{#if i === 2}
							<script type="text/template">
								function repeat(n, callback) {
									for (let i = 0; i < n; i++) {
										callback();
									}
								}

								repeat(10, () => console.log('Hello!'));
							</script>
						{/if}
						{#if i === 2.1}
							<script type="text/template">
								function repeat(n, callback) {
									for (let i = 0; i < n; i++) {
										callback();
									}
								}
								const sayHello = () => console.log('Hello!');
								repeat(10, sayHello);
							</script>
						{/if}
					</code>
				</pre>
			{/if}
			{#if i === 3}
				<h3>Exemple 4</h3>

				<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
						<script type="text/template">
							function createSayHelloFunction(name) {
								return () => console.log(`Hello ${name}!`);
							}

							// la variable sayHelloToJohn contient une fonction
							const sayHelloToJohn = createSayHelloFunction('John');

							sayHelloToJohn();
						</script>;
				</code></pre>
			{/if}
			{#if i > 0 && i !== 4}<div class="r-stretch"></div>{/if}
		</section>
	{/each}

	<section data-auto-animate>
		<h2>Compile / compile pas ?</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const log = console.log;
					log('Hello!');
				</script>
		</code></pre>
		<p class="fragment text-green-500">Compile ✅</p>
	</section>
	<section data-auto-animate>
		<h2>Compile / compile pas ?</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
			<script type="text/template">
				function count(n, callback) => {
					for (let i = 0; i < n; i++) {
						callback(i);
					}
				}
				count(10, console.log);
				</script>
		</code></pre>
		<p class="fragment text-red-500">Compile pas ❌</p>
	</section>
	<section data-auto-animate>
		<h2>Compile / compile pas ?</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const sayHelloList = [];
					for (let name of ['Leila', 'Sarah', 'Sam']) {
						sayHelloList.push(() => {
							console.log(`Hello ${name}!`);
						});
					}
					sayHelloList[1]();
				</script>
		</code></pre>
		<p class="fragment text-green-500">Compile ✅</p>
	</section>
</section>
<section>
	<section>
		<h1>Manipulation de tableau</h1>
		<h2>En fonctionnel</h2>
	</section>
	<section>
		<h2>.forEach</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					names.forEach((name) => {
						console.log(`Hello ${name}!`);
					});
				</script>
		</code></pre>
	</section>
	<section>
		<h2>.map</h2>
		<pre><code class="language-javascript" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					const greetingList = names.map((name) => `Hello ${name}!`);
					console.log(greetingList); // ['Hello Leila!', 'Hello Sarah!', 'Hello Sam!']
				</script>
		</code></pre>
	</section>
	<section data-auto-animate>
		<h2>.filter</h2>
		<pre data-id="code-animation-2">
			<code class="language-js" data-trim data-noescape data-line-numbers>
						<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					const namesStartingWithS = names.filter((name) => name.startsWith('S'));

					console.log(namesStartingWithS); // ['Sarah', 'Sam']
				</script>
					
				</code></pre>
	</section>
	<section data-auto-animate>
		<h2>.find</h2>
		<pre>
		<code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const books = [
						{ title: '1984', author: 'George Orwell' },
						{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
						{ title: 'The Lord of the Rings', author: 'J. R. R. Tolkien' }
					];
					const book1984 = books.find((book) => book.title === '1984');
					console.log(book1984.author); // 'George Orwell'
				</script>
			</code></pre>
	</section>
	<section data-auto-animate>
		<h2>.sort</h2>
		<pre>
		<code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					const animals = ['cat', 'snake', 'elephant', 'horse', 'ant'];
					const sortedNames = names.sort(); // Trie alphabétique

					const sortByLength = (a, b) => a.length - b.length;
					const sortedNamesByLength = names.sort(sortByLength); // Trie par longueur
				</script>
			</code></pre>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>Dans l'ordre :</h2>
	<ol>
		<li>Finir le <a href="../2-manipulation-du-DOM">TP précédent</a></li>
		<li>Faire les exercices sur cette page</li>
	</ol>
</section>
