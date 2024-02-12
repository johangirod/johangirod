<script>
</script>

<section>
	<h1>Les événements du DOM</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	{#each [0, 1, 2] as i}
		<section data-auto-animate>
			<h1>Qu'est-ce qu'un événement ?</h1>
			<blockquote data-id="anim1">
				<span class:opacity-50={i && i !== 1} data-id="anim1"
					>Un événement est un signal déclenché par le navigateur,</span
				>
				<span class:opacity-50={i && i !== 2} data-id="anim1"
					>qui peut être écouté dans du code Javascript afin d'executer une action</span
				>.
			</blockquote>
			<aside class="notes">
				<ul>
					<li>
						L'utilisateur clique avec la souris sur un certain élément ou en place le curseur sur un
						certain élément.
					</li>
					<li>L'utilisateur appuie sur une touche du clavier.</li>
					<li>Une page web finissant de se charger.</li>
					<li>Un formulaire en cours de soumission</li>
					<li>Une vidéo en cours de lecture, en pause ou en fin de lecture.</li>
					<li>Une perte de connexion internet.</li>
				</ul>
			</aside>
			{#if i === 1}
				<pre><code class="language-html" data-trim data-noescape>
			<script type="text/template">
							<button id="mon-button">Click me</button>;
						</script>
			</code></pre>
			{/if}
			{#if i === 2}
				<pre><code class="language-js" data-trim data-noescape>
			<script type="text/template">
							const button = document.querySelector('#mon-button');
							button.addEventListener('click', () => {
								console.log('Button clicked!');
							});
						</script>
			</code></pre>
			{/if}
		</section>
	{/each}
</section>
<section>
	<section data-auto-animate>
		<h2>`.addEventListener(type, callback)`</h2>
		<ul>
			<li class="fragment">
				Est une méthode présente sur <strong>tous les éléments du DOM</strong>
			</li>
			<li class="fragment">
				<strong>`@param type: string`</strong> : le type d'événement à écouter (click, mouseover, keydown,
				etc.)
			</li>
			<li class="fragment">
				<strong>`@param callback: Function`</strong> : la fonction à appeler lorsque l'événement est
				déclenché
			</li>
		</ul>
	</section>
	<section data-auto-animate>
		<h2>`.addEventListener(type, callback)`</h2>
		<pre><code class="language-js" data-trim data-noescape>
			<script type="text/template">
					button.addEventListener('keydown', (event) => {
						console.log('Key pressed:', event.key);
					});
				</script>
		</code></pre>
	</section>
</section>
<section>
	{#each [0, 1, 2, 3] as i}
		<section data-auto-animate>
			<h2>Les évènements « bouillonnent » dans le DOM</h2>
			<p>
				Les évènements se propagent d'éléments en éléments, depuis la cible jusqu'à la racine du
				document
			</p>
			<pre><code class="language-html" data-trim data-line-numbers>
						<div id="parent">
							<span id="enfant">Element</span>
						</div>;
		</code></pre>
			{#if i !== 0}
				<pre data-id="anim1"><code class="language-js" data-trim data-noescape data-line-numbers>
				{#if i === 1}
							<script type="text/template">
								document.querySelector('#enfant').addEventListener('click', () => {
									console.log('Child clicked!');
								});
							</script>
						{/if}
			{#if i === 2}
							<script type="text/template">
								document.querySelector('#parent').addEventListener('click', () => {
									console.log('Parent clicked!');
								});
							</script>
						{/if}
			{#if i === 3}
							<script type="text/template">
								document.addEventListener('click', () => {
									console.log('Page clicked!');
								});
							</script>
						{/if}
</code></pre>
			{/if}
		</section>
	{/each}
	<section data-auto-animate>
		<h2>Les évènements « bouillonnent »</h2>

		<p>On peut accéder à l'élément cible de l'évènement avec la propriété `event.target`</p>

		<aside class="notes">
			<p>Que fait ce code ?</p>
		</aside>
		<pre data-id="anim1"><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					document.addEventListener('click', (event) => {
						event.target.style.fontWeight = 'bold';
					});
				</script>
		</code></pre>
	</section>
</section>
<section>
	<section>
		<h1>Les types d'évènements</h1>
	</section>
	<section>
		<h2>Les évènements de souris</h2>
		<ul>
			<li><strong>click</strong> : un clic simple</li>
			<li><strong>dblclick</strong> : un double clic</li>
			<li><strong>mouseenter</strong> : le curseur de la souris entre dans la zone de l'élément</li>
			<li><strong>mouseover</strong> : le curseur de la souris est dans la zone de l'élément</li>
			<li><strong>mouseleave</strong> : le curseur de la souris sort de la zone de l'élément</li>
		</ul>
		On peut récuperer la position de la souris avec les propriétés `event.clientX` et `event.clientY`
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent">`MouseEvent`</a>
	</section>
	<section>
		<h2>Les évènements de clavier</h2>
		<ul>
			<li><strong>keydown</strong> : une touche du clavier est enfoncée</li>
			<li><strong>keyup</strong> : une touche du clavier est relachée</li>
		</ul>
		<p>On peut récuperer la touche pressée avec la propriété `event.key`</p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent">`KeyboardEvent`</a>
	</section>
	<section>
		<h2>Les évènements de focus</h2>
		<ul>
			<li><strong>focus</strong> : un élément prend le focus</li>
			<li><strong>blur</strong> : un élément perd le focus</li>
		</ul>
	</section>
	<section>
		<h2>Les évènements de formulaire</h2>
		<ul>
			<li><strong>submit</strong> : un formulaire est soumis</li>
			<li><strong>change</strong> : la valeur d'un élément de formulaire change</li>
		</ul>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
</section>
