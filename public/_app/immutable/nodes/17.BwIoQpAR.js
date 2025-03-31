import{a as l,e as x,t as P,c as m}from"../chunks/B4pklceG.js";import"../chunks/CMei0t4b.js";import{n as D,f as t,$ as k,M as n,N as c,O as r}from"../chunks/Du4uIILg.js";import{h as q}from"../chunks/CU3E0FLs.js";import{h as o}from"../chunks/Cs1o_ong.js";import{S as E}from"../chunks/OjqImkSQ.js";import{R as w}from"../chunks/Dayddfh2.js";var $=x(`<section><h1><code>Promise</code> et fonctions <code>async</code></h1> <h2 class="text-pink-500">Technologie web 3</h2> <p class="text-gray-500">Johan Girod</p></section> <section><section><h2>Rappel : code asynchrone = callback</h2> <pre><code class="language-js" data-trim="" data-line-numbers="">
        <script type="text/template">
					domNode.addEventListener('click', function () {
						console.log('click');
					});

					setTimeout(function () {
						console.log('timeout');
					}, 1000);
				<\/script>
</code></pre></section> <section><h2>Problème : callback hell</h2> <pre><code class="language-js" data-trim="" data-line-numbers="">
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
</code></pre> <p>Les <code>Promise</code> (promesses) permettent de résoudre ce problème.</p></section></section> <section><section><h2>Utiliser une <code>Promise</code></h2> <p class="text-xl">Une promesse est un objet avec une méthode <code>then</code> qui prend un callback appelé une
			fois : quand la <strong>promesse est résolue</strong>.</p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
                    function attendre(ms: number): Promise<void> {
                        // ...
                    }
                    
                    attendre(10ms).then(() => {
                        console.log(value);
                    });
				<\/script>
</code></pre></section> <section><h2>Enchainer les <code>Promise</code></h2> <p>Si on retourne une promesse dans un <code>.then()</code>, on peut enchainer les promesses.</p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
                    attendre(100ms)
                        .then(() => {
                            console.log('A');
                            return attendre(100ms);
                        })
                        .then(() => {
                            console.log('B');
                            return attendre(100ms);
                        })
                        .then(() => {
                            console.log('C');
                        });
				<\/script>
</code></pre></section> <section><h2>Créer une <code>Promise</code></h2> <p>On utilise <code>new Promise</code>, un constructeur qui accepte une fonction avec un argument <code>resolve</code></p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					function attendre(ms: number): Promise<void> {
						return new Promise((resolve) => {
							setTimeout(resolve, ms);
						});
					}
				<\/script>
        </code></pre></section> <section><h2>Les promesses peuvent retourner des valeurs</h2> <p>On peut voir les promesse comme des <strong>boites</strong> qui contiennent une valeur qui existera
			dans le futur.</p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					// Attend un nombre de seconde aléatoire (max 10) puis retourne le temps écoulé
					function attendreRandom(): Promise<number> {
						const ms = Math.random() * 10000;
						return new Promise((resolve) => {
							setTimeout(() => {
								resolve(ms);
							}, ms);
						});
					}

					attendreRandom().then((value) => {
						console.log(\`Temps écoulé : \${value}ms\`);
					});
				<\/script>
        </code></pre></section> <section><h2>Combiner les promesses - <code>Promise.all</code></h2> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					Promise.all([attendre(1000), attendre(3000)]).then(() => {
						console.log('Temps écoulé : ?');
					});
				<\/script>
        </code></pre> <p>Les promesses sont exécutées en parallèle, puis le <code>.then()</code> est appelé une fois que
			toutes les promesses sont résolues.</p></section> <section><h2>Combiner les promesses - <code>Promise.race</code></h2> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					Promise.race([attendre(1000), attendre(3000)]).then(() => {
						console.log('Temps écoulé : ?');
					});
				<\/script>
        </code></pre> <p>Le <code>.then()</code> est appelé dès que la première promesse est résolue.</p></section></section> <section><section><h2><code>async</code> / <code>await</code></h2> <p class="text-xl">Quand une fonction manipule des promesses, on peut utiliser <code>async</code> et <code>await</code> pour rendre le code plus lisible.</p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					async function main() {
						await attendre(1000);
						console.log('A');
						await attendre(1000);
						console.log('B');
						await attendre(1000);
						console.log('C');
					}

					main();
				<\/script>
</code></pre></section> <section><p class="text-xl">Les fonctions <code>async</code> retournent une promesse, qui est résolue avec la valeur retournée.</p> <pre><code class="language-ts" data-trim="" data-line-numbers="">
        <script type="text/template">
					async function main(): Promise<string> {
						await attendre(1000);
						return 'A';
					}

					main().then((value) => {
						console.log(value);
					});
				<\/script>
	</code></pre></section> <section><h2>A savoir</h2> <ul><li>On peut utiliser <code>await</code> pour attendre n'importe quelle promesse</li> <li>Pour utiliser <code>await</code>, la fonction doit être déclarée avec <code>async</code>.</li> <li>On peut utiliser <code>await</code> dans une boucle ou dans une condition</li></ul></section></section> <section><h2>À vous de jouer !</h2></section>`,1);function _(i){var p=$();D(8),l(i,p)}var O=P("<!> <h2>TP Memory (suite)</h2> <p>On continue le jeu de memory en ajoutant des fonctionnalités asynchrones.</p> <ol><li><p>Créer une fonction asynchrone <code>boucleJeu</code>. La fonction doit :</p> <ul><li>attendre que l’utilisateur clique sur une carte</li> <li>retourner la carte cliquée</li> <li>répéter ces étapes jusqu’à ce que toutes les cartes soient retournées.</li></ul> <p>On pourra utiliser la fonction suivante :</p> <!> <p>Cette fonction retourne une promesse resolvant sur la l’index de la carte cliqué. On peut donc l’utiliser dans une fonction asynchrone pour attendre que l’utilisateur clique sur une carte.</p> <!> <!></li> <li><p>Modifier la fonction ci-dessus pour ajouter le comportement suivant :</p> <blockquote><p>Si deux cartes sont retournées, les cacher après une seconde si elles ne sont pas identiques.</p></blockquote> <!></li> <li><p>Créer une fonction principale asynchrone <code>main</code>. Le jeu se termine si toutes les cartes sont retournées en moins de 30 secondes, ou si le joueur a gagné. Lorsque le jeu se termine :</p> <ul><li>retourner face visible toutes les cartes restantes</li> <li>afficher un message de félicitations si le joueur a gagné, ou un message d’encouragement sinon.</li> <li>afficher un bouton pour rejouer.</li></ul> <blockquote><p>On pourra utiliser <code>Promise.race</code>.</p></blockquote> <!></li> <li><p>Faire en sorte d’afficher le nombre de secondes restantes avant la fin du jeu.</p></li></ol>",1);function B(i){var p=O();q(s=>{k.title="Promise et fonctiona async - TW3 - Johan Girod"});var C=t(p);w(C,{children:(s,d)=>{_(s)},$$slots:{default:!0}});var h=n(C,6),y=c(h),f=n(c(y),6);o(f,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#6A737D">/**</span></span>
<span class="line"><span style="color:#6A737D"> * Renvoie une &#96;Promise&#96; qui &#96;resolve&#96; quand une carte a été cliquée. Le contenu de la Promise est l'index de cette carte dans le tableau.</span></span>
<span class="line"><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">type</span><span style="color:#6F42C1"> CardIndex</span><span style="color:#D73A49"> =</span><span style="color:#005CC5"> number</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#D73A49">async</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> clickOnCard</span><span style="color:#24292E">()</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Promise</span><span style="color:#24292E">&#x3C;</span><span style="color:#6F42C1">CardIndex</span><span style="color:#24292E">> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	return</span><span style="color:#D73A49"> new</span><span style="color:#005CC5"> Promise</span><span style="color:#24292E">((</span><span style="color:#E36209">resolve</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#6F42C1"> listener</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> (</span><span style="color:#E36209">event</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> MouseEvent</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> &#123;</span></span>
<span class="line"><span style="color:#24292E">			console.</span><span style="color:#6F42C1">log</span><span style="color:#24292E">(event.target);</span></span>
<span class="line"><span style="color:#D73A49">			if</span><span style="color:#24292E"> (</span><span style="color:#D73A49">!</span><span style="color:#24292E">event.target.classList.</span><span style="color:#6F42C1">contains</span><span style="color:#24292E">(</span><span style="color:#032F62">'carte'</span><span style="color:#24292E">)) &#123;</span></span>
<span class="line"><span style="color:#D73A49">				return</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			&#125;</span></span>
<span class="line"><span style="color:#D73A49">			const</span><span style="color:#005CC5"> index</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> Array.</span><span style="color:#6F42C1">from</span><span style="color:#24292E">(event.target.parentNode.children).</span><span style="color:#6F42C1">indexOf</span><span style="color:#24292E">(</span></span>
<span class="line"><span style="color:#24292E">				event.target </span><span style="color:#D73A49">as</span><span style="color:#6F42C1"> HTMLElement</span></span>
<span class="line"><span style="color:#24292E">			);</span></span>
<span class="line"><span style="color:#6F42C1">			resolve</span><span style="color:#24292E">(index);</span></span>
<span class="line"><span style="color:#24292E">			document.</span><span style="color:#6F42C1">removeEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'click'</span><span style="color:#24292E">, listener);</span></span>
<span class="line"><span style="color:#24292E">		&#125;;</span></span>
<span class="line"><span style="color:#24292E">		document.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'click'</span><span style="color:#24292E">, listener);</span></span>
<span class="line"><span style="color:#24292E">	&#125;);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`);var A=n(f,4);o(A,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">async</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> boucleJeu</span><span style="color:#24292E">() &#123;</span></span>
<span class="line"><span style="color:#6A737D">	// à compléter ...</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> index</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> await</span><span style="color:#6F42C1"> clickOnCard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">	console.</span><span style="color:#6F42C1">log</span><span style="color:#24292E">(</span><span style="color:#032F62">&#96;Carte cliquée : $&#123;</span><span style="color:#24292E">index</span><span style="color:#032F62">&#125;&#96;</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#6A737D">	// à compléter ...</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"><span style="color:#6F42C1">boucleJeu</span><span style="color:#24292E">();</span></span></code></pre>`);var v=n(A,2);E(v,{children:(s,d)=>{var e=m(),a=t(e);o(a,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">async</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> boucleJeu</span><span style="color:#24292E">(</span><span style="color:#E36209">cartes</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Array</span><span style="color:#24292E">&#x3C;</span><span style="color:#6F42C1">Carte</span><span style="color:#24292E">>)</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Promise</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">boolean</span><span style="color:#24292E">> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	while</span><span style="color:#24292E"> (cartes.</span><span style="color:#6F42C1">some</span><span style="color:#24292E">((</span><span style="color:#E36209">carte</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#D73A49"> !</span><span style="color:#24292E">carte.visible)) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		afficherCarte</span><span style="color:#24292E">(cartes);</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> index</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> await</span><span style="color:#6F42C1"> clickOnCard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#24292E">		carte1 </span><span style="color:#D73A49">=</span><span style="color:#24292E"> cartes[index];</span></span>
<span class="line"><span style="color:#24292E">		carte1.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> true</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),l(s,e)},$$slots:{default:!0}}),r(y);var u=n(y,2),b=n(c(u),4);E(b,{children:(s,d)=>{var e=m(),a=t(e);o(a,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">async</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> boucleJeu</span><span style="color:#24292E">(</span><span style="color:#E36209">cartes</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Array</span><span style="color:#24292E">&#x3C;</span><span style="color:#6F42C1">Carte</span><span style="color:#24292E">>)</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Promise</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">boolean</span><span style="color:#24292E">> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	while</span><span style="color:#24292E"> (</span><span style="color:#D73A49">!</span><span style="color:#24292E">cartes.</span><span style="color:#6F42C1">every</span><span style="color:#24292E">((</span><span style="color:#E36209">carte</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> carte.visible)) &#123;</span></span>
<span class="line"><span style="color:#6F42C1">		afficherCarte</span><span style="color:#24292E">(cartes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> index1</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> await</span><span style="color:#6F42C1"> clickOnCard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> carte1</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> cartes[index];</span></span>
<span class="line"><span style="color:#24292E">		carte1.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> true</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#6F42C1">		afficherCarte</span><span style="color:#24292E">(cartes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> index2</span><span style="color:#D73A49"> =</span><span style="color:#D73A49"> await</span><span style="color:#6F42C1"> clickOnCard</span><span style="color:#24292E">();</span></span>
<span class="line"><span style="color:#D73A49">		const</span><span style="color:#005CC5"> carte2</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> cartes[index2];</span></span>
<span class="line"><span style="color:#24292E">		carte2.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> true</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">		if</span><span style="color:#24292E"> (carte1.symbole </span><span style="color:#D73A49">!==</span><span style="color:#24292E"> carte2.symbole) &#123;</span></span>
<span class="line"><span style="color:#D73A49">			await</span><span style="color:#6F42C1"> attendre</span><span style="color:#24292E">(</span><span style="color:#005CC5">1000</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">			carte1.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> false</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">			carte2.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> false</span><span style="color:#24292E">;</span></span>
<span class="line"><span style="color:#24292E">		&#125;</span></span>
<span class="line"><span style="color:#24292E">	&#125;</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span></code></pre>`),l(s,e)},$$slots:{default:!0}}),r(u);var g=n(u,2),F=n(c(g),6);E(F,{children:(s,d)=>{var e=m(),a=t(e);o(a,()=>`<pre class="shiki github-light" style="background-color:#fff;color:#24292e" tabindex="0"><code><span class="line"><span style="color:#D73A49">async</span><span style="color:#D73A49"> function</span><span style="color:#6F42C1"> main</span><span style="color:#24292E">()</span><span style="color:#D73A49">:</span><span style="color:#6F42C1"> Promise</span><span style="color:#24292E">&#x3C;</span><span style="color:#005CC5">void</span><span style="color:#24292E">> &#123;</span></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> cartes</span><span style="color:#D73A49"> =</span><span style="color:#6F42C1"> creerJeu</span><span style="color:#24292E">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">	// Cette promesse est résolu dès que l'une des deux promesses se termine.</span></span>
<span class="line"><span style="color:#D73A49">	await</span><span style="color:#005CC5"> Promise</span><span style="color:#24292E">.</span><span style="color:#6F42C1">race</span><span style="color:#24292E">(</span><span style="color:#6F42C1">attendre</span><span style="color:#24292E">(</span><span style="color:#005CC5">30000</span><span style="color:#24292E">), </span><span style="color:#6F42C1">boucleJeu</span><span style="color:#24292E">(cartes));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">	// On affiche les cartes restantes</span></span>
<span class="line"><span style="color:#24292E">	cartes.</span><span style="color:#6F42C1">forEach</span><span style="color:#24292E">((</span><span style="color:#E36209">carte</span><span style="color:#24292E">) </span><span style="color:#D73A49">=></span><span style="color:#24292E"> (carte.visible </span><span style="color:#D73A49">=</span><span style="color:#005CC5"> true</span><span style="color:#24292E">));</span></span>
<span class="line"><span style="color:#6F42C1">	afficherCarte</span><span style="color:#24292E">(cartes);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> message</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'div'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	message.textContent </span><span style="color:#D73A49">=</span><span style="color:#24292E"> gagne </span><span style="color:#D73A49">?</span><span style="color:#032F62"> 'Bravo !'</span><span style="color:#D73A49"> :</span><span style="color:#032F62"> 'Dommage, tu feras mieux la prochaine fois.'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49">	const</span><span style="color:#005CC5"> button</span><span style="color:#D73A49"> =</span><span style="color:#24292E"> document.</span><span style="color:#6F42C1">createElement</span><span style="color:#24292E">(</span><span style="color:#032F62">'button'</span><span style="color:#24292E">);</span></span>
<span class="line"><span style="color:#24292E">	button.textContent </span><span style="color:#D73A49">=</span><span style="color:#032F62"> 'Rejouer'</span><span style="color:#24292E">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E">	button.</span><span style="color:#6F42C1">addEventListener</span><span style="color:#24292E">(</span><span style="color:#032F62">'click'</span><span style="color:#24292E">, main);</span></span>
<span class="line"><span style="color:#24292E">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1">main</span><span style="color:#24292E">();</span></span></code></pre>`),l(s,e)},$$slots:{default:!0}}),r(g),D(2),r(h),l(i,p)}export{B as component};
