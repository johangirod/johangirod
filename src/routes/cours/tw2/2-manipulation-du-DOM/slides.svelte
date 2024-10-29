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
		<h1>Rappel sur les éléments HTML</h1>
	</section>
	<section>
		<h2>Squelette d'un document HTML</h2>
		<ul>
			<li>Un document HTML est composé d'éléments imbriqués les uns dans les autres</li>
			<li>Ces éléments sont délimités par des balises ouvrantes et fermantes.</li>
			<li>
				Les éléments racines sont <code>&lt;html&gt;</code>,
				<code>&lt;head&gt;</code>
				et <code>&lt;body&gt;</code>
			</li>
		</ul>
		<h3>Exemple de document</h3>
		<pre><code class="language-html" data-trim>
<script type="text/template">
					<html>
						<head>
							<title>Titre de la page</title>
						</head>
						<body>
							<h1>Mon titre</h1>
							<p>
								Un paragraphe
								<img src="image.jpg" alt="Une image" />
							</p>
						</body>
					</html>;
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Que trouve-t-on dans la balise <code>&lt;head&gt;</code> ?</h2>
		<div class="fragment lead text-2xl">
			<strong>Des métadonnées</strong> (tout ce qui n'est pas visible sur la page)
		</div>
		<ul class="fragment">
			<li>Le titre de la page <code>&lt;title&gt;</code></li>
			<li>
				Les feuilles de style <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>
			</li>
			<li>La description <code>&lt;meta name="description" content="..."&gt;</code></li>
			<li>L'encodage du document <code>&lt;meta charset="utf-8"&gt;</code></li>
			<li>Et bien d'autres (favicon, scripts, données pour les réseaux sociaux, etc.)</li>
		</ul>
	</section>
	<section>
		<style>
			.fragment.grow-width {
				display: inline-flex;
				width: 0;
				opacity: 0;
				overflow: hidden;
				max-width: 0;
				transition: all 0.5s;
				white-space: nowrap;
			}
			.fragment.grow-width.visible {
				width: auto;
				width: calc-size(auto);
				opacity: 1;
				max-width: 400px;
			}
		</style>
		<h2>Anatomie d'une balise</h2>
		<div class="flex flex-col items-center gap-8">
			<div class="font-mono text-3xl">
				<span class="fragment custom grow-width" data-fragment-index="1">
					&lt;<span class="font-bold text-blue-500">a</span>
					<span class="fragment custom grow-width" data-fragment-index="3">
						<span class="ml-2">
							<span class="italic text-purple-500">class</span>=<span class="text-green-500"
								>"ma-class"</span
							>
						</span>
						<span class="ml-2">
							<span class="italic text-purple-500">href</span>=<span class="text-green-500"
								>"/"</span
							>
						</span>
					</span>
					&gt;
				</span>

				<span class="fragment custom grow-width mx-2" data-fragment-index="2"
					>Revenir à l'accueil</span
				>

				<span class="fragment custom grow-width" data-fragment-index="1"
					>&lt;/<span class="font-bold text-blue-500">a</span>&gt;</span
				>
			</div>
			<div class="text-2xl italic text-gray-600">
				<span class="fragment custom grow-width" data-fragment-index="1">Nom de l'élément</span>
				<span class="fragment custom grow-width" data-fragment-index="3">⋅ Attributs</span>
				<span class="fragment custom grow-width" data-fragment-index="2">⋅ Contenu</span>
			</div>
		</div>
	</section>
</section>

<section>
	<section data-auto-animate="true">
		<h1>Qu'est-ce que le DOM ?</h1>
	</section>
	<section data-auto-animate="true">
		<h1>Qu'est-ce que le DOM ?</h1>
		<p class="lead" style="font-size: 1.8rem; line-height: 1.5">
			Le DOM (Document Object Model) est une
			<strong>interface de programmation pour manipuler des documents HTML</strong>
			en Javascript
		</p>
		<br />
		<ul class="small text-gray-600">
			<li class="fragment">Le document HTML est représenté sous <strong>forme d'arbre</strong></li>
			<li class="fragment"><strong>Tous les navigateurs</strong> implémentent le DOM</li>
			<li class="fragment">
				Les scripts JavaScript l'utilisent pour <strong>lire et modifier</strong> le document HTLM
			</li>
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
		<p class="fragment text-4xl">
			<strong>C'est l'étape de parsing</strong> (ou analyse syntaxique)
		</p>
		<div class="fragment">
			<h3>Ressources</h3>
			<ul>
				<li>
					<a href="https://developer.chrome.com/blog/inside-browser-part3">
						Comment fonctionne le rendu sur chrome ? (en anglais)
					</a>
				</li>
				<li>
					<a href="https://developer.mozilla.org/fr/docs/Web/Performance/How_browsers_work"
						>Comment fonctionne un navigateur ?</a
					>
				</li>
			</ul>
		</div>
	</section>
	<section>
		<h2>Accéder au DOM en JavaScript</h2>
		<p>Le DOM est accessible via l'objet global <code>document</code></p>
		<pre class="fragment"><code class="language-js" data-trim>
			<script type="text/template">
					document.write('Hello world');
				</script>
			
</code></pre>
		<p class="fragment">
			Cet objet contient des <strong>propriétés et des méthodes</strong> pour manipuler le document
		</p>
		<pre class="fragment"><code class="language-js" data-trim>
			<script type="text/template">
					document.title = 'Mon nouveau titre';
				</script>
	</code></pre>
	</section>
</section>
<section>
	<section>
		<h1>L'API du DOM</h1>
	</section>
	<section>
		<h2>Récupérer un élément (noeud de l'arbre)</h2>
		<h3 style="font-size: 2rem"><code>document.querySelector("...")</code></h3>
		<br />

		<pre><code class="language-js" data-trim>
			>
<script type="text/template">
					document.querySelector('h1');
					document.querySelector('#my-id');
					document.querySelector('p.lead > strong');
				</script>
</code></pre>
		<p class="text-gray-600">
			Renvoie le premier élément correspondant au sélecteur CSS. <br />Retourne <code>null</code> si
			aucun élément n'est trouvé.
		</p>
	</section>

	<section data-auto-animate>
		<h2 data-id="text">
			<span>Lire le contenu</span>
		</h2>
		<h3>Code HTML</h3>
		<pre><code class="language-html" data-trim>
		<script type="text/template">
					<h1>
						Hello <em>world</em>y
					</h1>;
				</script>
		</code></pre>
		<h3>Code JavaScript</h3>
		<pre data-id="pre-code">
			<code class="language-js" data-trim>
				<script type="text/template">
					// 1. Récupérer l'élément h1 dans la variable element
					const element = document.querySelector('h1');

					// 2. Lire les informations
					const titre = element.textContent; // "Hello world"
					const titreHTML = element.innerHTML; // "Hello <em>world</em>"
				</script>
			</code>
		</pre>
	</section>
	<section data-auto-animate>
		<h2 data-id="text">Modifier le contenu</h2>
		<h3>Code HTML</h3>

		<pre><code class="language-html" data-trim>
		<script type="text/template">
					<h1>
						Hello <em>world</em>y
					</h1>;
				</script>
		</code></pre>
		<h3>Code JavaScript</h3>
		<pre data-id="pre-code">
			<code class="language-js" data-trim>
				<script type="text/template">
					// Méthode préférée : remplacer le contenu texte
					element.textContent = 'Hello Jonhy';

					// Remplace le HTML (à utiliser avec précaution)
					element.innerHTML = 'Hello <em>you!</em>';
				</script>
			</code>
		</pre>
	</section>
	<section>
		<h2 data-id="text">Lire et modifier les classes CSS</h2>
		<h3>Code HTML</h3>
		<pre><code class="language-html" data-trim>
				<script type="text/template">
					<h1 class="text-4xl text-pink-500">Titre</h1>;
				</script>
					</code></pre>

		<h3>Code JavaScript</h3>

		<pre><code class="language-js" data-trim>
						<script type="text/template">
					const classes = element.classList;
					// ["text-4xl", "text-pink-500"] (liste des classes)

					const isPink = classes.contains('text-pink-500'); // true
				</script>
						</code></pre>
		<pre class="fragment"><code class="language-js" data-trim>
		<script type="text/template">
					element.classList.add('font-bold'); // Ajoute la classe
					element.classList.remove('text-4xl'); // Supprime la classe
					element.classList.toggle('text-pink-500');
				</script>
	</code></pre>
	</section>

	<section data-auto-animate>
		<h2 data-id="text">Lire et modifier le style CSS</h2>
		<h3>Code JavaScript</h3>
		<pre data-id="pre-code"><code class="language-js" data-trim>
	const color = element.style.color;

	element.style.fontSize = '2rem';
		</code></pre>
	</section>
	<section data-auto-animate>
		<h2 data-id="text">Lire et modifier des attributs</h2>
		<h3>Code JavaScript</h3>
		<pre data-id="pre-code"><code class="language-js" data-trim>
	/* Lire et modifier les attributs : méthode générique */
	const placeholder = element.getAttribute('placeholder'); 
	element.setAttribute('src', 'image.jpg');

	/* Lire et modifier les attributs : accesseur direct
	 (dans certains cas seulement) */
	const valeur = input.value;
	a.href = 'https://google.com';
	</code></pre>
	</section>
	<section>
		<h2>Ajouter des nouveaux noeuds dans le DOM</h2>
		<h3>1. Créer un noeud</h3>
		<pre data-id="pre-code"><code class="language-js" data-trim>
			<script type="text/template">
					const myImg = document.createElement('img');
					myImg.src = 'https://picsum.photos/200/300';
					myImg.alt = 'Random image';
				</script>
		</code></pre>
		<div class="fragment">
			<h3>2. Insérer un noeud</h3>
			<pre data-id="pre-code"><code class="language-js" data-trim>
			<script type="text/template">
						// En fin de page
						document.body.appendChild(myImg);

						// A la fin d'un élément
						const p = document.querySelector('p');
						p.appendChild(myLink);
					</script>
	</code></pre>
		</div>
		<p class="fragment">
			<strong class="text-pink-500">Attention !</strong> Un noeud doit être inséré pour être visible
			sur la page. Sinon, il n'existe que dans la mémoire de l'ordinateur.
		</p>
	</section>
	<section>
		<h2>Supprimer, cloner, remplacer un élément</h2>
		<pre><code class="language-js" data-trim>
			<script type="text/template">
					/* Supprimer un noeud */
					element.remove();

					/* Cloner un noeud */
					const newHeading = document.querySelector('h1').cloneNode();

					/* Remplacer un noeud */
					newHeading.textContent = 'Hello world';
					document.querySelector('h1').replaceWith(newHeading);
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Se déplacer dans le DOM</h2>
		<p>
			Le DOM est un arbre, on peut se déplacer d'un noeud à l'autre avec les propriétés suivantes :
		</p>
		<pre><code class="language-js" data-trim="">
		<script type="text/template">
					elem.previousElementSibling; // Le noeud précédent
					elem.nextElementSibling; // Le noeud suivant
					elem.parentElement; // Le noeud parent
					elem.firstChild; // Le premier noeud enfant
					elem.lastChild; // Le dernier noeud enfant
					elem.children; // Tous les noeuds enfants
				</script>
	</code></pre>
	</section>
	<section>
		<h2>Récupérer une liste d'élément</h2>
		<h3 style="font-size: 2rem"><code>document.querySelectorAll("...")</code></h3>
		<br />

		<pre><code class="language-js" data-trim>
			>
<script type="text/template">
					const imgList = document.querySelectorAll('img');
					const firstImg = imgList[0];
				</script>
</code></pre>
		<p class="text-gray-600">
			Renvoie une collection (<code>NodeList</code>) de tous les éléments correspondant au sélecteur
			CSS.
		</p>
		<pre class="fragment"><code class="language-js" data-trim>
			<script type="text/template">
					// Parcourir la liste : méthode fonctionelle
					imgList.forEach((img) => {
						img.classList.add('border-2');
					});

					// Parcourir la liste : méthode itérative
					for (const img of imgList) {
						img.classList.add('border-2');
					}
				</script>
	</code></pre>
	</section>
	<section>
		<h2><code>NodeList</code> : pas tout à fait un tableau</h2>
		<p>
			L'objet retourné par <code>querySelectorAll</code> n'est
			<strong>pas un tableau JavaScript classique</strong>.
		</p>
		<p>
			Pour utiliser les méthodes de tableau (<code>filter</code>, <code>find</code> etc.), il faut
			d'abord le
			<strong>convertir en tableau</strong>&nbsp;:
		</p>
		<pre><code class="language-js" data-trim>
			<script type="text/template">
					const imgNodeList = document.querySelectorAll('img');
					const imgArray = Array.from(imgNodeList);
				</script>
	</code></pre>
	</section>
</section>
<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
