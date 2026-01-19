<script>
</script>

<section>
		<h1>Utilisations des fonctions en Javascript</h1>
		<h2 class="text-pink-600">Technologie web 2</h2>
		<p class="text-gray-500">Johan Girod</p>
</section>
<section>
		<section>
				<h1>Les fonctions en JavaScript</h1>
				<h2>Approfondissement</h2>
		</section>
		<section data-auto-animate>
				<h2>Rappel : syntaxes pour écrire une fonction</h2>
				<pre  data-id="code-animation-zdadahjzo"><code class="language-javascript" data-trim data-noescape=""><script type="text/template">
	              function add1(a, b) {
	                return a + b;
	              }
	              const add2 = (a, b) => {
	                return a + b;
	              };
						</script></code></pre>
		</section>
		<section data-auto-animate>
				<h2>Rappel : syntaxes pour écrire une fonction</h2>
				<pre data-id="code-animation-zdadahjzo"><code class="language-javascript" data-trim data-noescape=""><script type="text/template">
	              function add1(a, b) {
	                return a + b;
	              }
	              const add2 = (a, b) => {
	                return a + b;
	              };
	              const add3 = (a, b) => a + b;
						</script></code></pre>
		</section>
		{#each [0, 1, 1.1, 1.2, 2, 3, 4] as i}
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
								<pre><code class="language-js" data-trim data-noescape><script type="text/template">
	              function sayHello() {
	                console.log('Hello!');
	              }
	              const foo = sayHello;
	              foo();
						</script></code></pre>
						{/if}
						{#if i === 1.2}
								<h3>Exemple 2</h3>

								<pre><code class="language-js" data-trim data-noescape><script type="text/template">
	              const operations = {
	                add: (a, b) => {
	                  return a + b;
	                }
	              };

	              operations.add(2, 3);
						</script></code></pre>
						{/if}
						{#if i >= 2 && i < 3}
								<h3>Exemple 3</h3>

								<pre data-id="code-animation"><code class="language-js" data-trim data-noescape>{#if i === 2}<script type="text/template">
	                            function repeat(n, callback) {
	                              for (let i = 0; i < n; i++) {
	                                callback();
	                              }
	                            }

	                            repeat(10, () => console.log('Hello!'));
														</script>{/if}</code></pre>
						{/if}
						{#if i === 3}
								<h3>Exemple 4</h3>

								<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
	                          function createSayHelloFunction(name) {
	                            return () => console.log(`Hello ${name}!`);
	                          }

	                          const sayHelloToJohn = createSayHelloFunction('John');

	                          sayHelloToJohn();
												</script>;</code></pre>
						{/if}
						{#if i > 0 && i !== 4}<div class="r-stretch"></div>{/if}
				</section>
		{/each}

		<section data-auto-animate>
				<h2>Compile / compile pas ?</h2>
				<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
	              const log = console.log;
	              log('Hello!');
						</script></code></pre>
				<p class="fragment text-green-500">Compile ✅</p>
		</section>
		<section data-auto-animate>
				<h2>Compile / compile pas ?</h2>
				<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
	              function sayHello(name, printer) => {
	                printer(`Hello ${name}!`);
	              }
	              sayHello('John', console.log);
						</script></code></pre>
				<p class="fragment text-red-500">Compile pas ❌</p>
		</section>
		<section data-auto-animate>
				<h2>Compile / compile pas ?</h2>
				<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
	              function transformArray(array, transformation = value => value) {
	                const newArray = [];
	                for (const element of array) {
	                  newArray.push(transformation(element));
	                }
	                return newArray;
	              }
						</script></code></pre>
				<pre class="fragment"><code class="language-javascript" data-trim data-noescape><script type="text/template">
                  transformArray([1, 2, 3], value => value + 2) // ?;
                  transformArray([1, 2, 3]) // ?
						</script></code></pre>

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
				<p><em>Itérer sur le tableau</em></p>
				<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
                            const numbers = [1, 2, 3, 4, 5];
                            numbers.forEach((number) => {
                               console.log(number);
                            });
						</script></code></pre>
		</section>
		<section>
				<h2>.map</h2>
				<p><em>Transformer tous les éléments</em></p>

				<pre><code class="language-javascript" data-trim data-noescape><script type="text/template">
                            const numbers = [1, 2, 3, 4];
                            const doubled = numbers.map((number) => number * 2);
						</script></code></pre>
				<pre class="fragment"><code class="language-javascript" data-trim data-noescape><script type="text/template">
				[2, 4, 6, 8]
				</script></code></pre>
		</section>
		<section data-auto-animate>
				<h2>.filter</h2>
				<p><em>Enlever des éléments</em></p>
				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
                                const numbers = [2, 4, 6, 8];
                                const evenNumbers = numbers.filter((number) => number > 5);
							</script></code></pre>
				<pre class="fragment"><code class="language-javascript" data-trim data-noescape><script type="text/template">
				[6, 8]
				</script></code></pre>
		</section>
		<section data-auto-animate>
				<h2>.find</h2>
				<p><em>Rechercher un élément</em></p>
				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
	              const books = [
	                { title: '1984', author: 'George Orwell' },
	                { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
	                { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien' }
	              ];
				</script></code></pre>
				<pre class="fragment"><code class="language-js" data-trim data-noescape><script type="text/template">
	              const book1984 = books.find((book) => book.title === '1984');
	              console.log(book1984.author); // 'George Orwell'
				</script></code></pre>
		</section>
		<section data-auto-animate>
				<h2>.sort</h2>
				<p><em>Trier le tableau</em></p>
				<div class="fragment">
    				<h3>Par ordre alphabétique</h3>
    				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
    	              const animals = ['cat', 'snake', 'elephant', 'horse', 'ant'];
    	              animals.sort();
    				</script></code></pre>
				</div>
				<div class="fragment">
    				<h3>Par ordre croissant (nombre)</h3>
    				<pre class="fragment"><code class="language-js" data-trim data-noescape><script type="text/template">
     	              const number = [1, 2, 11, 3];
     	              number.sort(); // ❌❌❌
    				</script></code></pre>
				</div>
                <div  class="fragment">

				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
	                    [1, 11, 2, 3]
				</script></code></pre>
                </div>
		</section>
		<section data-auto-animate>
				<h2>.sort</h2>
				<p><em>Trier le tableau</em></p>
				<div >
    				<h3>Par ordre alphabétique</h3>
    				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
    	              const animals = ['cat', 'snake', 'elephant', 'horse', 'ant'];
    	              animals.sort();
    				</script></code></pre>
				</div>
				<div >
    				<h3>Par ordre croissant (nombre)</h3>
    				<pre  data-id="sort-asc"><code class="language-js" data-trim data-noescape><script type="text/template">
                      const number = [1, 2, 11, 3];
                      number.sort((a, b) => {
                        if (a < b) return -1;
                        if (a > b) return 1;
                        return 0;
                      });
    				</script></code></pre>
				</div>
		</section>
		<section data-auto-animate>
				<h2>.sort</h2>
				<p><em>Trier le tableau</em></p>
				<div >
    				<h3>Par ordre alphabétique</h3>
    				<pre><code class="language-js" data-trim data-noescape><script type="text/template">
    	              const animals = ['cat', 'snake', 'elephant', 'horse', 'ant'];
    	              animals.sort();
    				</script></code></pre>
				</div>
				<div >
    				<h3>Par ordre croissant (nombre)</h3>
    				<pre data-id="sort-asc"><code class="language-js" data-trim data-noescape><script type="text/template">
                      const number = [1, 2, 11, 3];
                      number.sort((a, b) => a - b);
    				</script></code></pre>
				</div>
		</section>
</section>
<section>
		<h1>À vous de jouer !</h1>
		<h2>Dans l'ordre :</h2>
		<ol>
				<li>Finir le <a href="../2-manipulation-du-DOM">TP précédent</a></li>
				<li>Faire les exercices sur cette page</li>
				<li>Faire les questions bonus du TP précédent</li>
		</ol>
</section>
