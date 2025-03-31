import{a as p,t as F,e as j,c as h}from"../chunks/B4pklceG.js";import"../chunks/CMei0t4b.js";import{M as s,a5 as H,N as A,n as g,O as m,f as e,p as I,a as V}from"../chunks/Du4uIILg.js";import{h as n}from"../chunks/Cs1o_ong.js";import{i as T}from"../chunks/D4AmcDfz.js";import{S as i}from"../chunks/OjqImkSQ.js";import{R as M}from"../chunks/Dayddfh2.js";import{s as J}from"../chunks/Bgovi1YL.js";import{s as R}from"../chunks/BMkXc6el.js";import{p as U}from"../chunks/pFiT_qqh.js";import{s as G}from"../chunks/Cv3pZryr.js";var N=F(`<pre><code class="language-js" data-trim="">
    <!>
</code></pre>`);function L(f,u){let d=U(u,"lines",8,void 0);var r=N(),c=A(r),C=s(A(c));J(C,u,"default",{}),g(),m(c),m(r),H(()=>R(c,"data-line-numbers",d())),p(f,r)}var K=j(`<script type="text/template">
				export const helloStr = 'Hello world!';
			<\/script><!---->`,1),Q=j(`<script type="text/template">
				export function sayHello() {
					console.log('Hello world!');
				}
			<\/script><!---->`,1),X=j(`<section><h1>Modules et classes</h1> <h2 class="text-pink-500">Technologie web 2</h2> <p class="text-gray-500">Johan Girod</p></section> <section><section><h1>Les modules (ESModule)</h1></section> <section><h2>À quoi servent les modules ?</h2> <ul><li>découper son code en plusieurs fichiers pour <strong>mieux s'y retrouver</strong></li> <li><strong>réutiliser</strong> du code d'un fichier à un autre</li> <li>cacher les <strong>détails d'implémentation</strong> (variables « privée »)</li></ul></section> <section><h2>Exporter des variables</h2> <!> <!></section> <section><h2>Importer des variables</h2> <pre><code class="language-js" data-trim="" data-noescape="">
		<script type="text/template">
					// Dans un autre fichier
					import { sayHello, helloStr } from './hello.js';
				<\/script>
	</code></pre> <strong>à noter</strong> <ul><li>Les instructions <code>import</code> doivent être au début du fichier</li> <li>Les noms des variables importées <strong>doivent être les mêmes que ceux exportés</strong></li> <li>Le chemin du fichier est relatif au fichier qui importe</li></ul></section> <section><h3>On peut renommer un import</h3> <pre><code class="language-js" data-trim="" data-noescape="">
		<script type="text/template">
					import { sayGoodbye as bye } from './hello.js';

					bye();
				<\/script>
	</code></pre></section> <section><h2>Export par défaut</h2> <pre><code class="language-js" data-trim="" data-noescape="">
		<script type="text/template">
					// Dans un fichier hello.js
					export default function sayHello() {
						console.log('Hello world!');
					}
				<\/script>
	</code></pre></section> <section><h2>Export par défaut</h2> <pre><code class="language-js" data-trim="" data-noescape="">
		<script type="text/template">
					// Dans un autre fichier
					import sayHelloFunction from './hello.js';
					sayHelloFunction();
				<\/script>
	</code></pre> <strong>À noter</strong> <ul><li>On peut nommer la fonction importée comme on veut</li> <li>On ne peut avoir qu'un seul export par défaut par fichier</li> <li>Mais on peut mélanger les exports nommés et par défaut <pre class="fragment"><code class="language-js" data-trim="" data-noescape="">
					<script type="text/template">
							import sayHelloFunction, { helloStr } from './hello.js';
						<\/script>
					</code></pre></li></ul></section> <section><h3>Les modules sont des singletons</h3> <p>Un module est « chargé » une seule fois, même si on l'importe plusieurs fois.</p> <pre><code class="language-js" data-trim="" data-noescape="">
	<script type="text/template">
					// Dans un fichier hello.js
					export default randomNum = Math.random();
				<\/script>
	</code></pre></section> <section><h2>Dans un navigateur</h2> <pre><code class="language-html" data-trim="" data-noescape="">
		<script type="text/template">
					<script type="module" src="main.js" />;
				<\/script>
	</code></pre> <p>Les modules sont chargés de manière asynchrone, et sont exécutés dans l'ordre d'import.</p></section></section> <section><section><h1>Les classes en Javascript</h1></section> <section><h2>Créer une classe</h2> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="1-10|2-5|6-8|12">
		<script type="text/template">
					class Rectangle {
						constructor(height, width) {
							this.height = height;
							this.width = width;
						}

						area() {
							return this.height * this.width;
						}
					}

					const rect = new Rectangle(10, 20);
				<\/script>
</code></pre></section> <section><h2>Méthode static et propriétés privées</h2> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
		<script type="text/template">
					class Point {
						#x;
						#y;

						constructor(x, y) {
							this.#x = x;
							this.#y = y;
						}

						static distance(a, b) {
							const dx = a.#x - b.#x;
							const dy = a.#y - b.#y;

							return Math.hypot(dx, dy);
						}
					}

					const p1 = new Point(5, 5);
					const p2 = new Point(10, 10);

					const distance = Point.distance(p1, p2);
				<\/script>
	</code></pre></section> <section><h2>Étendre une classe</h2> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
		<script type="text/template">
					class Square extends Rectangle {
						constructor(side) {
							super(side, side);
						}
					}

					const square = new Square(10);
				<\/script>
	</code></pre></section></section>`,1);function Y(f){var u=X(),d=s(e(u),2),r=s(A(d),4),c=s(A(r),2);L(c,{children:(E,D)=>{var t=K();s(e(t)),p(E,t)},$$slots:{default:!0}});var C=s(c,2);L(C,{children:(E,D)=>{var t=Q();s(e(t)),p(E,t)},$$slots:{default:!0}}),m(r),g(12),m(d),g(2),p(f,u)}var Z=F("<!> <!>",1),ss=F("<!> <!> <!>",1),as=F('<!> <h2>TP 5 : puissance 4</h2> <p>Créer un jeu de puissance 4 en JavaScript.</p> <h3>Partie 1 : le moteur de jeu</h3> <p>Nous allons créer un moteur de jeu qui permet de jouer une partie de <a href="https://www.jeu-puissance-4.com/" rel="nofollow">puissance 4</a>.</p> <p>Créer un fichier <code>puissance4.js</code> qui contiendra le moteur de jeu.</p> <p>Créer une classe <code>Puissance4</code> qui contiendra les méthodes suivantes :</p> <ul><li><code>constructor()</code> : initialise le jeu</li> <li><code>play(column)</code> : joue un coup dans la colonne <code>column</code></li> <li><code>getCurrentPlayer()</code> : retourne le joueur dont c’est le tour</li> <li><code>getWinner()</code> : retourne le joueur gagnant (ou <code>null</code> si personne n’a gagné)</li> <li><code>getBoard()</code> : retourne le plateau de jeu (le tableau de tableau)</li> <li><code>logBoard()</code> : affiche le tableau de jeu dans la console (on pourra utiliser <code>console.table</code>)</li></ul> <p>Le plateau de jeu sera représenté par un tableau de 6 lignes et 7 colonnes. Chaque case pourra contenir un des trois états suivants : <code>null</code> (case vide), <code>A</code> (joueur A) ou <code>B</code> (joueur B).</p> <h4>1. <code>constructor()</code></h4> <p>Le constructeur initialisera le plateau de jeu avec toutes les cases vides (initialisées à <code>null</code>).</p> <p>Le plateau est représenté par un tableau de 6 lignes, chaque ligne contenant un tableau de 7 éléments représentant les cases de chaque colonnes.</p> <p>Ainsi, pour accéder à la case en ligne 3 et colonne 4, on pourra utiliser <code>this.#grid[3][4]</code>.</p> <p>Pour cela, on pourra utiliser la méthode <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="nofollow"><code>Array.from</code></a>.</p> <p><strong>Exemple d’utilisation de <code>Array.from</code></strong></p> <!> <!> <h4>2. <code>logBoard()</code></h4> <p>La méthode <code>logBoard()</code> permettra d’afficher le plateau de jeu dans la console. On pourra utiliser la méthode <code>console.table</code> pour afficher le tableau.</p> <p>Vérifier que votre code fonctionne en initialisant une instance de la classe <code>Puissance4</code> et en affichant le plateau de jeu dans la console.</p> <!> <!> <h4>3. <code>getCurrentPlayer()</code></h4> <p>Le premier joueur sera le joueur A. La méthode <code>getCurrentPlayer()</code> retournera le joueur dont c’est le tour. Ce dernier changera à chaque coup joué.</p> <p>Faire en sorte que le joueur courant ne puisse pas être modifié directement depuis l’extérieur de la classe (on pourra utiliser le mot-clé <code>private</code>).</p> <!> <h4>4. <code>play()</code></h4> <p>La méthode <code>play(column)</code> permettra de jouer un coup dans la colonne <code>column</code>. Le coup sera joué par le joueur dont c’est le tour (joueur A ou joueur B). La méthode retournera <code>true</code> si le coup a été joué, <code>false</code> sinon.</p> <p>Vérifier que votre code fonctionne en jouant un coup dans une colonne.</p> <!> <!> <h4>5. <code>getWinner()</code></h4> <p>La méthode <code>getWinner()</code> retournera le joueur gagnant (ou <code>null</code> si personne n’a gagné).</p> <p><em>Indice : on pourra utiliser une méthode privée <code>#checkWin(row, column)</code> qui vérifiera si un joueur a gagné à la fin de la méthode <code>play</code>. De cette manière, on sait à partir de quel jeton il faut vérifier les alignements.</em></p> <p>Vérifier que votre code fonctionne :</p> <!> <!> <h3>Partie deux : l’interface</h3> <ol><li><p>Créer un fichier <code>puissance4.html</code> qui contiendra l’interface du jeu, et un fichier <code>index.js</code> qui contiendra le code JavaScript permettant d’interagir avec le moteur de jeu.</p> <p>Vous pouvez utiliser le code HTML suivant :</p> <!></li> <li><p>Pour pouvoir utiliser les modules avec votre projet, il faudra installer une extension VSCode qui permet de lancer un serveur local. Vous pouvez installer l’extension <code>Live Server</code> par exemple. Puis, faire un clic droit sur le fichier <code>puissance4.html</code> et choisir <code>Open with Live Server</code>.</p></li> <li><p>Créer une fonction <code>renderBord</code> qui affiche le plateau de jeu dans la div <code>board</code>. <strong>Cette fonction devra créer les éléments HTML du plateau de jeu</strong>. Le plateau sera représenté par plusieurs <code>div</code> représentant les colonnes et les cases du jeu.</p></li></ol> <!> <p>Les case seront représentées par des <code>div</code> avec la classe <code>case</code>. Les cases du joueur A auront en plus la classe <code>player-A</code>, les cases du joueur B auront la classe <code>player-B</code>.</p> <p>Pour styliser le plateau de jeu, vous pouvez utiliser le fichier <code>style.css</code> suivant :</p> <!> <ol><li>Faire en sorte que le jeu puisse être joué en cliquant sur les colonnes du plateau : <ul><li>Afficher en haut le joueur dont c’est le tour.</li> <li>Jouer un coup dans la colonne en cliquant dessus</li> <li>Si un joueur a gagné, on affichera un message de victoire</li></ul></li></ol> <!> <h3>Partie 3 : Améliorations</h3> <p>Ces améliorations vous familiariseront avec des notions CSS plus avancées. Ces notions ne seront pas vues en cours, mais elles vous seront très utiles si vous souhaitez vous spécialiser en développement front-end.</p> <ol><li><p>Ajouter un <strong>jeton de la couleur du joueur</strong> au dessus de la colonne survolée par la souris. Vous pouvez le faire uniquement en CSS en utilisant la pseudo-classe <code>:hover</code> et la propriété <code>::before</code>. Pour connaître la changer la couleur du jeton en fonction du joueur, vous pouvez ajouter une classe CSS à la grille de jeu contenant le joueur courant.</p> <ul><li>Voir la documentation sur <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" rel="nofollow">::before</a></li> <li>Tutoriel sur <a href="https://web.dev/learn/css/pseudo-classes?hl=fr" rel="nofollow">l’utilisation des pseudo-classes CSS</a></li> <li>Tutoriel sur <a href="https://web.dev/learn/css/pseudo-elements?hl=fr" rel="nofollow">les pseudo-éléments CSS</a></li></ul></li></ol> <!> <ol start="2"><li><p>Faire en sorte que les joueurs puissent <strong>choisir la couleur de leur jeton</strong>.</p> <ul><li><p>Utiliser un <code>input</code> de type <code>color</code> pour permettre aux joueurs de choisir leur couleurs</p></li> <li><p>Lorsque les couleurs seront modifiée, le code javascript devra mettre à jour une variable CSS contenant la couleur du joueur A et B. Les classes CSS des jetons devront être modifiées pour utiliser ces variables CSS.</p></li> <li><p>Voir la documentation sur les <a href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/color" rel="nofollow">input de type color</a></p></li> <li><p>Voir une <a href="https://developer.mozilla.org/fr/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties" rel="nofollow">explication sur les variables CSS</a></p></li></ul></li></ol> <!> <ol start="3"><li><p><strong>Ajouter une animation</strong> lorsqu’un jeton est joué. Le jeton doit tomber depuis le haut et rebondir très lègerement sur le jeton du dessous. Pour cela, vous pourrez utiliser une <strong>animation CSS</strong>. Il vous faudra vous souvenir du dernier coup joué pour ajouter une classe spécifique déclenchant l’animation sur la case correspondante.</p> <ul><li>Voir la documentation sur les <a href="https://developer.mozilla.org/fr/docs/Web/CSS/animation" rel="nofollow">animations CSS</a></li> <li>Tutoriel sur <a href="https://web.dev/learn/css/animations?hl=fr" rel="nofollow">l’utilisation des animations CSS</a></li></ul></li></ol>',1);function ds(f,u){I(u,!1),G.set(!0),T();var d=as(),r=e(d);M(r,{children:(l,y)=>{Y(l)},$$slots:{default:!0}});var c=s(r,30);n(c,()=>'<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> nombreJusqua10</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(&#123; length: </span><span style="color:#005CC5">10</span><span style="color:#24292E"> &#125;, (</span><span style="color:#E36209">v</span><span style="color:#24292E">, </span><span style="color:#E36209">i</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> i);</span></span></code></pre>');var C=s(c,2);i(C,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> class</span><span style="color:#6F42C1"> Puissance4</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#E36209">	#winner</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> null</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E36209">	#grid</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	constructor</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#6A737D">		// On crée un tableau de 6 lignes contenant chacune un tableau de 7 cases</span></span>
<span class="line"><span style="color:#6A737D">		// Il est initialisé à null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">		// Pour atteindre la case positionnée en ligne 3 et colonne 4</span></span>
<span class="line"><span style="color:#6A737D">		// this.#grid[3][4]</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.#grid </span><span style="color:#D73A49">=</span><span style="color:#24292E"> Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(&#123; length: </span><span style="color:#005CC5">6</span><span style="color:#24292E"> &#125;, () </span><span style="color:#D73A49">=></span><span style="color:#24292E"> Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(&#123; length: </span><span style="color:#005CC5">7</span><span style="color:#24292E"> &#125;, () </span><span style="color:#D73A49">=></span><span style="color:#005CC5"> null</span><span style="color:#24292E">));</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var E=s(C,8);n(E,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> game</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> Puissance4</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">logBoard</span><span style="color:#24292E">();</span></span></code></pre>`);var D=s(E,2);i(D,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">	logBoard</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#24292E">		console.</span><span style="color:#6F42C1">table</span><span style="color:#24292E">(</span><span style="color:#005CC5">this</span><span style="color:#24292E">.#grid);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var t=s(D,8);i(t,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">	#currentPlayer </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'A'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">	getCurrentPlayer</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">		return</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var x=s(t,8);n(x,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> game</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> Puissance4</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">3</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">logBoard</span><span style="color:#24292E">();</span></span></code></pre>`);var S=s(x,2);i(S,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1">	play</span><span style="color:#24292E">(column) &#123;</span></span>
<span class="line"><span style="color:#6A737D">		// Si la colonne est pleine, on ne peut pas jouer</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.#grid[</span><span style="color:#005CC5">0</span><span style="color:#24292E">][column]) &#123;</span></span>
<span class="line"><span style="color:#D73A49">			return</span><span style="color:#005CC5"> false</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#6A737D">		// On cherche la première case vide en partant du bas</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> ligneCaseVide</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#grid.</span><span style="color:#6F42C1">findLastIndex</span><span style="color:#24292E">((</span><span style="color:#E36209">ligne</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> ligne[column] </span><span style="color:#D73A49">===</span><span style="color:#005CC5"> null</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#6A737D">		// On ajoute un jeton correspondant au joueur actuel</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.#grid[ligneCaseVide][column] </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer;</span></span>
<span class="line"><span style="color:#6A737D">		// On change le joueur courant</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.#currentPlayer </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer </span><span style="color:#D73A49">===</span><span style="color:#032F62"> 'A'</span><span style="color:#D73A49"> ?</span><span style="color:#032F62"> 'B'</span><span style="color:#D73A49"> :</span><span style="color:#032F62"> 'A'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var _=s(S,10);n(_,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> game</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> Puissance4</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">3</span><span style="color:#24292E">); </span><span style="color:#6A737D">// A</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">1</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">3</span><span style="color:#24292E">); </span><span style="color:#6A737D">// A</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">6</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">3</span><span style="color:#24292E">); </span><span style="color:#6A737D">// A</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">4</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(</span><span style="color:#005CC5">3</span><span style="color:#24292E">); </span><span style="color:#6A737D">// A</span></span>
<span class="line"><span style="color:#24292E">game.</span><span style="color:#6F42C1">logBoard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">console.</span><span style="color:#6F42C1">log</span><span style="color:#24292E">(game.</span><span style="color:#6F42C1">getWinner</span><span style="color:#24292E">()); </span><span style="color:#6A737D">// A</span></span></code></pre>`);var P=s(_,2);i(P,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#6F42C1">	getWinner</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">		return</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#winner;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">	#</span><span style="color:#6F42C1">checkWin</span><span style="color:#24292E">(row, column) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.#winner) &#123;</span></span>
<span class="line"><span style="color:#D73A49">			return</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> directions</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> [</span></span>
<span class="line"><span style="color:#24292E">			[</span><span style="color:#005CC5">0</span><span style="color:#24292E">, </span><span style="color:#005CC5">1</span><span style="color:#24292E">],</span></span>
<span class="line"><span style="color:#24292E">			[</span><span style="color:#005CC5">1</span><span style="color:#24292E">, </span><span style="color:#005CC5">0</span><span style="color:#24292E">],</span></span>
<span class="line"><span style="color:#24292E">			[</span><span style="color:#005CC5">1</span><span style="color:#24292E">, </span><span style="color:#005CC5">1</span><span style="color:#24292E">],</span></span>
<span class="line"><span style="color:#24292E">			[</span><span style="color:#005CC5">1</span><span style="color:#24292E">, </span><span style="color:#D73A49">-</span><span style="color:#005CC5">1</span><span style="color:#24292E">]</span></span>
<span class="line"><span style="color:#24292E">		];</span></span>
<span class="line"><span style="color:#6A737D">		// Pour chacune des direction possible (vertical, horizontal, diagonale montante, diagonale descendante)</span></span>
<span class="line"><span style="color:#D73A49">		for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">const</span><span style="color:#24292E"> [</span><span style="color:#005CC5">dx</span><span style="color:#24292E">, </span><span style="color:#005CC5">dy</span><span style="color:#24292E">] </span><span style="color:#D73A49">of</span><span style="color:#24292E"> directions) &#123;</span></span>
<span class="line"><span style="color:#D73A49">			let</span><span style="color:#24292E"> count </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#6A737D">			// On compte le nombre de jeton aligné après le jeton joué</span></span>
<span class="line"><span style="color:#D73A49">			for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 4</span><span style="color:#24292E">; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> x</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> column </span><span style="color:#D73A49">+</span><span style="color:#24292E"> i </span><span style="color:#D73A49">*</span><span style="color:#24292E"> dx;</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> y</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> row </span><span style="color:#D73A49">+</span><span style="color:#24292E"> i </span><span style="color:#D73A49">*</span><span style="color:#24292E"> dy;</span></span>
<span class="line"><span style="color:#D73A49">				if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.#grid[y]?.[x] </span><span style="color:#D73A49">!==</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer) &#123;</span></span>
<span class="line"><span style="color:#D73A49">					break</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">				&#125;</span></span>
<span class="line"><span style="color:#24292E">				count</span><span style="color:#D73A49">++</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"><span style="color:#6A737D">			// On compte le nombre de jeton aligné avant le jeton joué</span></span>
<span class="line"><span style="color:#D73A49">			for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 4</span><span style="color:#24292E">; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> x</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> column </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">*</span><span style="color:#24292E"> dx;</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> y</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> row </span><span style="color:#D73A49">-</span><span style="color:#24292E"> i </span><span style="color:#D73A49">*</span><span style="color:#24292E"> dy;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">				if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.#grid[y]?.[x] </span><span style="color:#D73A49">!==</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer) &#123;</span></span>
<span class="line"><span style="color:#D73A49">					break</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">				&#125;</span></span>
<span class="line"><span style="color:#24292E">				count</span><span style="color:#D73A49">++</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">			// Si on a 4 jetons alignés (ou plus), on a un gagnant</span></span>
<span class="line"><span style="color:#D73A49">			if</span><span style="color:#24292E"> (count </span><span style="color:#D73A49">>=</span><span style="color:#005CC5"> 4</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#005CC5">				this</span><span style="color:#24292E">.#winner </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.#currentPlayer;</span></span>
<span class="line"><span style="color:#D73A49">				break</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var b=s(P,4),w=A(b),O=s(A(w),4);n(O,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;!</span><span style="color:#22863A">doctype</span><span style="color:#6F42C1"> html</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">html</span><span style="color:#6F42C1"> lang</span><span style="color:#24292E">=</span><span style="color:#032F62">"fr"</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">head</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">meta</span><span style="color:#6F42C1"> charset</span><span style="color:#24292E">=</span><span style="color:#032F62">"UTF-8"</span><span style="color:#24292E"> /></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">title</span><span style="color:#24292E">>Puissance 4&#x3C;/</span><span style="color:#22863A">title</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">link</span><span style="color:#6F42C1"> rel</span><span style="color:#24292E">=</span><span style="color:#032F62">"stylesheet"</span><span style="color:#6F42C1"> href</span><span style="color:#24292E">=</span><span style="color:#032F62">"style.css"</span><span style="color:#24292E"> /></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;/</span><span style="color:#22863A">head</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">body</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">script</span><span style="color:#6F42C1"> src</span><span style="color:#24292E">=</span><span style="color:#032F62">"index.js"</span><span style="color:#6F42C1"> type</span><span style="color:#24292E">=</span><span style="color:#032F62">"module"</span><span style="color:#24292E">>&#x3C;/</span><span style="color:#22863A">script</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">h1</span><span style="color:#24292E">>Puissance 4&#x3C;/</span><span style="color:#22863A">h1</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> id</span><span style="color:#24292E">=</span><span style="color:#032F62">"board"</span><span style="color:#24292E">>&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;/</span><span style="color:#22863A">body</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">html</span><span style="color:#24292E">></span></span></code></pre>`),m(w),g(4),m(b);var k=s(b,2);n(k,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> id</span><span style="color:#24292E">=</span><span style="color:#032F62">"board"</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> class</span><span style="color:#24292E">=</span><span style="color:#032F62">"column"</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		&#x3C;</span><span style="color:#22863A">div</span><span style="color:#6F42C1"> class</span><span style="color:#24292E">=</span><span style="color:#032F62">"case"</span><span style="color:#24292E">>&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">		...</span></span>
<span class="line"><span style="color:#24292E">	&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span></code></pre>`);var $=s(k,6);n($,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">#board</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	display</span><span style="color:#24292E">: </span><span style="color:#005CC5">flex</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">.column</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	display</span><span style="color:#24292E">: </span><span style="color:#005CC5">flex</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	flex-direction</span><span style="color:#24292E">: </span><span style="color:#005CC5">column</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">.case</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	width</span><span style="color:#24292E">: </span><span style="color:#005CC5">50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	height</span><span style="color:#24292E">: </span><span style="color:#005CC5">50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	border</span><span style="color:#24292E">: </span><span style="color:#005CC5">1</span><span style="color:#D73A49">px</span><span style="color:#005CC5"> solid</span><span style="color:#005CC5"> black</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">.case.player-A</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	background</span><span style="color:#24292E">: </span><span style="color:#005CC5">radial-gradient</span><span style="color:#24292E">(</span><span style="color:#005CC5">circle</span><span style="color:#D73A49"> at</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#ff0000</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#990000</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#990000</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">white</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-B</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	background</span><span style="color:#24292E">: </span><span style="color:#005CC5">radial-gradient</span><span style="color:#24292E">(</span><span style="color:#005CC5">circle</span><span style="color:#D73A49"> at</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#0000ff</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#000099</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#000099</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">white</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var q=s($,4);i(q,{children:(l,y)=>{var a=h(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Fichier index.js</span></span>
<span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> &#123; Puissance4 &#125; </span><span style="color:#D73A49">from</span><span style="color:#032F62"> './puissance4.js'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> game</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> Puissance4</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#6F42C1">renderBoard</span><span style="color:#24292E">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> renderBoard</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> boardElem</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">querySelector</span><span style="color:#24292E">(</span><span style="color:#032F62">'#board'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">	if</span><span style="color:#24292E"> (</span><span style="color:#D73A49">!</span><span style="color:#24292E">boardElem) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		throw</span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> Error</span><span style="color:#24292E">(</span><span style="color:#032F62">"Impossible de trouver l'élément #board"</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">	boardElem.innerHTML </span><span style="color:#D73A49">=</span><span style="color:#032F62"> ''</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> board</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> game.</span><span style="color:#6F42C1">getBoard</span><span style="color:#24292E">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> numberOfRow</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> board.</span><span style="color:#005CC5">length</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> numberOfColumn</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> board[</span><span style="color:#005CC5">0</span><span style="color:#24292E">].</span><span style="color:#005CC5">length</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> j </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">; j </span><span style="color:#D73A49">&#x3C;</span><span style="color:#24292E"> numberOfColumn; j</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6A737D">		// On crée chaque colonne dans une boucle</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> columnDiv</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'div'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		columnDiv.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(</span><span style="color:#032F62">'column'</span><span style="color:#24292E">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">		for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;</span><span style="color:#24292E"> numberOfRow; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6A737D">			// Pour chaque colonne, on ajoute les cases avec les jetons,</span></span>
<span class="line"><span style="color:#6A737D">			// en commençant par la dernière ligne</span></span>
<span class="line"><span style="color:#D73A49">			const</span><span style="color:#005CC5"> caseDiv</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'div'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">			caseDiv.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(</span><span style="color:#032F62">'case'</span><span style="color:#24292E">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">			const</span><span style="color:#005CC5"> jetonJoueur</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> board[i][j];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">			if</span><span style="color:#24292E"> (jetonJoueur </span><span style="color:#D73A49">===</span><span style="color:#032F62"> 'A'</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#24292E">				caseDiv.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(</span><span style="color:#032F62">'player-A'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">				caseDiv.innerText </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'A'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125; </span><span style="color:#D73A49">else</span><span style="color:#D73A49"> if</span><span style="color:#24292E"> (jetonJoueur </span><span style="color:#D73A49">===</span><span style="color:#032F62"> 'B'</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#24292E">				caseDiv.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(</span><span style="color:#032F62">'player-B'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">				caseDiv.innerText </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'B'</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">			columnDiv.</span><span style="color:#6F42C1">appendChild</span><span style="color:#24292E">(caseDiv);</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">		// On ajoute un écouteur d'événement pour chaque colonne</span></span>
<span class="line"><span style="color:#24292E">		columnDiv.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'click'</span><span style="color:#24292E">, () </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#24292E">			game.</span><span style="color:#6F42C1">play</span><span style="color:#24292E">(j);</span></span>
<span class="line"><span style="color:#6A737D">			// On réaffiche le plateau après chaque coup</span></span>
<span class="line"><span style="color:#6F42C1">			renderBoard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">		&#125;);</span></span>
<span class="line"><span style="color:#24292E">		boardElem.</span><span style="color:#6F42C1">appendChild</span><span style="color:#24292E">(columnDiv);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">	// Affiche le joueur dont c'est le tour</span></span>
<span class="line"><span style="color:#D73A49">	let</span><span style="color:#24292E"> playerInfo </span><span style="color:#D73A49">=</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">querySelector</span><span style="color:#24292E">(</span><span style="color:#032F62">'.player-info'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">	if</span><span style="color:#24292E"> (</span><span style="color:#D73A49">!</span><span style="color:#24292E">playerInfo) &#123;</span></span>
<span class="line"><span style="color:#24292E">		playerInfo </span><span style="color:#D73A49">=</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'div'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		playerInfo.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(</span><span style="color:#032F62">'player-info'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		document.body.</span><span style="color:#6F42C1">appendChild</span><span style="color:#24292E">(playerInfo);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">	playerInfo.textContent </span><span style="color:#D73A49">=</span><span style="color:#032F62"> &#96;C'est au joueur $&#123;</span><span style="color:#24292E">game</span><span style="color:#032F62">.</span><span style="color:#6F42C1">getCurrentPlayer</span><span style="color:#032F62">()</span><span style="color:#032F62">&#125; de jouer&#96;</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">	// Affiche un message de victoire si un joueur a gagné</span></span>
<span class="line"><span style="color:#D73A49">	if</span><span style="color:#24292E"> (game.</span><span style="color:#6F42C1">getWinner</span><span style="color:#24292E">()) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> message</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'div'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		message.textContent </span><span style="color:#D73A49">=</span><span style="color:#032F62"> &#96;Le joueur $&#123;</span><span style="color:#24292E">game</span><span style="color:#032F62">.</span><span style="color:#6F42C1">getWinner</span><span style="color:#032F62">()</span><span style="color:#032F62">&#125; a gagné !&#96;</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		document.body.</span><span style="color:#6F42C1">appendChild</span><span style="color:#24292E">(message);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var B=s(q,8);i(B,{children:(l,y)=>{var a=Z(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">#board</span><span style="color:#24292E">[</span><span style="color:#6F42C1">data-player</span><span style="color:#D73A49">=</span><span style="color:#032F62">'A'</span><span style="color:#24292E">] </span><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-A</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	background</span><span style="color:#24292E">: </span><span style="color:#005CC5">radial-gradient</span><span style="color:#24292E">(</span><span style="color:#005CC5">circle</span><span style="color:#D73A49"> at</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#ff0000</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#990000</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#990000</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">white</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">#board</span><span style="color:#24292E">[</span><span style="color:#6F42C1">data-player</span><span style="color:#D73A49">=</span><span style="color:#032F62">'B'</span><span style="color:#24292E">] </span><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-B</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	background</span><span style="color:#24292E">: </span><span style="color:#005CC5">radial-gradient</span><span style="color:#24292E">(</span><span style="color:#005CC5">circle</span><span style="color:#D73A49"> at</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#0000ff</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#000099</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">#000099</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">, </span><span style="color:#005CC5">white</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	content</span><span style="color:#24292E">: </span><span style="color:#032F62">''</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	position</span><span style="color:#24292E">: </span><span style="color:#005CC5">absolute</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	top</span><span style="color:#24292E">: </span><span style="color:#005CC5">-50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	width</span><span style="color:#24292E">: </span><span style="color:#005CC5">50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	height</span><span style="color:#24292E">: </span><span style="color:#005CC5">50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">.column</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	display</span><span style="color:#24292E">: </span><span style="color:#005CC5">flex</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	position</span><span style="color:#24292E">: </span><span style="color:#005CC5">relative</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	flex-direction</span><span style="color:#24292E">: </span><span style="color:#005CC5">column</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">	margin-top</span><span style="color:#24292E">: </span><span style="color:#005CC5">50</span><span style="color:#D73A49">px</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var v=s(o,2);n(v,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Fichier index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// ...</span></span>
<span class="line"><span style="color:#24292E">boardElem.dataset.player </span><span style="color:#D73A49">=</span><span style="color:#24292E"> game.</span><span style="color:#6F42C1">getCurrentPlayer</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#6A737D">// ...</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}});var W=s(B,4);i(W,{children:(l,y)=>{var a=ss(),o=e(a);n(o,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#24292E">&#x3C;</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">label</span><span style="color:#6F42C1"> for</span><span style="color:#24292E">=</span><span style="color:#032F62">"colorA"</span><span style="color:#24292E">>Couleur joueur A&#x3C;/</span><span style="color:#22863A">label</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">input</span><span style="color:#6F42C1"> type</span><span style="color:#24292E">=</span><span style="color:#032F62">"color"</span><span style="color:#6F42C1"> id</span><span style="color:#24292E">=</span><span style="color:#032F62">"colorA"</span><span style="color:#6F42C1"> value</span><span style="color:#24292E">=</span><span style="color:#032F62">"#ff0000"</span><span style="color:#24292E"> /></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">label</span><span style="color:#6F42C1"> for</span><span style="color:#24292E">=</span><span style="color:#032F62">"colorB"</span><span style="color:#24292E">>Couleur joueur B&#x3C;/</span><span style="color:#22863A">label</span><span style="color:#24292E">></span></span>
<span class="line"><span style="color:#24292E">	&#x3C;</span><span style="color:#22863A">input</span><span style="color:#6F42C1"> type</span><span style="color:#24292E">=</span><span style="color:#032F62">"color"</span><span style="color:#6F42C1"> id</span><span style="color:#24292E">=</span><span style="color:#032F62">"colorB"</span><span style="color:#6F42C1"> value</span><span style="color:#24292E">=</span><span style="color:#032F62">"#0000ff"</span><span style="color:#24292E"> /></span></span>
<span class="line"><span style="color:#24292E">&#x3C;/</span><span style="color:#22863A">div</span><span style="color:#24292E">></span></span></code></pre>`);var v=s(o,2);n(v,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">#board</span><span style="color:#24292E">[</span><span style="color:#6F42C1">data-player</span><span style="color:#D73A49">=</span><span style="color:#032F62">'A'</span><span style="color:#24292E">] </span><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-A</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#E36209">	--color-jeton</span><span style="color:#24292E">: </span><span style="color:#005CC5">var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-player-A</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">#board</span><span style="color:#24292E">[</span><span style="color:#6F42C1">data-player</span><span style="color:#D73A49">=</span><span style="color:#032F62">'B'</span><span style="color:#24292E">] </span><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-B</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#E36209">	--color-jeton</span><span style="color:#24292E">: </span><span style="color:#005CC5">var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-player-B</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">.column:hover::before</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-A</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">.case.player-B</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#E36209">	--color-jeton-fonce</span><span style="color:#24292E">: </span><span style="color:#005CC5">hsl</span><span style="color:#24292E">(from </span><span style="color:#005CC5">var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-jeton</span><span style="color:#24292E">) h s l / </span><span style="color:#005CC5">50</span><span style="color:#D73A49">%</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#005CC5">	background</span><span style="color:#24292E">: </span><span style="color:#005CC5">radial-gradient</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#005CC5">		circle</span><span style="color:#D73A49"> at</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 50</span><span style="color:#D73A49">%</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">		var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-jeton</span><span style="color:#24292E">) </span><span style="color:#005CC5">50</span><span style="color:#D73A49">%</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">		var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-jeton-fonce</span><span style="color:#24292E">) </span><span style="color:#005CC5">50</span><span style="color:#D73A49">%</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">		var</span><span style="color:#24292E">(</span><span style="color:#E36209">--color-jeton-fonce</span><span style="color:#24292E">) </span><span style="color:#005CC5">70</span><span style="color:#D73A49">%</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#005CC5">		white</span><span style="color:#005CC5"> 70</span><span style="color:#D73A49">%</span></span>
<span class="line"><span style="color:#24292E">	);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var z=s(v,2);n(z,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> colorA</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">querySelector</span><span style="color:#24292E">(</span><span style="color:#032F62">'#colorA'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> colorB</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">querySelector</span><span style="color:#24292E">(</span><span style="color:#032F62">'#colorB'</span><span style="color:#24292E">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> updateColorA</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#24292E">	document.documentElement.style.</span><span style="color:#6F42C1">setProperty</span><span style="color:#24292E">(</span><span style="color:#032F62">'--color-player-A'</span><span style="color:#24292E">, colorA.value);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> updateColorB</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#24292E">	document.documentElement.style.</span><span style="color:#6F42C1">setProperty</span><span style="color:#24292E">(</span><span style="color:#032F62">'--color-player-B'</span><span style="color:#24292E">, colorB.value);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">colorA.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'input'</span><span style="color:#24292E">, updateColorA);</span></span>
<span class="line"><span style="color:#24292E">colorB.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'input'</span><span style="color:#24292E">, updateColorB);</span></span>
<span class="line"><span style="color:#6F42C1">updateColorA</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#6F42C1">updateColorB</span><span style="color:#24292E">();</span></span></code></pre>`),p(l,a)},$$slots:{default:!0}}),g(2),p(f,d),V()}export{ds as component};
