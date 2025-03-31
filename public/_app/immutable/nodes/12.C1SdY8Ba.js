import{a as n,e as d,t as M,c as B}from"../chunks/B4pklceG.js";import"../chunks/CMei0t4b.js";import{M as s,f as k,N as l,O as o,n as p,p as G,a as W}from"../chunks/Du4uIILg.js";import{h as F}from"../chunks/Cs1o_ong.js";import{s as R}from"../chunks/BMkXc6el.js";import{i as X}from"../chunks/D4AmcDfz.js";import{S as Y}from"../chunks/OjqImkSQ.js";import{R as $}from"../chunks/Dayddfh2.js";import{i as f}from"../chunks/pFiT_qqh.js";import{e as J,i as N}from"../chunks/B0BGekoV.js";import{s as V}from"../chunks/Cv3pZryr.js";const O=""+new URL("../assets/async_or_sync.-fhkRSny.png",import.meta.url).href;var Q=d(`
						<script type="text/template">
							const a = 1;
							const b = 2;
							const c = a + b;
						<\/script>
					`,1),K=d(`
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
						<\/script>
					`,1),Z=d(`
						<script type="text/template">
							setTimeout(() => {
								console.log('Hello');
							}, 1000);
						<\/script>
					`,1),ss=d(`
						<script type="text/template">
							let count = 0;
							document.addEventListener('click', () => {
								count++;
							});
						<\/script>
					`,1),as=d(`
						<script type="text/template">
							const myArray = [1, 2, 3, 4, 5];
							myArray.forEach((i) => {
								console.log(i);
							});
						<\/script>
					`,1),ns=M(`<p class="fragment text-gray-500">En JavaScript, l'asynchronicité est gérée via <strong>des fonctions de rappel</strong> (callback)</p>`),ls=M(`<section data-auto-animate=""><h2>Quelques exemples</h2> <h3>Code synchrone ou asynchrone ?</h3> <pre><code class="language-js" data-trim="" data-noescape="">
			<!>
				</code></pre> <!></section>`),os=d(`<section><h1>Thread et asynchronicité</h1> <h2 class="text-pink-500">Technologie web 2</h2> <p class="text-gray-500">Johan Girod</p></section> <section><section data-auto-animate="true"><h1>Synchrone ou asynchrone</h1></section> <section data-auto-animate="true"><h1>Synchrone ou asynchrone</h1> <h2>Execution synchrone</h2> <ul><li class="fragment">Chaque tache est exécutées l'une après l'autre</li> <li class="fragment">Le déroulé est bloqué tant qu'une tache n'est pas terminée</li></ul></section> <section data-auto-animate="true"><h1>Synchrone ou asynchrone</h1> <h2>Execution asynchrone</h2> <ul><li class="fragment">Plusieurs tâches peuvent être lancées en même temps</li> <li class="fragment">Elles ne bloquent pas le déroulé, et d'autres événements peuvent être traités</li></ul></section> <section data-auto-animate="true"><h1>Synchrone ou asynchrone</h1> <img alt="Asynchrone ou synchrone" class="r-stretch"></section> <section data-auto-animate="true"><h2>Quelques exemples</h2> <ul><li class="fragment">Une conversation téléphonique ? <span class="fragment text-green-500">synchrone</span></li> <li class="fragment">Une conversation par messagerie ? <span class="fragment text-green-500">asynchrone</span></li> <li class="fragment">Un paiement à la caisse ? <span class="fragment text-green-500">synchrone</span></li> <li class="fragment">Une préparation de repas ? <span class="fragment text-green-500">asynchrone</span></li></ul></section> <!></section> <section><section><h1>Thread en JavaScript</h1></section> <section data-auto-animate="true"><h2>Qu'est-ce qu'un thread ?</h2> <ul><li class="fragment">Un thread est un fil d'exécution</li> <li class="fragment">Un programme peut avoir plusieurs threads</li> <li class="fragment">Chaque thread ne peut exécuter qu'une instruction à la fois</li></ul></section> <section><h2>Thread et JavaScript</h2> <ul><li class="fragment">Un programme JavaScript est executé dans un unique <strong>thread principal</strong> (« main
				thread »)<br> <small class="text-gray-500">Les instructions sont exécutées l'une après l'autre</small></li> <li class="fragment">Ce thread est <strong>non bloquant</strong> (asynchrone)<br> <small class="text-gray-500">Les instructions asynchrones ne bloquent pas le déroulé et sont exécutées en parallèle</small></li> <li class="fragment">Les fonctions <strong>fonction de callback</strong> sont placées dans la <strong>file d'attente</strong> (« event loop&nbsp;») <small class="text-gray-500">Elles sont exécutées dès que le thread principal est disponible, dans l'ordre d'arrivée</small></li></ul></section> <section><h2>\`setTimeout\`</h2> <pre><code class="language-js" data-trim="" data-noescape="">
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
				<\/script>
			</code></pre> <p class="fragment text-gray-500">Le code est exécuté dans l'ordre A, D, C, B</p></section> <section><h2>\`setTimeout\`</h2> <pre><code class="language-js" data-trim="" data-noescape="">
		<script type="text/template">
					console.log('A');
					const array = ['B', 'C'];
					array.forEach((item) => {
						setTimeout(() => {
							console.log(item);
						}, 0);
					});
					console.log('D');
				<\/script>
			</code></pre> <p class="fragment text-gray-500">Le code est exécuté dans l'ordre A, D, B, C</p></section> <section><h2>Perfomance</h2> <p>Si on effectue une tâche longue dans le thread principal, cela peut bloquer l'interface
			utilisateur, car les événements ne sont plus traités</p> <p class="fragment">Dans ce cas, il vaut mieux effectuer la tâche dans un autre thread : c'est le rôle des Web
			Workers</p></section> <section><h2>Callback hell</h2> <p>Lorsqu'on imbrique trop de fonctions de rappel, le code devient illisible</p> <pre><code class="language-js" data-trim="" data-noescape="">
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
				<\/script>
			</code></pre> <p class="fragment text-gray-500">Pour cela, il existe une fonctionnalité du langage : les promesse et les fonctions async/await</p> <p class="fragment text-gray-500">...que vous verrez l'année prochaine</p></section></section>`,1);function es(b){var v=os(),C=s(k(v),2),c=s(l(C),6),E=s(l(c),2);R(E,"src",O),o(c);var D=s(c,4);J(D,0,()=>[1,2,3,4],N,(q,e)=>{var t=ls(),r=s(l(t),4),A=l(r),g=s(l(A));{var _=a=>{var h=Q();p(2),n(a,h)},m=(a,h)=>{{var H=i=>{var P=K();p(2),n(i,P)},L=(i,P)=>{{var U=y=>{var S=Z();p(2),n(y,S)},z=(y,S)=>{{var j=u=>{var I=ss();p(2),n(u,I)},w=u=>{var I=as();p(2),n(u,I)};f(y,u=>{e===4?u(j):u(w,!1)},S)}};f(i,y=>{e===2?y(U):y(z,!1)},P)}};f(a,i=>{e===3?i(H):i(L,!1)},h)}};f(g,a=>{e===1?a(_):a(m,!1)})}p(),o(A),o(r);var T=s(r,2);{var x=a=>{var h=ns();n(a,h)};f(T,a=>{e===5&&a(x)})}o(t),n(q,t)}),o(C),p(2),n(b,v)}const ps=""+new URL("../assets/canvas.CbOGdMuP.png",import.meta.url).href;var ts=M(`<!> <h2>TP-6 : Un système de particules</h2> <p>Nous allons implémenter un système de particules en JavaScript, grâce à la balise <code>canvas</code>.</p> <p>Voici une capture d’écran de ce que nous allons réaliser :</p> <div style="background-color: black"><p><img></p></div> <p>Bien sûr dans notre cas, les particules se déplaceront.</p> <h3>1. Création du canvas</h3> <p>Le <code>canvas</code> est une balise HTML qui permet de dessiner des graphiques en 2D ou en 3D. Il est très utilisé pour les jeux vidéo ou les animations.</p> <p>Dans un fichier <code>index.js</code>, créez deux constantes <code>WIDTH</code> et <code>HEIGHT</code> qui définiront la taille du canvas. Vous pouvez les initialiser à 800 et 600 par exemple. Créez un élément canvas avec ces dimensions et ajoutez-le au <code>body</code> de la page.</p> <p>Pour mieux voir les particules, vous pouvez ajouter un fond noir au canvas, dans un fichier <code>style.css</code> :</p> <!> <h3>2. Création de la classe <code>Particle</code></h3> <p>Créer une classe <code>Particle</code> qui contiendra les méthodes suivantes :</p> <ul><li><p><code>constructor(x, y, dx, dy, color)</code> : initialise une nouvelle particule avec les paramètres suivants :</p> <ul><li><code>x</code> : la position en x de la particule</li> <li><code>y</code> : la position en y de la particule</li> <li><code>dx</code> : la vitesse en x de la particule</li> <li><code>dy</code> : la vitesse en y de la particule</li></ul> <p>Cette méthode initialisera également la couleur de la particule. Pour générer une couleur aléatoire, vous pouvez utiliser la fonction suivante :</p> <!></li> <li><p><code>update()</code> : met à jour la position de la particule en fonction de sa vitesse
Lorsque la particule atteint le bord du canvas, elle doit rebondir.</p></li> <li><p><code>draw(ctx)</code> : dessine la particule sur le canvas
Pour la couleur, vous pouvez utiliser la méthode <code>fillStyle</code> du contexte 2D.
Vous pouvez utiliser la méthode <code>fillRect</code> du contexte 2D du canvas (ctx) pour dessiner un rectangle de 2 pixels de côté.</p></li></ul> <h3>3. Création du système de particules</h3> <p>Initialisez un tableau de particules dans le fichier <code>index.js</code>. Ce tableau sera initialisé avec un nombre de particules spécifié dans une constante <code>PARTICLE_COUNT</code>.</p> <p>Pour cela, on crée une fonction <code>renderParticles</code> qui dessinera toutes les particules du tableau. Elle appellera la méthode <code>update</code> de chaque particule pour les faire bouger, puis la méthode <code>draw</code> pour les dessiner.</p> <p>Cette fonction devra être appellée à intervalles réguliers pour animer les particules. Vous pouvez utiliser la fonction <code>requestAnimationFrame</code> pour cela. Elle est plus adaptée que <code>setInterval</code> pour les animations, car elle est synchronisée avec le taux de rafraîchissement du navigateur.</p> <h3>4. Explosion au clic</h3> <p>Ajoutez un écouteur d’événement sur le canvas pour détecter les clics de souris. Lorsque l’utilisateur clique, une explosion de particules doit se produire à l’endroit du clic.</p> <p>Pour cela, vous pouvez ajouter une méthode <code>explode(x, y)</code> qui ajoutera des particules autour du point <code>(x, y)</code>.</p> <h3>5. Champs de force gravitationnel</h3> <p>Ajoutez un champ de force gravitationnel autour de la souris. Lorsque l’utilisateur bouge la souris, les particules doivent être repoussées par la souris.</p> <p>Pour cela, vous devrez modifier la vitesse par rapport à la position de souris.</p> <p>Vous pouvez utiliser la formule suivante :</p> <!> <ul><li>Faire en sorte que le champs de force ne s’applique qu’à une certaine distance de la souris.</li> <li>Faire en sorte que les particules hors de cette distance rallentissent progressivement.</li> <li>Faire en sorte de pouvoir paramétrer la force du champs de force.</li> <li>Faire en sorte que le champs de force dépende de la distance à la souris.</li> <li>Modifier les différents paramètres jusq’à obtenir un résultat qui vous plait.</li></ul> <h2>Corrigé</h2> <!>`,1);function vs(b,v){G(v,!1),V.set(!0),X();var C=ts(),c=k(C);$(c,{children:(m,T)=>{es(m)},$$slots:{default:!0}});var E=s(c,8),D=l(E),q=l(D);R(q,"src",ps),o(D),o(E);var e=s(E,12);F(e,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#22863A">canvas</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">	background-color</span><span style="color:#24292E">: </span><span style="color:#005CC5">black</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var t=s(e,6),r=l(t),A=s(l(r),6);F(A,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> randomColor</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#032F62"> &#96;hsl($&#123;</span><span style="color:#24292E">Math</span><span style="color:#032F62">.</span><span style="color:#6F42C1">random</span><span style="color:#032F62">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 360</span><span style="color:#032F62">&#125;, $&#123;</span><span style="color:#005CC5">50</span><span style="color:#D73A49"> +</span><span style="color:#24292E"> Math</span><span style="color:#032F62">.</span><span style="color:#6F42C1">random</span><span style="color:#032F62">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 50</span><span style="color:#032F62">&#125;%, $&#123;</span><span style="color:#005CC5">50</span><span style="color:#D73A49"> +</span><span style="color:#24292E"> Math</span><span style="color:#032F62">.</span><span style="color:#6F42C1">random</span><span style="color:#032F62">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 50</span><span style="color:#032F62">&#125;%)&#96;</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),o(r),p(4),o(t);var g=s(t,24);F(g,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> angle</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">atan2</span><span style="color:#24292E">(mouseY </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.y, mouseX </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.x);</span></span>
<span class="line"><span style="color:#005CC5">this</span><span style="color:#24292E">.dx </span><span style="color:#D73A49">+=</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">cos</span><span style="color:#24292E">(angle);</span></span>
<span class="line"><span style="color:#005CC5">this</span><span style="color:#24292E">.dy </span><span style="color:#D73A49">+=</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">sin</span><span style="color:#24292E">(angle);</span></span></code></pre>`);var _=s(g,6);Y(_,{children:(m,T)=>{var x=B(),a=k(x);F(a,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> WIDTH</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> 1000</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> HEIGHT</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> 800</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> NUMBER_PARTICLES</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> 1500</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">class</span><span style="color:#6F42C1"> Particle</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	constructor</span><span style="color:#24292E">(</span><span style="color:#E36209">x</span><span style="color:#24292E">, </span><span style="color:#E36209">y</span><span style="color:#24292E">, </span><span style="color:#E36209">dx</span><span style="color:#24292E">, </span><span style="color:#E36209">dy</span><span style="color:#24292E">, </span><span style="color:#E36209">color</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.x </span><span style="color:#D73A49">=</span><span style="color:#24292E"> x;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.y </span><span style="color:#D73A49">=</span><span style="color:#24292E"> y;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.dx </span><span style="color:#D73A49">=</span><span style="color:#24292E"> dx;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.dy </span><span style="color:#D73A49">=</span><span style="color:#24292E"> dy;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.color </span><span style="color:#D73A49">=</span><span style="color:#24292E"> color;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">	update</span><span style="color:#24292E">(</span><span style="color:#E36209">mouseX</span><span style="color:#24292E">, </span><span style="color:#E36209">mouseY</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (mouseX </span><span style="color:#D73A49">&#x26;&#x26;</span><span style="color:#24292E"> mouseY) &#123;</span></span>
<span class="line"><span style="color:#6A737D">			// Cette partie permet de repousser les particules de la souris (exercice 5)</span></span>
<span class="line"><span style="color:#D73A49">			const</span><span style="color:#005CC5"> distance</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">sqrt</span><span style="color:#24292E">((mouseX </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.x) </span><span style="color:#D73A49">**</span><span style="color:#005CC5"> 2</span><span style="color:#D73A49"> +</span><span style="color:#24292E"> (mouseY </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.y) </span><span style="color:#D73A49">**</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">			if</span><span style="color:#24292E"> (distance </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 300</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> angle</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">atan2</span><span style="color:#24292E">(mouseY </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.y, mouseX </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.x);</span></span>
<span class="line"><span style="color:#D73A49">				const</span><span style="color:#005CC5"> force</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> distance </span><span style="color:#D73A49">/</span><span style="color:#005CC5"> 1000</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">				this</span><span style="color:#24292E">.dx </span><span style="color:#D73A49">+=</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">cos</span><span style="color:#24292E">(angle) </span><span style="color:#D73A49">*</span><span style="color:#24292E"> force;</span></span>
<span class="line"><span style="color:#005CC5">				this</span><span style="color:#24292E">.dy </span><span style="color:#D73A49">+=</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">sin</span><span style="color:#24292E">(angle) </span><span style="color:#D73A49">*</span><span style="color:#24292E"> force;</span></span>
<span class="line"><span style="color:#24292E">			&#125; </span><span style="color:#D73A49">else</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#005CC5">				this</span><span style="color:#24292E">.dx </span><span style="color:#D73A49">*=</span><span style="color:#005CC5"> 0.995</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#005CC5">				this</span><span style="color:#24292E">.dy </span><span style="color:#D73A49">*=</span><span style="color:#005CC5"> 0.995</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.x </span><span style="color:#D73A49">+=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.dx;</span></span>
<span class="line"><span style="color:#005CC5">		this</span><span style="color:#24292E">.y </span><span style="color:#D73A49">+=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.dy;</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.x </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 0</span><span style="color:#D73A49"> ||</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.x </span><span style="color:#D73A49">></span><span style="color:#005CC5"> WIDTH</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#005CC5">			this</span><span style="color:#24292E">.dx </span><span style="color:#D73A49">=</span><span style="color:#D73A49"> -</span><span style="color:#005CC5">this</span><span style="color:#24292E">.dx;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (</span><span style="color:#005CC5">this</span><span style="color:#24292E">.y </span><span style="color:#D73A49">&#x3C;</span><span style="color:#005CC5"> 0</span><span style="color:#D73A49"> ||</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.y </span><span style="color:#D73A49">></span><span style="color:#005CC5"> HEIGHT</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#005CC5">			this</span><span style="color:#24292E">.dy </span><span style="color:#D73A49">=</span><span style="color:#D73A49"> -</span><span style="color:#005CC5">this</span><span style="color:#24292E">.dy;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">	draw</span><span style="color:#24292E">(</span><span style="color:#E36209">context</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#24292E">		context.fillStyle </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> this</span><span style="color:#24292E">.color;</span></span>
<span class="line"><span style="color:#24292E">		context.</span><span style="color:#6F42C1">beginPath</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">		context.</span><span style="color:#6F42C1">rect</span><span style="color:#24292E">(</span><span style="color:#005CC5">this</span><span style="color:#24292E">.x, </span><span style="color:#005CC5">this</span><span style="color:#24292E">.y, </span><span style="color:#005CC5">2</span><span style="color:#24292E">, </span><span style="color:#005CC5">2</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">		context.</span><span style="color:#6F42C1">fill</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">class</span><span style="color:#6F42C1"> RandomParticle</span><span style="color:#D73A49"> extends</span><span style="color:#6F42C1"> Particle</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	constructor</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#005CC5">		super</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#24292E">			Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> WIDTH</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">			Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> HEIGHT</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">			Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 3</span><span style="color:#D73A49"> -</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#24292E">			Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 3</span><span style="color:#D73A49"> -</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#032F62">			&#96;hsl($&#123;</span><span style="color:#6F42C1">random</span><span style="color:#032F62">(</span><span style="color:#005CC5">0</span><span style="color:#032F62">, </span><span style="color:#005CC5">360</span><span style="color:#032F62">)</span><span style="color:#032F62">&#125;, $&#123;</span><span style="color:#6F42C1">random</span><span style="color:#032F62">(</span><span style="color:#005CC5">50</span><span style="color:#032F62">, </span><span style="color:#005CC5">100</span><span style="color:#032F62">)</span><span style="color:#032F62">&#125;%, $&#123;</span><span style="color:#6F42C1">random</span><span style="color:#032F62">(</span><span style="color:#005CC5">50</span><span style="color:#032F62">, </span><span style="color:#005CC5">100</span><span style="color:#032F62">)</span><span style="color:#032F62">&#125;%)&#96;</span></span>
<span class="line"><span style="color:#24292E">		);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> canvas</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'canvas'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">canvas.width </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> WIDTH</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">canvas.height </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> HEIGHT</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">document.body.</span><span style="color:#6F42C1">appendChild</span><span style="color:#24292E">(canvas);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">const</span><span style="color:#005CC5"> context</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> canvas.</span><span style="color:#6F42C1">getContext</span><span style="color:#24292E">(</span><span style="color:#032F62">'2d'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#D73A49">let</span><span style="color:#24292E"> particles </span><span style="color:#D73A49">=</span><span style="color:#24292E"> Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(&#123; length: </span><span style="color:#005CC5">NUMBER_PARTICLES</span><span style="color:#24292E"> &#125;, () </span><span style="color:#D73A49">=></span><span style="color:#D73A49"> new</span><span style="color:#6F42C1"> RandomParticle</span><span style="color:#24292E">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">let</span><span style="color:#24292E"> mouseX </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">let</span><span style="color:#24292E"> mouseY </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">canvas.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'mousemove'</span><span style="color:#24292E">, (</span><span style="color:#E36209">event</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#24292E">	mouseX </span><span style="color:#D73A49">=</span><span style="color:#24292E"> event.x;</span></span>
<span class="line"><span style="color:#24292E">	mouseY </span><span style="color:#D73A49">=</span><span style="color:#24292E"> event.y;</span></span>
<span class="line"><span style="color:#24292E">&#125;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> renderParticles</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#24292E">	context.</span><span style="color:#6F42C1">clearRect</span><span style="color:#24292E">(</span><span style="color:#005CC5">0</span><span style="color:#24292E">, </span><span style="color:#005CC5">0</span><span style="color:#24292E">, </span><span style="color:#005CC5">WIDTH</span><span style="color:#24292E">, </span><span style="color:#005CC5">HEIGHT</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	particles.</span><span style="color:#6F42C1">forEach</span><span style="color:#24292E">((</span><span style="color:#E36209">particle</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#24292E">		particle.</span><span style="color:#6F42C1">update</span><span style="color:#24292E">(mouseX, mouseY);</span></span>
<span class="line"><span style="color:#24292E">		particle.</span><span style="color:#6F42C1">draw</span><span style="color:#24292E">(context);</span></span>
<span class="line"><span style="color:#24292E">	&#125;);</span></span>
<span class="line"><span style="color:#6F42C1">	requestAnimationFrame</span><span style="color:#24292E">(renderParticles);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">renderParticles</span><span style="color:#24292E">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">canvas.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'click'</span><span style="color:#24292E">, (</span><span style="color:#E36209">event</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#24292E"> &#123; </span><span style="color:#005CC5">x</span><span style="color:#24292E">, </span><span style="color:#005CC5">y</span><span style="color:#24292E"> &#125; </span><span style="color:#D73A49">=</span><span style="color:#24292E"> event;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> RADIUS</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> 20</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	particles </span><span style="color:#D73A49">=</span><span style="color:#24292E"> particles.</span><span style="color:#6F42C1">concat</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#24292E">		Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#24292E">			&#123; length: </span><span style="color:#005CC5">100</span><span style="color:#24292E"> &#125;,</span></span>
<span class="line"><span style="color:#24292E">			() </span><span style="color:#D73A49">=></span></span>
<span class="line"><span style="color:#D73A49">				new</span><span style="color:#6F42C1"> Particle</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#6F42C1">					random</span><span style="color:#24292E">(x </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> RADIUS</span><span style="color:#24292E">, x </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> RADIUS</span><span style="color:#24292E">),</span></span>
<span class="line"><span style="color:#6F42C1">					random</span><span style="color:#24292E">(y </span><span style="color:#D73A49">-</span><span style="color:#005CC5"> RADIUS</span><span style="color:#24292E">, y </span><span style="color:#D73A49">+</span><span style="color:#005CC5"> RADIUS</span><span style="color:#24292E">),</span></span>
<span class="line"><span style="color:#6F42C1">					random</span><span style="color:#24292E">(</span><span style="color:#D73A49">-</span><span style="color:#005CC5">2</span><span style="color:#24292E">, </span><span style="color:#005CC5">2</span><span style="color:#24292E">),</span></span>
<span class="line"><span style="color:#6F42C1">					random</span><span style="color:#24292E">(</span><span style="color:#D73A49">-</span><span style="color:#005CC5">2</span><span style="color:#24292E">, </span><span style="color:#005CC5">2</span><span style="color:#24292E">)</span></span>
<span class="line"><span style="color:#24292E">				)</span></span>
<span class="line"><span style="color:#24292E">		)</span></span>
<span class="line"><span style="color:#24292E">	);</span></span>
<span class="line"><span style="color:#24292E">&#125;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">function</span><span style="color:#6F42C1"> random</span><span style="color:#24292E">(</span><span style="color:#E36209">a</span><span style="color:#24292E">, </span><span style="color:#E36209">b</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> Math.</span><span style="color:#6F42C1">random</span><span style="color:#24292E">() </span><span style="color:#D73A49">*</span><span style="color:#24292E"> (b </span><span style="color:#D73A49">-</span><span style="color:#24292E"> a) </span><span style="color:#D73A49">+</span><span style="color:#24292E"> a;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),n(m,x)},$$slots:{default:!0}}),n(b,C),W()}export{vs as component};
