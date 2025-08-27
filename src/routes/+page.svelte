<script>
	import Experience from '$lib/Experience.svelte';
</script>

<svelte:head>
	<title>Johan Girod - Développeur Full-stack | Expert Technologies Front-end</title>
	<meta
		name="description"
		content="Développeur full-stack expert React/TypeScript. Co-créateur de mon-entreprise.urssaf.fr et du langage Publicodes. Freelance spécialisé en services publics numériques."
	/>
	<meta
		name="keywords"
		content="Johan Girod, développeur full-stack, React, TypeScript, Svelte, Publicodes, beta.gouv.fr, mon-entreprise, freelance, services publics numériques"
	/>
	<meta name="author" content="Johan Girod" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://johangirod.com/" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://johangirod.com/" />
	<meta
		property="og:title"
		content="Johan Girod - Développeur Full-stack | Expert Technologies Front-end"
	/>
	<meta
		property="og:description"
		content="Développeur full-stack expert React/TypeScript. Co-créateur de mon-entreprise.urssaf.fr et du langage Publicodes. Disponible pour des missions alliant modélisation métier, architecture front-end et impact sociétal."
	/>
	<meta property="og:site_name" content="Johan Girod" />
	<meta property="og:locale" content="fr_FR" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Johan Girod",
			"jobTitle": "Développeur Full-stack",
			"description": "Expert en technologies front-end, créateur de solutions numériques pour l'administration publique",
			"url": "https://johangirod.com",
			"sameAs": [
				"https://github.com/johangirod",
				"https://www.linkedin.com/in/johangirod/",
				"https://calinou.coop/"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Calinou Coopérative"
			},
			"knowsAbout": [
				"React",
				"TypeScript",
				"Svelte",
				"JavaScript",
				"Accessibilité web",
				"Performance web",
				"Services publics numériques"
			]
		}
	</script>
</svelte:head>

<div
	class=" container prose mx-auto max-w-screen-md lg:prose-lg xl:prose-xl print:prose-sm xl:max-w-screen-lg"
>
	<header class="">
		<div class=" flex flex-wrap items-baseline justify-center">
			<h1>Johan Girod</h1>
			<div role="list" class="mb-6 inline-flex flex-1 justify-center space-x-4 md:justify-end">
				<span role="listitem">
					<a
						href="https://github.com/johangirod/"
						aria-label="Voir mes contributions sur Github, nouvelle fenêtre"
						target="_blank">Github</a
					>
				</span>
				<span role="listitem">
					<a
						href="https://www.linkedin.com/in/johangirod/"
						aria-label="Consulter mon CV sur Linkedin, nouvelle fenêtre"
						target="_blank">Linkedin</a
					>
				</span>
				<span role="listitem">
					<a
						href="https://calinou.coop/"
						aria-label="Accéder au site de ma coopérative, Calinou, nouvelle fenêtre"
						target="_blank">Coopérative</a
					>
				</span>
				<span role="listitem">
					<a href="/cours">Cours</a>
				</span>
			</div>
		</div>
		<p class="!m-0 max-w-screen-md text-2xl leading-relaxed text-pink-600">
			<strong>Développeur full-stack | Expert technologies front-end</strong>
		</p>
	</header>

	<p>
		Je conçois des <strong>applications web performantes et accessibles</strong>.
	</p>

	<p>
		Au sein du réseau <strong
			><a href="https://beta.gouv.fr" target="_blank" rel="noopener">beta.gouv.fr</a></strong
		>
		pendant 7 ans, j'ai développé des produits utilisés par des
		<strong>millions de personnes chaque mois</strong> :
		<a href="https://mon-entreprise.urssaf.fr" target="_blank" rel="noopener"
			>mon-entreprise.urssaf.fr</a
		>
		et
		<a href="https://annuaire-entreprises.data.gouv.fr" target="_blank" rel="noopener"
			>l'Annuaire des entreprises</a
		>.
	</p>

	<p>
		Ma spécialité : traduire <strong>l'expertise métier</strong> en expériences numériques facile d'accès.
	</p>

	<p>
		J'ai cocréé le langage
		<a href="https://publi.codes" target="_blank" rel="noopener">Publicodes</a>
		pour modéliser des domaines métiers complexes, aujourd'hui adopté par
		<strong>plus d'une dizaine d'équipes</strong> dans l'administration et le privé.
	</p>

	<p>
		Je crois en la construction de <strong
			>services publics numériques plus inclusifs et humains</strong
		>, où la technologie sert vraiment <strong>l'intérêt général</strong>.
	</p>

	<p>
		Disponible pour des missions alliant <strong>modélisation métier</strong>,
		<strong>architecture front-end</strong>
		et <strong>impact sociétal</strong>.
	</p>

	<h2>Expériences</h2>
	<div class="md:-mx-6 lg:-mx-8">
		<Experience
			title="Vaisso"
			start={new Date('2025-06')}
			role="Développeur Full-stack Freelance"
			technologies={[
				'Svelte (SvelteKit)',
				'PostgreSQL (Supabase)',
				'Node (Bun)',
				'Dokploy',
				'Tailwind',
				'LayerChart'
			]}
			keyFigures={['10 jours pour le MVP', '100 performance lighthouse']}
		>
			{#snippet description()}
				<p>Application web de <strong>suivi de décarbonation</strong> de parc hôtelier</p>
			{/snippet}
			{#snippet people()}
				<p>
					Cadrage préalable du projet avec ingénieur expert et CEO, puis échange réguliers. Unique
					développeur du projet.
				</p>
			{/snippet}
			<ul>
				<li>Parcours d'authentification et création de compte</li>
				<li>Recherche full-text sur plusieurs entitées</li>
				<li>Visualisation graphique de données de décarbonation</li>
				<li>Déploiement continu en auto-hébergement</li>
			</ul>
			{#snippet feeling()}
				<p>
					Une belle occasion de monter en compétence en base de donnée et de tester SvelteKit pour
					un application réelle. J'ai été étonné de la rapidité à laquelle le premier prototype a pu
					être déployé !
				</p>
			{/snippet}
		</Experience>

		<Experience
			title="Publicodes"
			href="https://publi.codes"
			role="Co-créateur et mainteneur principal"
			start={new Date('2018-05')}
			technologies={['TypeScript', 'OCaml', 'Compilateur', 'React', 'Théorie des langages']}
			keyFigures={['+10 équipes utilisatrices', '+30 contributeurs', '+35 releases']}
		>
			{#snippet description()}
				<p>
					Langage de modélisation pour les domaines métiers complexes, compréhensible par les devs
					et les expert⋅es
				</p>
			{/snippet}
			{#snippet people()}
				<p>
					Co-maintenu avec les autres contributeurs principaux : Émile Rolley et Clément Auger. Nous
					avons créé ensemble une coopérative pour porter ce commun numérique et développer ses
					usages. Échange régulier avec les réutilisateurs principaux, public et privé
					(mon-entreprise.urssaf.fr, karburan, etc.).
				</p>
			{/snippet}
			<ul>
				<li>Co-créateur et contributeur cœur du langage</li>
				<li>Gestion de projet open-source et animation de la communauté</li>
				<li>Planification et développement des nouvelles fonctionnalités</li>
				<li>Publication de releases et communication sur le blog</li>
				<li>Réécriture du compilateur en OCaml pour une v2</li>
			</ul>
			{#snippet feeling()}
				<p>
					Un projet qui me tient particulièrement à coeur, auquel je crois beaucoup, et qui me
					stimule techniquement et humainement.
				</p>
			{/snippet}
		</Experience>

		<Experience
			title="Annuaire des entreprises"
			href="https://annuaire-entreprises.data.gouv.fr/"
			start={new Date('2023-10')}
			keyFigures={['6M utilisateurs/mois', '22 APIs externes interrogées']}
			end={new Date('2024-10')}
			technologies={[
				'React (NextJS)',
				'TypeScript',
				'Performance web',
				'Sentry',
				'Accessibilité',
				'DSFR'
			]}
		>
			{#snippet description()}
				<p>Le site public pour la recherche de données ouvertes sur les entreprises</p>
			{/snippet}
			{#snippet people()}
				<p>
					Petite équipe pluridisciplinaire (PO / DataEng / UX / Devops / Support), très soudée.
					Beaucoup d'échanges (discussions, code review) avec Xavier Jouppe, l'intrapreneur dev du
					produit. A/R mensuels à Paris.
				</p>
			{/snippet}
			<div>
				<h4 class="mb-2 font-semibold text-gray-900">Consolidation et passage à l'échelle</h4>
				<ul class="mb-4">
					<li>
						Refonte de la stratégie de test (tests de non-régression des APIs externes, stubs des
						requêtes des tests E2E)
					</li>
					<li>Refonte du système de logging et de rapport d'erreur via Sentry</li>
					<li>Migration vers NextJS Server Components</li>
					<li>Amélioration des performances (optimisation du LCP, requêtes asynchrones)</li>
					<li>Pré-audit et améliorations d'accessibilité</li>
				</ul>
				<h4 class="mb-2 font-semibold text-gray-900">Développement de nouvelles fonctionnalités</h4>
				<ul>
					<li>Intégration de nouvelles sources de données</li>
					<li>Création d'un espace connecté pour les agents</li>
					<li>Amélioration des statistiques d'usage</li>
				</ul>
			</div>
			{#snippet feeling()}
				<p>
					J'ai adoré travailler dans cette équipe, très bienveillante et par ailleurs extrêmement
					pointue techniquement. J'ai beaucoup appris. J'ai quitté le projet car je souhaitais me
					consacrer à plein temps au développement de Publicodes.
				</p>
			{/snippet}
		</Experience>

		<Experience
			title="mon-entreprise.urssaf.fr"
			href="https://mon-entreprise.urssaf.fr/"
			role="Lead Developer - Product Owner - Intrapreneur"
			start={new Date('2018-04')}
			end={new Date('2024-08')}
			technologies={[
				'React',
				'TypeScript',
				'Product Owner',
				'Accessibilité',
				'Node',
				'Storybook',
				'Vite',
				'Cypress'
			]}
			keyFigures={['1M de visites/mois', '25 simulateurs', '6 années de développement continu']}
		>
			{#snippet description()}
				<p>
					Le site de référence pour obtenir des réponses personnalisées sur la création et la
					gestion de son entreprise.
				</p>
			{/snippet}
			<div>
				<h4 class="mb-2 font-semibold text-gray-900">Technique</h4>
				<ul class="mb-4">
					<li>Création du site en React, avec gestion multi-lingue (français, anglais)</li>
					<li>Modélisation des règles de la législation socio-fiscale française</li>
					<li>Création et développement de Publicodes</li>
					<li>Implémentation du design system Urssaf en React</li>
					<li>Amélioration de l'accessibilité suite à audit</li>
					<li>Tests, bonnes pratiques, gestion de la dette technique</li>
				</ul>
				<h4 class="mb-2 font-semibold text-gray-900">Gestion de produit (intrapreneur)</h4>
				<ul>
					<li>Animation d'équipe (dev, UX, support, chargé de déploiement)</li>
					<li>Recrutement, suivi budgétaire</li>
					<li>Analyse des besoins des usagers</li>
					<li>Planification de feuille de route</li>
					<li>
						Échange avec les parties prenantes (sponsor, direction métier, administrations, usagers)
					</li>
				</ul>
			</div>
			{#snippet people()}
				<p>
					L'équipe a beaucoup varié. Au début en binôme de développeur avec <a
						href="https://kont.me/"
						aria-label="Voir le site de Maël, nouvelle fenêtre"
						target="_blank"
						rel="noopener noreferrer">Maël</a
					>, puis avec
					<a
						href="https://github.com/mquandalle/"
						aria-label="Voir le site de Jean-Baptiste, nouvelle fenêtre"
						target="_blank"
						rel="noopener noreferrer">Maxime</a
					>. J'ai ensuite pris le rôle d'intrapreneur, au sein d'une équipe de cinq personnes.
				</p>
			{/snippet}
			{#snippet feeling()}
				<p>
					Ma première expérience en tant que freelance à beta.gouv.fr, et quelle expérience ! J'ai
					eu la chance de pouvoir co-créer ce site de toute pièce, et de le faire peu à peu grandir
					jusqu'à 1M de visites/mois. Après six ans, j'ai passé la main à une nouvelle équipe.
				</p>
			{/snippet}
		</Experience>

		<Experience
			title="Evaneos"
			role="Développeur Front-end - Lead React"
			start={new Date('2014-04')}
			href="https://www.evaneos.fr/"
			end={new Date('2017-05')}
			technologies={['React', 'Redux', 'JavaScript', 'Progressive Web App', 'PHP', 'PostgreSQL']}
			keyFigures={["Formation d'une équipe de 6 développeurs"]}
		>
			{#snippet description()}
				<p>Startup de mise en relation entre voyageurs et agences de voyage locales</p>
			{/snippet}
			<ul>
				<li>Mise en place complète de la nouvelle stack React/Redux à Evaneos</li>
				<li>Conseil, formation et animation de la team React (6 développeurs)</li>
				<li>
					Création d'un framework de build open source Vitaminjs (comme NextJS, mais avant NextJS)
				</li>
				<li>Développement d'une application progressive de création d'itinéraire de voyage</li>
				<li>Conception et maintenance du backoffice professionnel pour les agences</li>
			</ul>
		</Experience>
	</div>
	<div class="prose-sm lg:prose xl:prose-lg">
		<h2 class="sr-only">Informations additionnelles</h2>
		<h3>Petit guide à l'usage de mes futurs collègues</h3>
		<ul>
			<li>
				<strong>J'aime discuter de vive voix</strong> quand il s'agit de la vision produit, les
				choix techniques. J'aime le débat contradictoire argumenté.
				<strong>Je n'hésite pas à m'engager</strong>
				si je crois dans la pertinence de mon point de vue. À l'inverse, j'arrive tout à fait à
				<strong>me taire si je n'ai pas d'avis tranché</strong>.
			</li>
			<li>
				Globalement, <strong>je ne prends rien personnellement</strong>, et même si j'aime proposer,
				contre-proposer, discuter, je sais me laisser convaincre, ou me ranger derrière une décision
				collégiale quand le temps est venu.
			</li>
			<li>
				Lorsque <strong>j'entreprends une tâche longue et complexe</strong>, j'ai tendance à m'y
				plonger à fond et de n'émerger que lorsque je parviens à la résoudre.
				<strong>Ne pas hésiter à me sortir la tête hors de l'eau</strong> si ça dure trop longtemps.
			</li>
			<li>
				<strong>Je ne me force pas à travailler, au risque de ne pas être productif</strong>. J'ai
				des horaires plutôt flexibles, et je les note chaque jour. Je convertis le volume horaire en
				jours à la fin du mois.
			</li>
			<li>
				Je peux manquer d'esprit de synthèse et je peux parfois me lancer dans <strong
					>des développements un peu longs</strong
				> de mes arguments. Ne pas hésiter à faire un petit signe si c'est le cas.
			</li>
			<li>
				<strong>J'aime l'autonomie</strong>, je préfère les tâches définies par leur but, plutôt que
				leur « comment ».
			</li>
			<li>
				J'aime <strong>appartenir à une équipe</strong>, et participer aux
				<strong>moments collectifs</strong>
				(séminaires, standup, repas, etc.).
			</li>
		</ul>
		<h3>Éducation</h3>

		<a
			href="https://ensimag.grenoble-inp.fr/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Accéder au site de Grenoble INP - Ensimag, nouvelle fenêtre"
			>Grenoble INP - Ensimag</a
		><br /> Diplôme d'ingénieur informatique (Bac +5)<br />Spécialité « Ingénierie des systèmes
		d'information »

		<h3>Enseignement</h3>
		<a
			href="https://web1.univ-jfc.fr/albi"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Accéder au site de l'université Champollion, nouvelle fenêtre"
			>Université Champollion à Albi</a
		><br />
		Enseignant en technologie web, conception et cours et TP (L2/L3)
		<br />
		<h3>Associatif</h3>
		Trésorier de l'association{' '}<a
			href="https://unesurcinq.fr/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Accéder au site de l'association Une sur Cinq, nouvelle fenêtre">Une sur Cinq</a
		><br />

		L’association Une sur Cinq est spécialiste de la prévention et de la lutte contre les violences
		sexistes et sexuelles au travail, en Occitanie.<br />

		<h3>Quand je ne suis pas derrière l'ordinateur...</h3>
		<p>
			L'été, on me trouve chaussure de marche au pied avec sac à dos, à parcourir les cols et
			sommets de France. À moins que ce soit en vélo au bord des rivières. Ou encore à danser/me
			cultiver dans un des nombreux festivals du pays, petits et grands.
		</p>
		<p>
			L'hiver, c'est plutôt autour d'un bon repas partagé entre ami⋅e⋅s, suivi de plusieurs heures
			de jeu de sociétés. Ou peut-être tout simplement une soirée série ou film.
		</p>
		<p>J'habite dans un petit village à côté d'Albi dans le Tarn.</p>
	</div>
</div>
