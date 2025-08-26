<script>
</script>

<section>
	<h1>Les événements du DOM</h1>
	<h2 class="text-pink-600">Technologie web 2</h2>
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
				<strong><code>type</code></strong> : le type d'événement à écouter (click, mouseover, keydown,
				etc.)
			</li>
			<li class="fragment">
				<strong><code>callback</code></strong> : la fonction appelée lorsque l'événement est détecté
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
				La plupart des évènements se propagent d'éléments en éléments, depuis la cible jusqu'à la
				racine du document
			</p>
			<pre><code class="language-html" data-trim data-line-numbers>
						<div id="parent">
							<button id="enfant">Bouton</button>
						</div>;
		</code></pre>
			{#if i !== 0}
				<pre data-id="anim1"><code class="language-js" data-trim data-noescape data-line-numbers>
				{#if i === 1}
							<script type="text/template">
								document.querySelector('#enfant').addEventListener('click', () => {
									console.log('Il y a eu un click dans l'élément #enfant');
								});
							</script>
						{/if}
			{#if i === 2}
							<script type="text/template">
								document.querySelector('#parent').addEventListener('click', () => {
									console.log('Il y a eu un click dans l'élément #parent');
								});
							</script>
						{/if}
			{#if i === 3}
							<script type="text/template">
								document.addEventListener('click', () => {
									console.log('Il y a eu un clique quelque part sur la page');
								});
							</script>
						{/if}
</code></pre>
			{/if}
		</section>
	{/each}
	<section data-auto-animate>
		<h2>Accéder à l'élément cible</h2>

		<p>
			On peut toujours accéder à l'élément cible de l'évènement avec la propriété <code
				>event.target</code
			>
		</p>

		<pre data-id="anim1"><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					document.addEventListener('click', (event) => {
						const elementCliqué = event.target;
						elementCliqué.style.fontWeight = 'bold';
					});
				</script>
		</code></pre>
	</section>
</section>
<section>
	<section>
		<h1>Les différents types d'évènements</h1>
	</section>
	<section>
		<h2>Les évènements de souris</h2>
		<ul>
			<li><strong><code>click</code></strong> : un clic simple</li>
			<li><strong><code>dblclick</code></strong> : un double clic</li>
			<li>
				<strong><code>mouseenter</code></strong> : le curseur de la souris entre dans la zone de l'élément
			</li>
			<li>
				<strong><code>mouseover</code></strong> : le curseur de la souris est dans la zone de l'élément
			</li>
			<li>
				<strong><code>mouseleave</code></strong> : le curseur de la souris sort de la zone de l'élément
			</li>
		</ul>
		<p class="text-gray-600">
			On peut récuperer la position de la souris avec les propriétés `event.clientX` et
			`event.clientY`
			<a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent">`MouseEvent`</a>
		</p>
	</section>
	<section>
		<h2>Les évènements de clavier</h2>
		<ul>
			<li><strong><code>keydown</code></strong> : une touche du clavier est enfoncée</li>
			<li><strong><code>keyup</code></strong> : une touche du clavier est relachée</li>
		</ul>
		<p class="text-gray-600">
			On peut récuperer la touche pressée avec la propriété <code>event.key</code> (voir la
			documentation de
			<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent">KeyboardEvent</a>)
		</p>
	</section>
	<section>
		<h2>Les évènements de focus</h2>
		<p class="lead">
			Lorsque l'utilisateur interagit avec un élément, ce dernier devient "actif" et reçoit le focus
		</p>
		<div class="m-auto w-fit rounded-lg border border-slate-200 bg-slate-100 px-8 py-6">
			<label
				>Votre nom :
				<input type="text" id="input" /></label
			>
		</div>
		<br />
		<ul>
			<li><strong><code>focus</code></strong> : l'élément reçoit le focus</li>
			<li><strong><code>blur</code></strong> : l'élément perd le focus</li>
		</ul>
	</section>
</section>
<section>
	<section>
		<h1>Formulaire et évènements</h1>
	</section>

	<section data-auto-animate="true">
		<h2>Rappel : les formulaires en HTML</h2>
		<pre><code class="language-html" data-trim data-noescape>
			<script type="text/template">
					<form>
						<label for="nom">Nom</label>
						<input type="text" id="nom" name="nom" />

						<label for="email">Email</label>
						<input type="email" id="email" name="email" />

						<button type="submit">Envoyer</button>
					</form>;
				</script>
		</code></pre>
	</section>
	<section>
		<div class="m-auto w-fit rounded-lg border border-slate-200 bg-slate-100 px-8 py-6">
			<label
				>Input :
				<input type="text" id="input" /></label
			>
		</div>
		<h2><code>&lt;input&gt;</code> et <code>&lt;textarea&gt;</code></h2>
		<ul class="fragment" data-fragment-index="1">
			<li>
				<strong><code>input</code></strong> : évènement lancé quand l'utilisateur tape du texte dans
				l'élément
			</li>
			<li><strong><code>change</code></strong> : lancé quand l'utilisateur a fini de taper</li>
			<li class="fragment" data-fragment-index="2">
				On peut récuperer la valeur saisie avec la propriété <strong
					><code>event.target.value</code></strong
				>
			</li>
		</ul>
		<br />

		<pre data-fragment-index="2" class="fragment"><code class="language-js" data-trim data-noescape>
			<script type="text/template">
					input.addEventListener('input', (event) => {
						console.log(event.target.value);
					});
				</script>
	</code></pre>
		<p class=" fragment text-sm text-gray-600">
			<a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/input"
				>Voir la documentation MDN</a
			>
		</p>
	</section>
	<section>
		<div class="m-auto w-fit rounded-lg border border-slate-200 bg-slate-100 px-8 py-6">
			<label
				>Checkbox :
				<input type="checkbox" /></label
			>
		</div>
		<h2><code>&lt;input type="checkbox"&gt;</code></h2>

		<ul>
			<li class="fragment">
				<strong><code>change</code></strong> : évènement lancé quand l'utilisateur coche ou décoche la
				case
			</li>
			<li class="fragment">
				On peut récuperer l'état de la case avec la propriété <code>event.target.checked</code>
			</li>
			<pre class="fragment"><code class="language-js" data-trim data-noescape>
			<script type="text/template">
						checkbox.addEventListener('change', (event) => {
							console.log(event.target.checked);
						});
					</script>
		</code></pre>
		</ul>
	</section>
	<section>
		<div class="m-auto w-fit rounded-lg border border-slate-200 bg-slate-100 px-8 py-6">
			<fieldset class="flex gap-4">
				<legend class="text-lg">Votre choix : </legend>
				<label> <input type="radio" name="radio" /> option 1</label>

				<label> <input type="radio" name="radio" /> option 2</label>
				<label> <input type="radio" name="radio" /> option 3</label>
			</fieldset>
		</div>
		<h2><code>&lt;input type="radio"&gt;</code></h2>
		<ul>
			<li class="fragment">
				<strong><code>change</code></strong> : évènement lancé quand l'utilisateur change d'option
			</li>
			<li class="fragment">
				On peut récuperer l'option choisie avec la propriété <code>event.target.checked</code>
			</li>
			<li class="fragment">
				On peut récuperer le nom du groupe de radio avec la propriété <code>event.target.name</code>
			</li>
		</ul>

		<p class="fragment text-sm text-gray-600">
			<a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/radio"
				>Voir la documentation sur MDN</a
			>
		</p>
	</section>
	<section>
		<div class="m-auto w-fit rounded-lg border border-slate-200 bg-slate-100 px-8 py-6">
			<select id="select" class="w-48">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</select>
		</div>
		<h2><code>&lt;select&gt;</code></h2>
		<ul>
			<li class="fragment">
				<strong><code>change</code></strong> : évènement lancé quand l'utilisateur change d'option
			</li>
			<li class="fragment">
				On peut récuperer l'option choisie avec la propriété <code>event.target.value</code>
			</li>
		</ul>
		<pre class="fragment"><code class="language-js" data-trim data-noescape>
			<script type="text/template">
					select.addEventListener('change', (event) => {
						console.log(event.target.value);
					});
				</script>
		</code></pre>
		<p class="fragment text-sm text-gray-600">
			<a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/select"
				>Voir la documentation sur MDN</a
			>
		</p>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
