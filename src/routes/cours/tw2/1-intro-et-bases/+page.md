<script>
	import Reveal from '$lib/Reveal.svelte';
</script>

<Reveal>
    <section>
        <h1>Introduction et bases de JavaScript</h1>
        <h2 class="text-pink-500 ">Technologie web 2</h2>
        <p class="text-gray-500 pt-10 text-2xl">Johan Girod</p>
    </section>
	<section data-auto-animate>
		<pre data-id="code-animation"><code data-trim data-line-numbers
				>{`
    let planets = [
      { name: 'mars', diameter: 6779 },
    ]
`}
  </code></pre>
	</section>
	<section data-auto-animate>
		<pre data-id="code-animation"><code data-trim data-line-numbers>
{`
    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]
`}
  </code></pre>
	</section>
	<section data-auto-animate>
		<pre data-id="code-animation"><code data-trim data-line-numbers>
{`
    let circumferenceReducer = ( c, planet ) => {
      return c + planet.diameter * Math.PI;
    }
    
    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]
      
    let c = planets.reduce( circumferenceReducer, 0 )
`}

</code></pre>

</section>
</Reveal>

## Exercices / TP

Pour effectuer les exercices, vous pouvez utiliser le site [repljs.com](https://repljs.com/). Il vous permet de coder en JavaScript directement dans votre navigateur, avec autocomplétion et coloration syntaxique.

### Exercice 1
