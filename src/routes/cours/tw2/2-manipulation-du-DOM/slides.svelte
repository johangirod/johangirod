<script>
	import domTreeSrc from './dom.png';
	import renderPipelineSrc from './rendering_pipeline.png';
</script>

<section>
	<h1>Manipulation du DOM</h1>
	<h2 class="text-pink-500">Technologie web 2</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section data-auto-animate="true">
		<h1>Qu'est-ce que le DOM ?</h1>
	</section>
	<section data-auto-animate="true">
		<h1>Qu'est-ce que le DOM ?</h1>
		<p class="fragment"><strong>Le DOM (Document Object Model) est une interface de programmation pour les documents HTML</strong></p>
		<ul>
			<li class="fragment">Le document est représenté sous forme d'arbre</li>
			<li class="fragment">Le DOM est implémenté par les navigateurs qui l'utilisent pour afficher la page</li>
			<li class="fragment">Le DOM est accessible aux programme JavaScript qui l'utilisent pour manipuler la page</li>
		</ul>
	</section>
	<section data-auto-animate>
		<h2>Le document est représenté sous forme d'arbre</h2>
		<pre><code class="language-html" data-trim>
<script type="text/template">
					<html>
						<head>
							<title>My title</title>
						</head>
						<body>
							<h1>A heading</h1>
							<a href="/">Link text</a>
						</body>
					</html>;
				</script>
</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Le document est représenté sous forme d'arbre</h2>
		<img src={domTreeSrc} alt="DOM tree" class="r-stretch" />
	</section>
	<section>
		<h2>Le DOM est implémentée par les navigateurs</h2>
		<div class="r-stretch">

			<img
			src={renderPipelineSrc}
			alt="Rendering pipeline : parsing, render tree, layout, paint"
			class="fragment"
			/>
		</div>
		<p class="text-4xl fragment"><strong>C'est l'étape de parsing</strong> (ou analyse syntaxique)</p>
		<h3 class="fragment">Ressources</h3>
		<ul>
			<li class="fragment">
				<a href="https://developer.chrome.com/blog/inside-browser-part3">
					Comment fonctionne le rendu sur chrome ? (en anglais)
				</a>
			</li>
			<li class="fragment">
				<a href="https://developer.mozilla.org/fr/docs/Web/Performance/How_browsers_work"
					>Comment fonctionne un navigateur ?</a
				>
			</li>
		</ul>
	</section>
	<section>
		<h2>Le DOM est accessible aux programme JavaScript qui l'utilisent pour manipuler la page</h2>
		<p>Le DOM est accessible via l'objet <code>document</code></p>
		<pre><code class="language-js" data-trim>
<script type="text/template">
					document.querySelector('h1').textContent = 'Hello world';
				</script>
</code></pre>
	</section>
</section>
<section>
	<section>
		<h1>L'API du DOM</h1>
	</section>
	<section>
		<h2>Récupérer des noeuds</h2>

		<pre><code class="language-js" data-trim
			data-line-numbers="1-4 | 6-9 | 11-16">
			>
<script type="text/template">
					/* Récupérer le premier noeud qui correspond au sélecteur CSS */
					document.querySelector('h1'); // Un objet de type HTMLElement
					document.querySelector('p.lead > strong');
					document.querySelector('input#my-id');

					/* Récupérer tous les noeuds qui correspondent au sélecteur */
					document.querySelectorAll('a[href^="http"]'); // Un objet de type NodeList, qui est un tableau d'HTMLElement
					document.querySelectorAll('p.lead > strong');

					/* Autres méthodes (moins utilisées) */
					document.getElementById('my-id');
					document.getElementsByClassName('my-class');
					document.getElementsByTagName('p');
					document.getElementsByName('my-name');
				</script>
</code></pre>
	</section>
	<section data-auto-animate>
		<h2>Lire et modifier les informations des noeuds</h2>
		<pre><code class="language-html" data-trim>
		<script type="text/template">
			<h1 class="text-4xl text-pink-500">
				Hello <em>world</em>
			</h1>;
		</script>
		</code></pre>
		<pre class="fragment">
			<code class="language-js" data-trim data-line-numbers="1-5 | 7-12">
				<script type="text/template">
					/* Lire le contenu */
					const h1 = document.querySelector('h1');
					h1.textContent; // "Hello world" (texte brut, sans les balises)
					h1.innerHTML; // "Hello <em>world</em>" (HTML avec les balises)
					h1.classList; // ["text-4xl", "text-pink-500"] (tableau des classes)

					/* Modifier le contenu */
					h1.textContent = 'Hello Jonhy'; // Remplace le contenu (sans les balises)
					h1.innerHTML = 'Hello <em>you!</em>'; // Remplace le contenu (avec des balises, attention aux failles XSS)
					h1.classList.add('text-4xl'); // Ajoute la classe
					h1.classList.remove('text-pink-500'); // Supprime la classe
					h1.classList.toggle('text-pink-500'); // Ajoute ou supprime la classe
				</script>
			</code>
		</pre>
	</section>
	<section data-auto-animate>
	<h2>Lire et modifier les informations des noeuds</h2>
	<pre><code class="language-html" data-trim>
		<script type="text/template">
			<h1 class="text-4xl text-pink-500">
				Hello <em>world</em>
			</h1>;
		</script>
	</code></pre>
	<pre><code class="language-js" data-trim data-line-numbers="1-2 | 4-8">
	/* Modifier le style */
	h1.style.backgroundColor = 'red';

	/* Lire et modifier les attributs */
	h1.setAttribute('data-id', 'my-id');
	h1.getAttribute('data-id'); // "my-id"
	a.href = 'https://google.com'; // Certains attributs sont accessibles et modifiables directement
	</code></pre>
	</section>
	<section>
		<h2>Créer des noeuds et les insérer dans le DOM</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-4 | 6-9 | 11-14">
			<script type="text/template">
					/* Créer un noeud */
					const myImg = document.createElement('img');
					myImg.src = 'https://picsum.photos/200/300';
					myImg.alt = 'Random image';

					/* Insérer ce noeud dans la page */
					document.body.appendChild(myLink); // Ajoute le noeud à la fin de la page
					const p = document.querySelector('p');
					p.appendChild(myLink); // Ajoute le noeud à la fin du paragraphe

					/*
					 * Note : il est également possible d'insérer un noeuds avec les
					 * méthodes  `insertBefore` et `insertAdjacentElement`
					 */
				</script>
		</code></pre>
	</section>
	<section data-auto-animate="true">
		<h2>Les attributs de formulaires</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-3 | 5-6 | 8-9 | 11-12">
			<script type="text/template">
					const input = document.querySelector('input');
					/* Récupérer la valeur d'un champ de formulaire */
					input.value; // "Hello world"

					/* Modifier la valeur d'un champ de formulaire */
					input.value = 'Hello Jonhy';

					/* Récupérer la valeur d'une case à cocher */
					input.checked; // true

					/* Réinitialiser un formulaire */
					document.querySelector('form#my-form').reset();
				</script>
		</code></pre>
	</section>
	<section>
		<h2>Supprimer et se déplacer entre les noeuds</h2>
		<pre><code class="language-js" data-trim data-line-numbers="1-2 | 4-7 | 9-11 | 13-22">
			<script type="text/template">
					/* Supprimer un noeud */
					document.querySelector('p.to-delete').remove();

					/* Remplacer un noeud */
					const newHeading = document.createElement('h1');
					newHeading.textContent = 'Hello world';
					document.querySelector('h1').replaceWith();
					
					/* Cloner un noeud */
					const elementToClone = document.querySelector('#a-cloner')
					const clonedElement = elementToClone.cloneNode(); 

					/* Se déplacer entre les noeuds (peu utilisé) */
					elem.previousElementSibling; // Le noeud précédent
					elem.nextElementSibling; // Le noeud suivant
					elem.parentElement; // Le noeud parent
					elem.firstChild; // Le premier noeud enfant
					elem.lastChild; // Le dernier noeud enfant
					elem.children; // Tous les noeuds enfants
				</script>
	</code></pre>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
