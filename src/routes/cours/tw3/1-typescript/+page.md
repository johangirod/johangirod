<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import Reveal from '$lib/Reveal.svelte';
  import Slides from './slides.svelte';
</script>

<svelte:head>

<title>Typescript - TW3 - Johan Girod</title>
</svelte:head>

<Reveal>
    <Slides/>
</Reveal>

## TP - Ajouter des types à un projet existant

Dans ce TP, nous allons ajouter des types à un projet existant pour améliorer la lisibilité du code et éviter des erreurs.

### Mise en place

1. Clonez le dépôt

```bash
  git clone https://sources.univ-jfc.fr/techno-web-2/tp-3.git
```

2. Ajouter typescript dans les dépendances du projet

```bash
  npm install --save-dev typescript
```

3. Créez un fichier `tsconfig.json` à la racine du projet

```json
{
	"compilerOptions": {
		"strict": true,
		"esModuleInterop": true,
		"skipLibCheck": true
	}
}
```
