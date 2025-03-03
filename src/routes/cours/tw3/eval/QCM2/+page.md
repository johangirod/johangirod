# QCM Techno Web 3 - 2023

**Barème : ** 1 pt par bonne réponse, -0,25pt par mauvaise réponse, 0 pt par réponse non cochée.

**Une seule réponse valide par question :** si plusieurs réponses ont l'air correcte, il y en a toujours une qui l'est plus que les autres.

## ORM (3 pts)

A quoi sert un ORM en informatique ?

- A faciliter la gestion des transactions
- A isoler le code de l'implémentation spécifique de la base de données
- A améliorer la performance des requêtes SQL
- A réduire la taille totale du code source

Quel est le verbe HTTP utilisé pour créer une nouvelle ressource ?

- `POST`
- `GETALL`
- `FETCH`
- `GET`

Quelle bibliothèque JavaScript peux-t-on utiliser pour créer des applications Web côté serveur en Node ?

- jQuery
- React
- Express.js
- Angular

Quelle méthode d’Express.js est utilisée pour gérer les requêtes HTTP GET ?

- app.get()
- app.post()
- app.use()
- app.route()

Que veux dire MVC ?

- Model View Controller
- Model View Component
- Model View Container
- Model View Content

A quoi sert un moteur de template dans une application Web ?

- A générer des pages HTML dynamiquement
- A gérer les requêtes HTTP
- A gérer les bases de données
- A gérer les utilisateurs

Soit une requête GET `/movies?q=spiderman`, comment récupérer la valeur du paramètre `q` dans une route Express.js ?

- `req.query.q`
- `req.params.q`
- `req.body.q`
- `req.route.q`

Dans une API REST, quel code HTTP doit-on renvoyer quand la ressource demandée n'existe pas ?

- `204 : No Content`
- `308 : Bad Fuel`
- `400 : Bad Request`
- `404 : Not Found`

Est-il possible de supprimer une ressource avec une requête HTTP GET dans une API REST ?

- Oui
- Non

Quelle est le type de contenu (Content-Type) retournée par une API REST ?

- `application/json`
- `text/html`
- `application/xml`
- `text/plain`

Quelle est la différence entre une image Docker et un conteneur Docker ?

- Une image est un conteneur en cours d’exécution.
- Une image est un modèle pour créer des conteneurs.
- Une image est un alias pour un conteneur.
- Une image est un fichier de configuration pour un conteneur.

Quelle commande permet de démarrer un conteneur Docker ?

- `docker create`
- `docker start`
- `docker run`
- `docker launch`

Quelle commande permet de lister les conteneurs Docker en cours d'exécution ?

- `docker list`
- `docker ps`
- `docker status`
- `docker running`

Qu'est-ce que GraphQL ?

- Un langage de requête pour les API
- Un système de gestion de bases de données
- Un langage de programmation
- Un langage de balisage pour les documents

Quelle est la principale différence entre REST et GraphQL en termes de requêtes ?

- REST utilise des requêtes HTTP, tandis que GraphQL utilise des requêtes SQL.
- REST utilise des points de terminaison définis, tandis que GraphQL permet aux clients de spécifier les données nécessaires.
- REST utilise uniquement des requêtes GET, tandis que GraphQL utilise des requêtes POST.
- REST est plus moderne que GraphQL.

Quelle commande est utilisée pour installer les dépendances d'un projet Node.js avec npm ?

- `npm add`
- `npm apt-get install`
- `npm install`
- `npm setup`

Comment déclarer une fonction asynchrone en JavaScript ?

- `function myFunction() async { ... }`
- `async function myFunction() { ... }`
- `function async myFunction() { ... }`
- `function myFunction async() { ... }`

Qu'est-ce que Node.js ?

- Un navigateur web
- Un serveur web
- Un environnement d'exécution JavaScript côté serveur
- Une bibliothèque JavaScript

Est-ce que le code suivant est correct ?

```javascript
function getMovie(id) {
  const movie = await getMovieById(id);
  return movie;
}
```

- Oui
- Non

Quel est la méthode utilisée pour faire un appel HTTP depuis un navigateur web ?

- `get()`
- `request()`
- `call()`
- `fetch()`

À quel type de base de donnée appartient MongoDB ?

- Relationnelle
- Document
- Clé-valeur
- Graph

<style>
    ul {
      padding-left: 1.5rem;
      counter-reset: question;
      margin-bottom: 2rem;
    }
    li {
      list-style: none;
      counter-increment: question;
    }

    li::before {
      content: counter(question, lower-alpha) ". ";
        color: #000;
        font-weight: bold;

    }
    li::marker {
      content: " ☐ ";
        color: #000;
        font-size: 1.1rem;
        font-weight: bold;
    }

    @media print {
      :global(html, body) {
        font-size: 13.6px;
      }
      p {
        margin-bottom: 0.5rem !important;
      }
      ul {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
    }
</style>
