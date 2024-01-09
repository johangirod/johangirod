<script>
	import Reveal from '$lib/Reveal.svelte';
    import clientServeurImg from './simple-client-server.png';
</script>

<Reveal>
    <section>
        <h1>Introduction et bases de JavaScript</h1>
        <h2 class="text-pink-500 ">Technologie web 2</h2>
        <p class="text-gray-500">Johan Girod</p>
    </section>
	<section>
        <section data-auto-animate>
            <h1>Le fonctionnement du web</h1>
            <p >Le web est un réseau de serveurs et de clients</p>
            <img src={clientServeurImg} alt="Schéma d'un échange entre client et serveur" />
            <aside class="notes">

            <ul>
            <li>Les clients correspondent aux appareils connectés sur Internet par les personnes (par exemple, votre ordinateur connecté par Wi-Fi ou votre téléphone connecté sur le réseau mobile) et aux logiciels d'accès au Web (par exemple, les navigateurs comme Firefox ou Chrome).</li>
            <li>
            Les serveurs sont des ordinateurs qui stockent des pages web, des sites ou des applications. Lorsqu'un appareil client souhaite accéder à une page web, une copie de la page est téléchargée depuis le serveur vers le client, la machine utilisée affiche alors le contenu dans le navigateur web de l'utilisatrice ou de l'utilisateur.

            </li></ul>
        </aside>

        </section>

        <section data-auto-animate>
        <h1>Le web est un ensemble de standards et protocole</h1>
        <h2 class="text-pink-500">Lesquelles ?</h2>
        </section>

        <section data-auto-animate>
        <h1>Le web est un ensemble de standards et protocole</h1>

        <ul class="pt-10">
            <li class="fragment semi-fade-out" data-fragment-index="7"><strong>DNS </strong><span class="fragment" data-fragment-index="1">– résolution de nom de domaine</span></li>
            <li class="fragment semi-fade-out" data-fragment-index="7" ><strong>HTTP </strong><span class="fragment" data-fragment-index="2">– protocole de communication client-serveur</span></li>
            <li ><strong>HTML </strong><span class="fragment" data-fragment-index="3">– structure et contenu</span></li>
            <li><strong>CSS </strong><span class="fragment" data-fragment-index="4">– mise en forme</span></li>
            <li ><strong>JavaScript </strong><span class="fragment" data-fragment-index="5">– interactivité</span></li>
        </ul>
        <p class="fragment pt-10" data-fragment-index="6">L'organisation <a href="https://www.w3.org/">W3C</a> définit les standards du web</p>
        </section>
    </section>

</Reveal>

## Exercices / TP

Pour effectuer les exercices, vous pouvez utiliser le site [repljs.com](https://repljs.com/). Il vous permet de coder en JavaScript directement dans votre navigateur, avec autocomplétion et coloration syntaxique.

### Exercice 1
