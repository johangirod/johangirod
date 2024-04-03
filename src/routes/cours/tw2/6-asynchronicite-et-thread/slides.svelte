<script>
	import asyncOrSync from './async_or_sync.png';
</script>

<section>
	<h1>Thread et asynchronicité</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>

<section>
	<section data-auto-animate="true">
		<h1>Synchrone ou asynchrone</h1>
	</section>
	<section data-auto-animate="true">
		<h1>Synchrone ou asynchrone</h1>

		<h2>Execution synchrone</h2>
		<ul>
			<li class="fragment">Chaque tache est exécutées l'une après l'autre</li>
			<li class="fragment">Le déroulé est bloqué tant qu'une tache n'est pas terminée</li>
		</ul>
	</section>
	<section data-auto-animate="true">
		<h1>Synchrone ou asynchrone</h1>

		<h2>Execution asynchrone</h2>
		<ul>
			<li class="fragment">Plusieurs tâches peuvent être lancées en même temps</li>
			<li class="fragment">
				Elles ne bloquent pas le déroulé, et d'autres événements peuvent être traités
			</li>
		</ul>
	</section>
	<section data-auto-animate="true">
		<h1>Synchrone ou asynchrone</h1>
		<img src={asyncOrSync} alt="Asynchrone ou synchrone" class="r-stretch" />
	</section>

	<section data-auto-animate="true">
		<h2>Quelques exemples</h2>
		<ul>
			<li class="fragment">
				Une conversation téléphonique ? <span class="fragment text-green-500">synchrone</span>
			</li>
			<li class="fragment">
				Une conversation par messagerie ? <span class="fragment text-green-500">asynchrone</span>
			</li>
			<li class="fragment">
				Un paiement à la caisse ? <span class="fragment text-green-500">synchrone</span>
			</li>
			<li class="fragment">
				Une préparation de repas ? <span class="fragment text-green-500">asynchrone</span>
			</li>
		</ul>
	</section>
	{#each [1, 2, 3, 4] as item}
		<section data-auto-animate>
			<h2>Quelques exemples</h2>
			<h3>Code synchrone ou asynchrone ?</h3>
			<pre><code class="language-js" data-trim data-noescape>
			{#if item === 1}
						<script type="text/template">
							const a = 1;
							const b = 2;
							const c = a + b;
						</script>
					{:else if item === 3}
						<script type="text/template">
							function main() {
								const a = fibonacci(10);
								console.log(a);
							}

							function fibonacci(n) {
								if (n <= 1) {
									return n;
								}
								return fibonacci(n - 1) + fibonacci(n - 2);
							}

							main();
						</script>
					{:else if item === 2}
						<script type="text/template">
							setTimeout(() => {
								console.log('Hello');
							}, 1000);
						</script>
					{:else if item === 4}
						<script type="text/template">
							let count = 0;
							document.addEventListener('click', () => {
								count++;
							});
						</script>
					{:else}
						<script type="text/template">
							const myArray = [1, 2, 3, 4, 5];
							myArray.forEach((i) => {
								console.log(i);
							});
						</script>
					{/if}
				</code></pre>
			{#if item === 5}
				<p class="fragment text-gray-500">
					En JavaScript, l'asynchronicité est gérée via <strong>des fonctions de rappel</strong> (callback)
				</p>
			{/if}
		</section>
	{/each}
</section>
<section>
	<section>
		<h1>Thread en JavaScript</h1>
	</section>
	<section data-auto-animate="true">
		<h2>Qu'est-ce qu'un thread ?</h2>
		<ul>
			<li class="fragment">Un thread est un fil d'exécution</li>
			<li class="fragment">Un programme peut avoir plusieurs threads</li>
			<li class="fragment">Chaque thread ne peut exécuter qu'une instruction à la fois</li>
		</ul>
	</section>
	<section>
		<h2>Thread et JavaScript</h2>
		<ul>
			<li class="fragment">
				Un programme JavaScript est executé dans un unique <strong>thread principal</strong> (« main
				thread »)<br />
				<small class="text-gray-500">Les instructions sont exécutées l'une après l'autre</small>
			</li>

			<li class="fragment">
				Ce thread est <strong>non bloquant</strong> (asynchrone)<br />
				<small class="text-gray-500"
					>Les instructions asynchrones ne bloquent pas le déroulé et sont exécutées en parallèle</small
				>
			</li>
			<li class="fragment">
				Les fonctions <strong>fonction de callback</strong> sont placées dans la
				<strong>file d'attente</strong>
				(« event loop&nbsp;»)
				<small class="text-gray-500"
					>Elles sont exécutées dès que le thread principal est disponible, dans l'ordre d'arrivée</small
				>
			</li>
		</ul>
	</section>

	<section>
		<h2>`setTimeout`</h2>
		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					function maFonctionDeRappel() {
						console.log('B');
					}
					console.log('A');
					setTimeout(maFonctionDeRappel, 100);
					setTimeout(() => {
						console.log('C');
					}, 0);
					console.log('D');
				</script>
			</code></pre>
		<p class="fragment text-gray-500">Le code est exécuté dans l'ordre A, D, C, B</p>
	</section>
	<section>
		<h2>`setTimeout`</h2>
		<pre><code class="language-js" data-trim data-noescape>
		<script type="text/template">
					console.log('A');
					const array = ['B', 'C'];
					array.forEach((item) => {
						setTimeout(() => {
							console.log(item);
						}, 0);
					});
					console.log('D');
				</script>
			</code></pre>
		<p class="fragment text-gray-500">Le code est exécuté dans l'ordre A, D, B, C</p>
	</section>

	<section>
		<h2>Perfomance</h2>
		<p>
			Si on effectue une tâche longue dans le thread principal, cela peut bloquer l'interface
			utilisateur, car les événements ne sont plus traités
		</p>
		<p class="fragment">
			Dans ce cas, il vaut mieux effectuer la tâche dans un autre thread : c'est le rôle des Web
			Workers
		</p>
	</section>
	<section>
		<h2>Callback hell</h2>
		<p>Lorsqu'on imbrique trop de fonctions de rappel, le code devient illisible</p>
		<pre><code class="language-js" data-trim data-noescape>
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
		<p class="fragment text-gray-500">
			Pour cela, il existe une fonctionnalité du langage : les promesse et les fonctions async/await
		</p>
		<p class="fragment text-gray-500">...que vous verrez l'année prochaine</p>
	</section>
</section>
