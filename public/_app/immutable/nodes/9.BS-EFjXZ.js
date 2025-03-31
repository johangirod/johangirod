import{a as e,e as v,t,c as $}from"../chunks/B4pklceG.js";import"../chunks/CMei0t4b.js";import{M as a,f as E,N as C,n as c,O as F,a5 as O,B as z,p as Y,a as ss}from"../chunks/Du4uIILg.js";import{h as d}from"../chunks/Cs1o_ong.js";import{i as as}from"../chunks/D4AmcDfz.js";import{M as R}from"../chunks/DyuDGlf2.js";import{S as M}from"../chunks/OjqImkSQ.js";import{R as ns}from"../chunks/Dayddfh2.js";import{i as r}from"../chunks/pFiT_qqh.js";import{e as es,i as ls}from"../chunks/B0BGekoV.js";import{s as w}from"../chunks/DcJyaQfQ.js";import{s as ps}from"../chunks/Cv3pZryr.js";var os=t('<p class="pb-6 text-gray-500">Les fonctions sont des <strong>objets de première classe</strong>.</p>'),ts=t("<li>Une fonction peut être <strong>assignées à une variable</strong></li>"),rs=t("<li>Une fonction peut être <strong>passée en paramètre</strong> d'une autre fonction</li>"),cs=t("<li>Une fonction peut être <strong>retournée par une fonction</strong></li>"),is=v(`<h3>Exemple 1</h3> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
							function sayHello() {
								console.log('Hello!');
							}
							const foo = sayHello; // la variable foo contient la fonction sayHello
							foo();
						<\/script>
			</code></pre>`,1),ys=v(`<h3>Exemple 2</h3> <pre><code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
							const operations = {
								add: (a, b) => {
									return a + b;
								}
							};

							const addition = operations.add; // la variable addition contient une fonction
							addition(3, 2);
						<\/script>
		</code></pre>`,1),us=v(`
							<script type="text/template">
								function repeat(n, callback) {
									for (let i = 0; i < n; i++) {
										callback();
									}
								}

								repeat(10, () => console.log('Hello!'));
							<\/script>
						`,1),ds=v(`
							<script type="text/template">
								function repeat(n, callback) {
									for (let i = 0; i < n; i++) {
										callback();
									}
								}
								const sayHello = () => console.log('Hello!');
								repeat(10, sayHello);
							<\/script>
						`,1),As=t(`<h3>Exemple 3</h3> <pre data-id="code-animation">					<code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
						<!>
						<!>
					</code>
				</pre>`,1),ms=v(`<h3>Exemple 4</h3> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
						<script type="text/template">
							function createSayHelloFunction(name) {
								return () => console.log(\`Hello \${name}!\`);
							}

							// la variable sayHelloToJohn contient une fonction
							const sayHelloToJohn = createSayHelloFunction('John');

							sayHelloToJohn();
						<\/script>;
				</code></pre>`,1),Ds=t('<div class="r-stretch"></div>'),fs=t('<section data-auto-animate=""><h2>Javascript est un langage fonctionnel</h2> <!> <aside class="notes">Comme OCAML</aside> <ol><!> <!> <!></ol> <!> <!> <!> <!> <!></section>'),Es=v(`<section><h1>Utilisations des fonctions en Javascript</h1> <h2 class="text-pink-500">Technologie web 2</h2> <p class="text-gray-500">Johan Girod</p></section> <section><section><h1>Les fonctions en JavaScript</h1> <h2>Approfondissement</h2></section> <section><h2>Rappel : syntaxes pour écrire une fonction</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					function add1(a, b) {
						return a + b;
					}
					const add2 = (a, b) => {
						return a + b;
					};
					const add3 = (a, b) => a + b;
				<\/script>
		</code></pre></section> <!> <section data-auto-animate=""><h2>Compile / compile pas ?</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const log = console.log;
					log('Hello!');
				<\/script>
		</code></pre> <p class="fragment text-green-500">Compile ✅</p></section> <section data-auto-animate=""><h2>Compile / compile pas ?</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
				function count(n, callback) => {
					for (let i = 0; i < n; i++) {
						callback(i);
					}
				}
				count(10, console.log);
				<\/script>
		</code></pre> <p class="fragment text-red-500">Compile pas ❌</p></section> <section data-auto-animate=""><h2>Compile / compile pas ?</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const sayHelloList = [];
					for (let name of ['Leila', 'Sarah', 'Sam']) {
						sayHelloList.push(() => {
							console.log(\`Hello \${name}!\`);
						});
					}
					sayHelloList[1]();
				<\/script>
		</code></pre> <p class="fragment text-green-500">Compile ✅</p></section></section> <section><section><h1>Manipulation de tableau</h1> <h2>En fonctionnel</h2></section> <section><h2>.forEach</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					names.forEach((name) => {
						console.log(\`Hello \${name}!\`);
					});
				<\/script>
		</code></pre></section> <section><h2>.map</h2> <pre><code class="language-javascript" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					const greetingList = names.map((name) => \`Hello \${name}!\`);
					console.log(greetingList); // ['Hello Leila!', 'Hello Sarah!', 'Hello Sam!']
				<\/script>
		</code></pre></section> <section data-auto-animate=""><h2>.filter</h2> <pre data-id="code-animation-2">			<code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
						<script type="text/template">
					const names = ['Leila', 'Sarah', 'Sam'];
					const namesStartingWithS = names.filter((name) => name.startsWith('S'));

					console.log(namesStartingWithS); // ['Sarah', 'Sam']
				<\/script>
					
				</code></pre></section> <section data-auto-animate=""><h2>.find</h2> <pre>		<code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const books = [
						{ title: '1984', author: 'George Orwell' },
						{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
						{ title: 'The Lord of the Rings', author: 'J. R. R. Tolkien' }
					];
					const book1984 = books.find((book) => book.title === '1984');
					console.log(book1984.author); // 'George Orwell'
				<\/script>
			</code></pre></section> <section data-auto-animate=""><h2>.sort</h2> <pre>		<code class="language-js" data-trim="" data-noescape="" data-line-numbers="">
			<script type="text/template">
					const animals = ['cat', 'snake', 'elephant', 'horse', 'ant'];
					const sortedNames = names.sort(); // Trie alphabétique

					const sortByLength = (a, b) => a.length - b.length;
					const sortedNamesByLength = names.sort(sortByLength); // Trie par longueur
				<\/script>
			</code></pre></section></section> <section><h1>À vous de jouer !</h1> <h2>Dans l'ordre :</h2> <ol><li>Finir le <a href="../2-manipulation-du-DOM">TP précédent</a></li> <li>Faire les exercices sur cette page</li></ol></section>`,1);function vs(H){var _=Es(),g=a(E(_),2),L=a(C(g),4);es(L,0,()=>[0,1,1.1,1.2,2,2.1,3,4],ls,(T,n)=>{var D=fs(),h=a(C(D),2);{var q=s=>{var l=os();e(s,l)};r(h,s=>{n===0&&s(q)})}var A=a(h,4);let b;var x=C(A);{var k=s=>{var l=ts();let u;O(f=>u=w(l,1,"",null,u,f),[()=>({"opacity-50":n>=2&&n!==4})],z),e(s,l)};r(x,s=>{n>=1&&s(k)})}var S=a(x,2);{var o=s=>{var l=rs();let u;O(f=>u=w(l,1,"",null,u,f),[()=>({"opacity-50":n>=3&&n!==4})],z),e(s,l)};r(S,s=>{n>=2&&s(o)})}var i=a(S,2);{var p=s=>{var l=cs();e(s,l)};r(i,s=>{n>=3&&s(p)})}F(A);var y=a(A,2);{var U=s=>{var l=is();c(2),e(s,l)};r(y,s=>{n===1.1&&s(U)})}var P=a(y,2);{var G=s=>{var l=ys();c(2),e(s,l)};r(P,s=>{n===1.2&&s(G)})}var B=a(P,2);{var W=s=>{var l=As(),u=a(E(l),2),f=a(C(u)),N=a(C(f));{var Z=m=>{var j=us();c(2),e(m,j)};r(N,m=>{n===2&&m(Z)})}var Q=a(N,2);{var X=m=>{var j=ds();c(2),e(m,j)};r(Q,m=>{n===2.1&&m(X)})}c(),F(f),c(),F(u),e(s,l)};r(B,s=>{n>=2&&n<3&&s(W)})}var J=a(B,2);{var I=s=>{var l=ms();c(2),e(s,l)};r(J,s=>{n===3&&s(I)})}var V=a(J,2);{var K=s=>{var l=Ds();e(s,l)};r(V,s=>{n>0&&n!==4&&s(K)})}F(D),O(s=>b=w(A,1,"",null,b,s),[()=>({"py-12":n===4})],z),e(T,D)}),c(6),F(g),c(4),e(H,_)}var gs=t("<p>Le JavaScript que vous allez écrire dans ce TP ne sera pas exécuté dans un navigateur. Nous allons utiliser NodeJS pour exécuter notre code, et le framework vitest pour faire tourner les tests.</p> <p>Dans la pratique, vous n’aurez pas besoin de vous soucier de cet aspect, vous pouvez vous concentrer sur l’écriture de votre code, c’est le même JavaScript que vous utilisez dans le navigateur.</p>",1),hs=t('<div slot="title">Pas de navigateur ?</div>'),bs=t("<p>Les fonctions ont une description en JSDoc. C’est une convention pour documenter les fonctions en JavaScript. Cela permet d’avoir une description de la fonction directement dans le code, et d’avoir une description qui s’affiche au survol dans l’éditeur de code.</p> <p>La première partie contient une description de ce que fait la fonction. Ensuite, on a la liste des paramètres, avec leur type et leur description. Enfin, on a la description de la valeur de retour (si applicable), et eventuellement des exemples d’utilisation.</p>",1),xs=t('<div slot="title">Description en JSDoc</div>'),Cs=t('<!> <h2>Exercices / TP</h2> <p>Dans ce TP, nous allons nous concentrer sur les fonctions et la manipulation de tableau en JavaScript. Nous utiliserons des tests pour vérifier que nos fonctions sont correctes. Le but est de se familiariser avec ces aspects, afin d’attaquer les prochains TP avec plus de sérénité.</p> <h3>Mise en place</h3> <p>Ce TP est disponible sur gitlab. La première étape est de le cloner sur votre machine, c’est à dire de le télécharger avec git. Ouvrez un terminal et tapez la commande suivante :</p> <!> <p>Utilisez les identifiants de votre compte universitaire pour vous connecter.</p> <blockquote><p><em>Si cela ne fonctionne pas, vous pouvez vous rendre sur le lien suivant : <a href="https://sources.univ-jfc.fr/techno-web-2/tp-3" rel="nofollow">https://sources.univ-jfc.fr/techno-web-2/tp-3</a>, cliquer sur le bouton « Code » et télécharger le fichier zip.</em></p></blockquote> <p>Installer les dépendances du projet :</p> <!> <p>Ouvrez le dossier <code>tp-3</code> dans votre éditeur de code. Vous pouvez le faire avec la commande suivante :</p> <!> <h4>Tests</h4> <p>Dans le terminal, lancez les tests avec la commande suivante :</p> <!> <p>Tout est en rouge, c’est normal, les tests ne passent pas. Au fur et à mesure que vous compléterez les exercices, les tests passeront au vert.</p> <p>Vous pouvez laisser le terminal ouvert, les tests se relanceront automatiquement à chaque modification de votre code.</p> <!> <p><strong>Important</strong> : les trois exercices sont indépendants, et de difficulté croissante. Si vous bloquez sur un exercice, vous pouvez passer à l’exercice suivant. N’hésitez pas à demander de l’aide si vous êtes bloqué, ou si un énoncé n’est pas clair.</p> <h3>Exercice 1 : fonctions</h3> <p>Ouvrez le fichier <code>exercice-1.js</code> dans votre éditeur de code. Il contient plusieurs fonctions à compléter. Chaque fonction a une description de ce qu’elle doit faire (au dessus). Le but de l’exercice est d’implémenter les fonctions (écrire le code) pour que les tests passent.</p> <!> <p>Chaque fonction est testée dans le fichier <code>exercice-1.test.js</code>. La fonction est correcte si le test passe (en vert).</p> <p>Pour lancer uniquement les tests de l’exercice 1, vous pouvez lancer la commande :</p> <!> <p>À noter que les tests se relancent automatiquement à chaque fois que vous modifiez le fichier testé.</p> <!> <h3>Exercice 2 : manipulation de tableau</h3> <p>Complétez le code du fichier <code>exercice-2.js</code> pour que tous les tests de l’exercice 2 passent.</p> <!> <h3>Exercice 3 : fonctions de manipulation du DOM</h3> <p>Complétez le code du fichier <code>exercice-3.js</code> pour que tous les tests de l’exercice 3 passent.</p> <!>',1);function Ms(H,_){Y(_,!1),ps.set(!0),as();var g=Cs(),L=E(g);ns(L,{children:(o,i)=>{vs(o)},$$slots:{default:!0}});var T=a(L,10);d(T,()=>'<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">git</span><span style="color:#032F62"> clone</span><span style="color:#032F62"> https://sources.univ-jfc.fr/techno-web-2/tp-3.git</span></span></code></pre>');var n=a(T,8);d(n,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#005CC5">cd</span><span style="color:#032F62"> tp-3</span></span>
<span class="line"><span style="color:#6F42C1">npm</span><span style="color:#032F62"> install</span></span></code></pre>`);var D=a(n,4);d(D,()=>'<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">code</span><span style="color:#032F62"> .</span></span></code></pre>');var h=a(D,6);d(h,()=>'<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6F42C1">npm</span><span style="color:#032F62"> test</span></span></code></pre>');var q=a(h,6);R(q,{children:(o,i)=>{var p=gs();c(2),e(o,p)},$$slots:{default:!0,title:(o,i)=>{var p=hs();e(o,p)}}});var A=a(q,8);R(A,{children:(o,i)=>{var p=bs();c(2),e(o,p)},$$slots:{default:!0,title:(o,i)=>{var p=xs();e(o,p)}}});var b=a(A,6);d(b,()=>'<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span>npm run test ./test/exercice-1.test.js</span></span></code></pre>');var x=a(b,4);M(x,{children:(o,i)=>{var p=$(),y=E(p);d(y,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Appelle la fonction callback n fois, en passant le numéro de l'appel en paramètre (en commençant par 1)</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;number&#125;</span><span style="color:#24292E"> n</span><span style="color:#6A737D"> - Nombre de fois que la fonction doit être appelée</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> callback</span><span style="color:#6A737D"> - Fonction à appeler</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * count(3, (i) => &#123;</span></span>
<span class="line"><span style="color:#6A737D"> *  console.log(i);</span></span>
<span class="line"><span style="color:#6A737D"> * &#125;);</span></span>
<span class="line"><span style="color:#6A737D"> * // 1</span></span>
<span class="line"><span style="color:#6A737D"> * // 2</span></span>
<span class="line"><span style="color:#6A737D"> * // 3</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> count</span><span style="color:#24292E">(</span><span style="color:#E36209">n</span><span style="color:#24292E">, </span><span style="color:#E36209">callback</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	for</span><span style="color:#24292E"> (</span><span style="color:#D73A49">let</span><span style="color:#24292E"> i </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 1</span><span style="color:#24292E">; i </span><span style="color:#D73A49">&#x3C;=</span><span style="color:#24292E"> n; i</span><span style="color:#D73A49">++</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		callback</span><span style="color:#24292E">(i);</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Retourne un compteur</span></span>
<span class="line"><span style="color:#6A737D"> * Un compteur est un objet qui possède deux fonctions:</span></span>
<span class="line"><span style="color:#6A737D"> * - increment: incrémente la valeur du compteur de 1</span></span>
<span class="line"><span style="color:#6A737D"> * - get: retourne la valeur du compteur</span></span>
<span class="line"><span style="color:#6A737D"> * La valeur du compteur est stockée dans une closure</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;&#123; increment: function, get: function &#125;&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const counter = createCounter();</span></span>
<span class="line"><span style="color:#6A737D"> * counter.get(); // 0</span></span>
<span class="line"><span style="color:#6A737D"> * counter.increment();</span></span>
<span class="line"><span style="color:#6A737D"> * counter.get(); // 1</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> createCounter</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#D73A49">	let</span><span style="color:#24292E"> count </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		increment</span><span style="color:#24292E">: () </span><span style="color:#D73A49">=></span><span style="color:#24292E"> count</span><span style="color:#D73A49">++</span><span style="color:#24292E">,</span></span>
<span class="line"><span style="color:#6F42C1">		get</span><span style="color:#24292E">: () </span><span style="color:#D73A49">=></span><span style="color:#24292E"> count</span></span>
<span class="line"><span style="color:#24292E">	&#125;;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Retourne une fonction qui prend un paramètre x, et qui retourne f(x) si predicate(x) est vrai, et g(x) sinon</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> predicate</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> f</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> g</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;function&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const isEven = (x) => x % 2 === 0;</span></span>
<span class="line"><span style="color:#6A737D"> * const addOne = (x) => x + 1;</span></span>
<span class="line"><span style="color:#6A737D"> * const multiplyByTwo = (x) => x * 2;</span></span>
<span class="line"><span style="color:#6A737D"> * const conditionallyAddOne = condition(isEven, addOne, multiplyByTwo);</span></span>
<span class="line"><span style="color:#6A737D"> * conditionallyAddOne(2); // 3</span></span>
<span class="line"><span style="color:#6A737D"> * conditionallyAddOne(3); // 6</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> condition</span><span style="color:#24292E">(</span><span style="color:#E36209">predicate</span><span style="color:#24292E">, </span><span style="color:#E36209">f</span><span style="color:#24292E">, </span><span style="color:#E36209">g</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> (</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> (</span><span style="color:#6F42C1">predicate</span><span style="color:#24292E">(x) </span><span style="color:#D73A49">?</span><span style="color:#6F42C1"> f</span><span style="color:#24292E">(x) </span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> g</span><span style="color:#24292E">(x));</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Compose deux fonctions en une seule, de tel sorte que pipe(f, g)(x) soit équivalent à g(f(x))</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> f</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#24292E"> g</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;function&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const addOne = (x) => x + 1;</span></span>
<span class="line"><span style="color:#6A737D"> * const multiplyByTwo = (y) => y * 2;</span></span>
<span class="line"><span style="color:#6A737D"> * const addOneAndMultiplyByTwo = pipe(addOne, multiplyByTwo);</span></span>
<span class="line"><span style="color:#6A737D"> * addOneAndMultiplyByTwo(2); // 6</span></span>
<span class="line"><span style="color:#6A737D"> * */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> pipe</span><span style="color:#24292E">(</span><span style="color:#E36209">f</span><span style="color:#24292E">, </span><span style="color:#E36209">g</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> (</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#6F42C1"> g</span><span style="color:#24292E">(</span><span style="color:#6F42C1">f</span><span style="color:#24292E">(x));</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),e(o,p)},$$slots:{default:!0}});var k=a(x,6);M(k,{children:(o,i)=>{var p=$(),y=E(p);d(y,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Tableau</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Multiplie par 2 chaque élément d'un tableau</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;number[]&#125;</span><span style="color:#24292E"> arr</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;number[]&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * multiplyBy2([1, 2, 3]) // [2, 4, 6]</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> multiplyBy2</span><span style="color:#24292E">(</span><span style="color:#E36209">arr</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> arr.</span><span style="color:#6F42C1">map</span><span style="color:#24292E">((</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> x </span><span style="color:#D73A49">*</span><span style="color:#005CC5"> 2</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Compte le nombre d'éléments pairs dans un tableau</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;number[]&#125;</span><span style="color:#24292E"> arr</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;number&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * countEvenNumbers([1, 2, 3]) // 1</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> countEvenNumbers</span><span style="color:#24292E">(</span><span style="color:#E36209">arr</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> arr.</span><span style="color:#6F42C1">filter</span><span style="color:#24292E">((</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> x </span><span style="color:#D73A49">%</span><span style="color:#005CC5"> 2</span><span style="color:#D73A49"> ===</span><span style="color:#005CC5"> 0</span><span style="color:#24292E">).</span><span style="color:#005CC5">length</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Retourne le premier élément supérieur à 10</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;number[]&#125;</span><span style="color:#24292E"> arr</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;number&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * findFirstGreaterThan10([1, 8, 12, 3, 29]) // 12</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> findFirstGreaterThan10</span><span style="color:#24292E">(</span><span style="color:#E36209">arr</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> arr.</span><span style="color:#6F42C1">find</span><span style="color:#24292E">((</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> x </span><span style="color:#D73A49">></span><span style="color:#005CC5"> 10</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Trie les élèves par groupe</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123; &#123; name: string, groupe: number &#125;[] &#125;</span><span style="color:#24292E"> students</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123; &#123; name: string, groupe: number &#125;[] &#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const students = [</span></span>
<span class="line"><span style="color:#6A737D"> *  &#123; name: 'Alice', groupe: 1 &#125;,</span></span>
<span class="line"><span style="color:#6A737D"> *  &#123; name: 'Bob', groupe: 2 &#125;,</span></span>
<span class="line"><span style="color:#6A737D"> *  &#123; name: 'Charlie', groupe: 1 &#125;</span></span>
<span class="line"><span style="color:#6A737D"> * ]</span></span>
<span class="line"><span style="color:#6A737D"> * const sortedStudent = sortStudentsByGroup(students)</span></span>
<span class="line"><span style="color:#6A737D"> * // [ &#123; name: 'Alice', groupe: 1 &#125;, &#123; name: 'Charlie', groupe: 1 &#125;, &#123; name: 'Bob', groupe: 2 &#125; ]</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> sortStudentsByGroup</span><span style="color:#24292E">(</span><span style="color:#E36209">students</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> students.</span><span style="color:#6F42C1">sort</span><span style="color:#24292E">((</span><span style="color:#E36209">a</span><span style="color:#24292E">, </span><span style="color:#E36209">b</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> a.groupe </span><span style="color:#D73A49">-</span><span style="color:#24292E"> b.groupe);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Zip deux tableaux en un seul</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;T[]&#125;</span><span style="color:#24292E"> arr1</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;U[]&#125;</span><span style="color:#24292E"> arr2</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;[T,U][]&#125;</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * zipArrays([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]</span></span>
<span class="line"><span style="color:#6A737D"> * zipArrays(['a', 'b', 'c'], [1, 2]) // [['a', 1], ['b', 2], ['c', undefined]]</span></span>
<span class="line"><span style="color:#6A737D"> * zipArrays([1], [1, 2]) // [[1, 1], [undefined, 2]]</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> zipArrays</span><span style="color:#24292E">(</span><span style="color:#E36209">arr1</span><span style="color:#24292E">, </span><span style="color:#E36209">arr2</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6A737D">	// A compléter (on pourra utiliser Array.map, et le second argument de la fonction de callback qui contient l'index)</span></span>
<span class="line"><span style="color:#6A737D">	// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">	// arr contiendra le tableau le plus long</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> arr</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> arr1.</span><span style="color:#005CC5">length</span><span style="color:#D73A49"> ></span><span style="color:#24292E"> arr2.</span><span style="color:#005CC5">length</span><span style="color:#D73A49"> ?</span><span style="color:#24292E"> arr1 </span><span style="color:#D73A49">:</span><span style="color:#24292E"> arr2;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> arr.</span><span style="color:#6F42C1">map</span><span style="color:#24292E">((</span><span style="color:#E36209">_</span><span style="color:#24292E">, </span><span style="color:#E36209">i</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> [arr1[i], arr2[i]]);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Compose un tableau de fonctions en une seule fonction</span></span>
<span class="line"><span style="color:#6A737D"> * de tel sorte que pipeAll([f, g, h])(x) soit équivalent à h(g(f(x)))</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;function[]&#125;</span><span style="color:#24292E"> fns</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;function&#125;</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const addOne = (x) => x + 1;</span></span>
<span class="line"><span style="color:#6A737D"> * const multiplyByTwo = (y) => y * 2;</span></span>
<span class="line"><span style="color:#6A737D"> * const plusOneTimesTwoPlusOne = pipeAll([addOne, multiplyByTwo, addOne]);</span></span>
<span class="line"><span style="color:#6A737D"> * plusOneTimesTwoPlusOne(2); // (2 + 1) * 2 + 1 = 7</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> pipeAll</span><span style="color:#24292E">(</span><span style="color:#E36209">fns</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> (</span><span style="color:#E36209">x</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> fns.</span><span style="color:#6F42C1">reduce</span><span style="color:#24292E">((</span><span style="color:#E36209">acc</span><span style="color:#24292E">, </span><span style="color:#E36209">fn</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#6F42C1"> fn</span><span style="color:#24292E">(acc), x);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),e(o,p)},$$slots:{default:!0}});var S=a(k,6);M(S,{children:(o,i)=>{var p=$(),y=E(p);d(y,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Manipulation du DOM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Crée un élément HTML et lui ajoute du texte</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;string&#125;</span><span style="color:#24292E"> tag</span><span style="color:#6A737D"> - Le type de l'élément HTML (div, span, p, etc.)</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;string&#125;</span><span style="color:#24292E"> text</span><span style="color:#6A737D"> - Le texte contenu dans l'élément</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;HTMLElement&#125;</span><span style="color:#6A737D"> - L'élément HTML créé</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const element = createElement('p', 'Hello world');</span></span>
<span class="line"><span style="color:#6A737D"> * document.body.appendChild(element);</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> createElement</span><span style="color:#24292E">(</span><span style="color:#E36209">tag</span><span style="color:#24292E">, </span><span style="color:#E36209">text</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> elem</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(tag);</span></span>
<span class="line"><span style="color:#24292E">	elem.textContent </span><span style="color:#D73A49">=</span><span style="color:#24292E"> text;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> elem;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Ajoute une classe à un tableau d'éléments</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;HTMLElement[]&#125;</span><span style="color:#24292E"> elements</span><span style="color:#6A737D"> - Un tableau d'éléments HTML</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;string&#125;</span><span style="color:#24292E"> className</span><span style="color:#6A737D"> - La classe à ajouter</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const elements = Array.from(document.querySelectorAll('.emoji-card'));</span></span>
<span class="line"><span style="color:#6A737D"> * addClass(elements, 'hidden'); // Ajoute la classe 'hidden' à tous les éléments '.emoji-card'</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> addClass</span><span style="color:#24292E">(</span><span style="color:#E36209">elements</span><span style="color:#24292E">, </span><span style="color:#E36209">className</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#24292E">	elements.</span><span style="color:#6F42C1">forEach</span><span style="color:#24292E">((</span><span style="color:#E36209">element</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> element.classList.</span><span style="color:#6F42C1">add</span><span style="color:#24292E">(className));</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Trie les éléments d'un tableau selon leur attribut data-*</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;HTMLElement[]&#125;</span><span style="color:#24292E"> elements</span><span style="color:#6A737D"> - Un tableau d'éléments HTML</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;string&#125;</span><span style="color:#24292E"> dataAttribute</span><span style="color:#6A737D"> - L'attribut data-* à utiliser pour le tri</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;HTMLElement[]&#125;</span><span style="color:#6A737D"> - Le tableau d'éléments trié</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * &#x3C;ul class="todo-list"></span></span>
<span class="line"><span style="color:#6A737D"> *  &#x3C;li data-priority="3">Faire les courses&#x3C;/li></span></span>
<span class="line"><span style="color:#6A737D"> *  &#x3C;li data-priority="1">Appeler le plombier&#x3C;/li></span></span>
<span class="line"><span style="color:#6A737D"> *  &#x3C;li data-priority="2">Acheter des fleurs&#x3C;/li></span></span>
<span class="line"><span style="color:#6A737D"> * &#x3C;/ul></span></span>
<span class="line"><span style="color:#6A737D"> * sortElements(Array.from(document.querySelectorAll('.todo-list > li')), 'priority');</span></span>
<span class="line"><span style="color:#6A737D"> * // Retourne les li triés par priorité</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> **/</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> sortElements</span><span style="color:#24292E">(</span><span style="color:#E36209">elements</span><span style="color:#24292E">, </span><span style="color:#E36209">dataAttribute</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6A737D">	// A compléter</span></span>
<span class="line"><span style="color:#6A737D">	// A noter, on peut accéder à un attribut data-* d'un élément avec la propriété &#96;dataset&#96;</span></span>
<span class="line"><span style="color:#6A737D">	// Par exemple, si on ajoute l'attribut data-priority à un élément, on peut y accéder avec &#96;element.dataset.priority&#96;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> elements.</span><span style="color:#6F42C1">sort</span><span style="color:#24292E">((</span><span style="color:#E36209">a</span><span style="color:#24292E">, </span><span style="color:#E36209">b</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> a.dataset[dataAttribute] </span><span style="color:#D73A49">-</span><span style="color:#24292E"> b.dataset[dataAttribute]);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Retourne une fonction qui, lorsqu'elle est appelée, ajoute ou enlève une classe à un élément</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;HTMLElement&#125;</span><span style="color:#24292E"> element</span><span style="color:#6A737D"> - L'élément HTML à modifier</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@param</span><span style="color:#6F42C1"> &#123;string&#125;</span><span style="color:#24292E"> className</span><span style="color:#6A737D"> - La classe à ajouter ou enlever</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@returns</span><span style="color:#6F42C1"> &#123;function&#125;</span><span style="color:#6A737D"> - La fonction qui ajoute ou enlève la classe à l'élément lorsqu'elle est appelée</span></span>
<span class="line"><span style="color:#6A737D"> *</span></span>
<span class="line"><span style="color:#6A737D"> * </span><span style="color:#D73A49">@example</span></span>
<span class="line"><span style="color:#6A737D"> * const togleHidden = createToggleCallback(document.querySelector('.emoji-card'), 'hidden');</span></span>
<span class="line"><span style="color:#6A737D"> * togleHidden(); // Ajoute la classe 'hidden' à l'élément</span></span>
<span class="line"><span style="color:#6A737D"> * togleHidden(); // Enlève la classe 'hidden' de l'élément</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> createToggleCallback</span><span style="color:#24292E">(</span><span style="color:#E36209">element</span><span style="color:#24292E">, </span><span style="color:#E36209">className</span><span style="color:#24292E">) &#123;</span></span>
<span class="line"><span style="color:#6A737D">	// A compléter</span></span>
<span class="line"><span style="color:#6A737D">	// On pourra utiliser la méthode &#96;classList.toggle&#96; pour ajouter ou enlever la classe</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#24292E"> () </span><span style="color:#D73A49">=></span><span style="color:#24292E"> element.classList.</span><span style="color:#6F42C1">toggle</span><span style="color:#24292E">(className);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),e(o,p)},$$slots:{default:!0}}),e(H,g),ss()}export{Ms as component};
