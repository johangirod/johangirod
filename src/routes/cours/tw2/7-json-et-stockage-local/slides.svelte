<script>
</script>

<section>
	<h1>Stockage côté client</h1>
	<h2 class="text-pink-600">
		JSON, <code>localStorage</code>
		et
		<code>sessionStorage</code>
	</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>

<section>
	<section>
		<h1>Le format JSON</h1>
	</section>
	<section data-auto-animate="true">
		<h2>Qu'est-ce que JSON ?</h2>
		<p class="lead">JavaScript Object Notation</p>
		<ul>
			<li class="fragment">Format de données <strong>textuel</strong> et <strong>léger</strong></li>
			<li class="fragment">Basé sur la <strong>syntaxe des objets</strong> en JavaScript</li>
			<li class="fragment">
				Utilisé pour <strong>échanger des données</strong> entre applications
			</li>
		</ul>
	</section>
	<section data-auto-animate="true">
		<h2>Syntaxe JSON</h2>
		<ul>
			<li>Un objet : ensemble de paires clé/valeur</li>
			<li>Un tableau : collection ordonnée de valeurs</li>
		</ul>
		<pre><code class="language-json" data-trim data-noescape
				><script type="text/template">
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "swimming", "coding"],
  "address": {
    "street": "123 Main St",
    "city": "Paris",
    "country": "France"
  }
}
				</script></code
			></pre>
	</section>
	<section data-auto-animate="true">
		<h2>Types de données de base</h2>
		<ul>
			<li>
				<strong>Chaînes de caractères</strong> : entourées de guillemets doubles
				<code>"Hello world"</code>
			</li>
			<li class="fragment">
				<strong>Nombres</strong> : entiers ou décimaux
				<code>42, 3.14</code>
			</li>
			<li class="fragment">
				<strong>Booléens</strong> :
				<code>true</code>, <code>false</code>
			</li>
			<li class="fragment">
				<strong><code>null</code></strong> : valeur spéciale
			</li>
		</ul>
	</section>
	<section>
		<h2>Différences avec JavaScript</h2>
		<ul>
			<li>Les <strong>noms des propriétés</strong> doivent être entre guillemets doubles</li>
			<li>Pas de <strong>commentaires</strong></li>
			<li>Pas de <strong>fonctions</strong> ou de <strong>méthodes</strong></li>
			<li>Pas de <strong>undefined</strong> (utiliser null à la place)</li>
			<li>Pas de type <code>Date</code></li>
		</ul>
	</section>
	<section>
		<h2>Transformer des données en JSON</h2>
		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					const person = {
						name: 'Alice',
						age: 25,
						hobbies: ['swimming', 'reading']
					};

					// Transformer en chaîne JSON
					const jsonString = JSON.stringify(person);
					console.log(jsonString);
					// '{"name":"Alice","age":25,"hobbies":["swimming","reading"]}'
				</script></code
			></pre>
	</section>
	<section>
		<h2>Transformer du JSON en objet JavaScript</h2>
		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					const jsonString = '{"name":"Alice","age":25,"hobbies":["swimming","reading"]}';

					// Transformer en objet JavaScript
					const person = JSON.parse(jsonString);
					console.log(person.name); // Alice
					console.log(person.hobbies[0]); // swimming
				</script></code
			></pre>
	</section>
</section>

<section>
	<section>
		<h1>Stockage côté client</h1>
		<h2 class="text-pink-600">
			<code>localStorage</code>
			et
			<code>sessionStorage</code>
		</h2>
	</section>
	<section>
		<h2>Pourquoi stocker des données côté client ?</h2>
		<ul>
			<li class="fragment">Conserver des <strong>préférences utilisateur</strong></li>
			<li class="fragment">Mémoriser l'<strong>état d'une application</strong></li>
			<li class="fragment">Stocker des données <strong>hors connexion</strong></li>
			<li class="fragment">
				Améliorer la <strong>confidentialité</strong> et la <strong>performance</strong> en limitant
				les données envoyées au serveur
			</li>
		</ul>
	</section>
	<section>
		<h2>Les technologies de stockage</h2>

		<!-- Remplacement de l'image par un tableau HTML stylisé -->
		<div class="overflow-hidden text-sm">
			<table class="w-full table-auto">
				<thead>
					<tr class="bg-gray-100">
						<th class="border border-gray-300 p-3">Technologie</th>
						<th class="border border-gray-300 p-3">Capacité</th>
						<th class="border border-gray-300 p-3">Complexité</th>
						<th class="border border-gray-300 p-3">Type de données</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border border-gray-300 p-3">Cookies</td>
						<td class="border border-gray-300 p-3">~4Ko</td>
						<td class="border border-gray-300 p-3">Simple</td>
						<td class="border border-gray-300 p-3">Texte</td>
					</tr>
					<tr class="bg-sky-50 font-bold">
						<td class="border border-gray-300 p-3">localStorage</td>
						<td class="border border-gray-300 p-3">~5Mo</td>
						<td class="border border-gray-300 p-3">Simple</td>
						<td class="border border-gray-300 p-3">Texte</td>
					</tr>
					<tr class="bg-sky-50 font-bold">
						<td class="border border-gray-300 p-3">sessionStorage</td>
						<td class="border border-gray-300 p-3">~5Mo</td>
						<td class="border border-gray-300 p-3">Simple</td>
						<td class="border border-gray-300 p-3">Texte</td>
					</tr>
					<tr>
						<td class="border border-gray-300 p-3">IndexedDB</td>
						<td class="border border-gray-300 p-3">Sans limite pratique</td>
						<td class="border border-gray-300 p-3">Complexe</td>
						<td class="border border-gray-300 p-3">Variés (objets, fichiers...)</td>
					</tr>
					<tr>
						<td class="border border-gray-300 p-3">Cache API</td>
						<td class="border border-gray-300 p-3">Variable</td>
						<td class="border border-gray-300 p-3">Moyenne</td>
						<td class="border border-gray-300 p-3">Requêtes/Réponses</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<section>
		<h2>Comparaison localStorage et sessionStorage</h2>
		<div class="overflow-hidden text-lg text-gray-800">
			<table class="w-full table-auto">
				<thead>
					<tr>
						<th class="border border-gray-300 p-3"></th>
						<th class="border border-gray-300 p-3">localStorage</th>
						<th class="border border-gray-300 p-3">sessionStorage</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="border border-gray-300 p-3 font-bold">Durée</td>
						<td class="border border-gray-300 p-3">Permanent</td>
						<td class="border border-gray-300 p-3">Temporaire, jusqu'à fermeture de l'onglet</td>
					</tr>
					<tr>
						<td class="border border-gray-300 p-3 font-bold">Portée</td>
						<td class="border border-gray-300 p-3">Onglets de même origine*</td>
						<td class="border border-gray-300 p-3">Uniquement l'onglet courant</td>
					</tr>

					<tr>
						<td class="border border-gray-300 p-3 font-bold">Valeurs</td>
						<td class="border border-gray-300 p-3" colspan="2"
							>Uniquement des chaînes de caractères</td
						>
					</tr>
					<tr>
						<td class="border border-gray-300 p-3 font-bold">API</td>
						<td class="border border-gray-300 p-3" colspan="2">Identique</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="text-sm text-gray-600">
			* Une <strong>origine</strong> correspond à un domaine (ou sous-domaine) + protocole + port
		</p>
	</section>
</section>

<section>
	<section>
		<h1>Utilisation de localStorage</h1>
	</section>
	<section>
		<h2>Stocker une donnée</h2>
		<p><code>localStorage.setItem(key, value)</code></p>
		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Stockage d'une valeur simple
					localStorage.setItem('username', 'alice');
					localStorage.setItem('isLoggedIn', 'false');
					localStorage.setItem('lastVisit', new Date().toString());

					// Stockage d'un objet (doit être transformé en chaîne)
					const user = {
						id: 123,
						name: 'Alice',
						role: 'admin'
					};

					localStorage.setItem('currentUser', JSON.stringify(user));
				</script></code
			></pre>
	</section>
	<section>
		<h2>Récupérer une donnée</h2>
		<p><code>localStorage.getItem(key)</code></p>

		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Récupérer une valeur simple
					const username = localStorage.getItem('username');
					console.log(username); // 'alice'

					// Attention : tout est stocké sous forme de chaîne
					const isLoggedIn = localStorage.getItem('isLoggedIn');
					console.log(isLoggedIn); // 'false' (chaîne de caractères, pas un booléen)

					// Conversion de types si nécessaire
					const isLoggedInBool = localStorage.getItem('isLoggedIn') === 'true';
					console.log(isLoggedInBool); // false (booléen)
				</script></code
			></pre>
	</section>
	<section>
		<h2>Récupérer un objet JSON</h2>
		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Récupérer et parser un objet JSON
					const userJSON = localStorage.getItem('currentUser');
					const user = JSON.parse(userJSON);

					console.log(user.name); // 'Alice'
					console.log(user.role); // 'admin'

					// Gestion des erreurs
					try {
						const data = JSON.parse(localStorage.getItem('invalidJSON'));
						// Utiliser data
					} catch (error) {
						console.error('Erreur de parsing JSON:', error);
					}
				</script></code
			></pre>
	</section>
	<section>
		<h2>Supprimer des données</h2>
		<p><code>localStorage.removeItem(key)</code></p>

		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Supprimer une entrée spécifique
					localStorage.removeItem('username');

					// Supprimer toutes les entrées
					localStorage.clear();
				</script></code
			></pre>
	</section>
</section>

<section>
	<section>
		<h1>Utilisation de sessionStorage</h1>
	</section>
	<section>
		<h2>API identique à localStorage</h2>
		<p>sessionStorage utilise exactement la même API que localStorage</p>
		<pre><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Stocker une valeur
					sessionStorage.setItem('searchQuery', 'JavaScript tutorial');

					// Récupérer une valeur
					const query = sessionStorage.getItem('searchQuery');

					// Supprimer une valeur
					sessionStorage.removeItem('searchQuery');

					// Tout effacer
					sessionStorage.clear();
				</script></code
			></pre>
	</section>
	<section>
		<h2>Exemple d'utilisation</h2>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h3>localStorage</h3>
				<ul>
					<li>Préférences utilisateur (thème choisi, etc)</li>
					<li>Tokens d'authentification</li>
					<li>Panier d'achat</li>
					<li>Données de formulaires longs</li>
				</ul>
			</div>
			<div>
				<h3>sessionStorage</h3>
				<ul>
					<li>Données temporaires de formulaires</li>
					<li>États d'interface utilisateur</li>
					<li>Valeurs de filtres de recherche</li>
					<li>Dernière position de défilement</li>
				</ul>
			</div>
		</div>
	</section>
</section>

<section>
	<section>
		<h1>Points importants</h1>
	</section>
	<section>
		<h2>Limites et considérations</h2>
		<ul>
			<li class="fragment">
				<strong>Synchrone</strong> : les opérations bloquent le thread principal
			</li>
			<li class="fragment">
				<strong>Stockage limité</strong> : 5 Mo par domaine en général
			</li>
			<li class="fragment">
				<strong>Persistence limitées</strong> : les données peuvent être effacées par l'utilisateur ou
				le navigateur et ne sont pas synchronisées entre les appareils
			</li>
			<li class="fragment">
				<strong>Données en clair</strong> : les données sont stockées en clair et peuvent être lues par
				des scripts tiers
			</li>
		</ul>
	</section>
	<section>
		<h2>Bonnes pratiques</h2>
		<ul>
			<li>
				Utiliser des <strong>préfixes</strong> pour organiser les clés<br />
				<p><code>localStorage.setItem('appTheme:dark', 'true');</code></p>
			</li>
			<li>Regrouper les données reliées dans un seul objet JSON</li>
			<li>Gérer les erreurs (parsing, quota, disponibilité de l'API)</li>
		</ul>
		<pre class="fragment"><code class="language-js" data-trim data-noescape
				><script type="text/template">
					// Vérifier la disponibilité
					if (typeof Storage !== 'undefined') {
						// localStorage/sessionStorage disponible
					} else {
						// Pas de support, utiliser une alternative
					}
				</script></code
			></pre>
	</section>
</section>

<section>
	<h1>À vous de jouer !</h1>
	<h2>johangirod.com/cours</h2>
</section>
