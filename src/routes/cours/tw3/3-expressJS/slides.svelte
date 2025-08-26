<script>
	import imageServer from './RequeteHTTP.png';
</script>

<section>
	<h1>Serveur web : principes de base</h1>
	<h2 class="text-pink-600">Technologie web 3</h2>
	<p class="text-gray-500">Johan Girod</p>
</section>
<section>
	<section>
		<h2>Qu'est-ce qu'un serveur web ?</h2>
		<ul>
			<li class="fragment">
				Un programme informatique <strong>accessible depuis internet</strong>
			</li>
			<li class="fragment">Qui répond à des <strong>requêtes</strong> de clients</li>
			<li class="fragment">En leur renvoyant des <strong>ressources</strong> web</li>
		</ul>
	</section>
	<section>
		<h2>Qu'est-ce qu'un serveur web ?</h2>
		<div class="flex justify-center">
			<img src={imageServer} alt="Schéma d'une requête HTTP" />
		</div>
	</section>
	<section>
		<h2>Accessible depuis internet</h2>
		<ul>
			<li>
				Utilise un <strong>protocole</strong> transport : <strong>TCP</strong>
			</li>
			<li>
				Écoute sur un port réseau prédéfini: <strong>80</strong> (HTTP) ou <strong>443</strong> (HTTPS)
			</li>
			<li>
				Utilise le protocole applicatif <strong>HTTP</strong> pour la transmission de ressource
			</li>
		</ul>
	</section>
	<section>
		<h2>La requête HTTP</h2>
		<p>Une requête est un message texte contenant</p>
		<ul>
			<li>Un <strong>verbe</strong> d'action</li>
			<li>L'adresse d'une <strong>ressource</strong> à récupérer</li>
			<li>La <strong>version</strong> du protocole utilisé</li>
			<li>Des <strong>entêtes</strong> (headers) optionnels</li>
		</ul>
		<pre class="fragment"><code class="language-http" data-trim>
			GET /restaurants HTTP/1.0
			Host: example.com
			User-Agent: Mozilla/4.0
			Accept-Language: fr
		</code></pre>
	</section>
	<section>
		<h2>La réponse HTTP</h2>
		<p>Une réponse est un message texte contenant</p>
		<ul>
			<li>Un <strong>code de statut</strong></li>
			<li>Des <strong>entêtes</strong> (headers) optionnels</li>
			<li>Le <strong>corps</strong> de la réponse</li>
		</ul>
		<pre class="fragment"><code class="language-http" data-trim>
				<script type="text/template">
			HTTP/1.0 200 OK
			Content-Type: text/html
			Content-Length: 1234

			<!DOCTYPE html>
			<html>
				<head>
					<title>Page d'accueil</title>
				</head>
				<body>
					<h1>Bienvenue sur notre site</h1>
				</body>
			</html>
				</script>
		</code></pre>
		<aside class="notes">
			Le corps de la réponse peut être de n'importe quel type (texte, image, vidéo, etc.). Ici c'est
			du HTML Le HTML est généré par le serveur et envoyé au client, en réponse de la requête
		</aside>
	</section>
	<section>
		<h2>Les framework web</h2>
		<p>Facilitent la création de serveurs web en permettant de manipuler facilement :</p>
		<ul>
			<li>
				Les <strong>routes</strong> et leur <strong>paramètres</strong>
			</li>
			<li>
				Les <strong>requêtes</strong> (lecture des entêtes, corps, session, cookies)
			</li>
			<li>
				Les <strong>réponses</strong> (code de statut, entêtes, corps, type-mime, etc.)
			</li>
		</ul>
		<aside class="notes">
			Il en existe une infinité. Chaque langage en a plusieurs. Les principes que vous verrez ici
			sont valables pour tous
		</aside>
	</section>
	<section>
		<h2>ExpressJS</h2>
		<p>Le framework web le plus populaire pour Node.js</p>
		<h3>Principe de base</h3>
		<pre><code class="language-js" data-trim data-noescape data-line-numbers>
			<script type="text/template">
					app.get('/ma-route', (req, res) => {
						// callback
					});
				</script>
		</code></pre>
		<aside class="note">
			<ul>
				<li>Simple à prendre en main</li>
				<li>Très flexible</li>
				<li>Très performant</li>
			</ul>
		</aside>
	</section>

	<section>
		<h2>TP : Créer un serveur web</h2>
		<p></p>
		<aside class="note">
			<ol>
				<li>eslint / prettier / tooling</li>
				<li>serveur pour un restaurant</li>
				<li>Servir des fichiers statiques</li>
				<li>Générer du HTML pour répondre à une requête</li>
			</ol>
		</aside>
	</section>
</section>
