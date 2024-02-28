# QCM Techno Web 3 - 2023

**Barème : ** 1 pt par bonne réponse, -0,25pt par mauvaise réponse, 0 pt par réponse non cochée. 


**Une seule réponse valide par question :** si plusieurs réponses ont l'air correcte, il y en a toujours une qui l'est plus que les autres.

## ORM (3 pts)

**Question 1** : Qu'est-ce que signifie l'acronyme "ORM" en informatique ?
- Object-Relational Module
- Object-Relational Mapping
- Object-Recursive Mapping
- Object-Responsive Module

**Question 2** : Quel avantage l'utilisation d'un ORM offre-t-elle en termes de portabilité du code ?
- Facilite la gestion des transactions
- Isole le code de l'implémentation spécifique de la base de données
- Améliore la performance des requêtes SQL
- Réduit la taille totale du code source

**Question 3** : Qu'est-ce que TypeORM ?
- Un langage de programmation
- Un système de gestion de bases de données
- Une librairie d'Object-Relational Mapping (ORM)
- Un éditeur de texte

## Suite Extreme Carpaccio (4 pts)
**Question 4** : Que cherche à nous montrer l’expérience Extreme Carpaccio ?
- Que Node.js est très performant comme serveur web
- Qu’il vaut mieux éviter d’apporter trop de changements à son application pour éviter les problèmes de stabilité
- Qu’il est souvent bénéfique et plus efficace de découper un besoin en très petites étapes pour pouvoir rapidement livrer des fonctionnalités utiles.
- Qu’il est nécessaire d’utiliser les bons codes de retour pour pallier aux problèmes de sécurité du HTTP

**Question 5** : Quel code HTTP doit-on renvoyer quand la requête du client ne correspond pas à ce qui est attendu ?
- `204 : Incorrect Request`
- `308 : Bad Fuel`
- `400 : Bad Request`
- `501 : Server Error`

**Question 6** : Quel language puis-je utiliser pour envoyer une requête HTTP sur un serveur Node.js ?
- Soit JavaScript, soit TypeScript
- Uniquement JavaScript
- Uniquement TypeScript
- N’importe quel language

**Question 7** : Comment l'exercice "Extreme Carpaccio" reflète-t-il la philosophie de l'agilité dans le développement logiciel ?
- En privilégiant la documentation exhaustive
- En mettant l'accent sur des livraisons fréquentes et rapides
- En permettant la collaboration avec les utilisateurs
- En préférant des phases de développement plus longues.


## API REST (4 pts)

**Question 8** : Quel est le verbe HTTP utilisé pour récupérer une liste de ressources ?
- `POST`
- `GETALL`
- `FETCH`
- `GET`

**Question 9** : Soit une route express `route.get('/api/users/:userId', getUser)` qui permet de récupérer un utilisateur par son identifiant. Comment récupérer l'identifiant de l'utilisateur dans la fonction `getUser` ?

- `req.userId`
- `req.query.userId`
- `req.params.userId`
- `req.route.id`

**Question 10** : On souhaite créer une route pour créer un nouveau menu. Quel est le bon code ?

- ```js
  route.post('/menus', (req, res) => {
    const menu = req.body;
    const newMenu = await Menu.create(menu);
    res.json(newMenu);
  })
  ```
- ```js
  route.post('/menus/:id', (req, res) => {
    const menu = req.body;
    const id = req.params.id;
    const newMenu = await Menu.create(id, menu);
    res.json(newMenu);
  })
  ```
- ```js
    route.put('/menus/:id', (req, res) => {
        const { menu } = req.body;
        const id = req.params.id;
        const newMenu = await Menu.create(id, menu);
        res.json.send(newMenu);
    })
  ```
- ```js
    route.put('/menus', (req, res) => {
        const menu = req.body;
        await Menu.create(menu);
        res.json.send(menu);
    })
  ```

**Question 11** : Quel est l'avantage d'une architecture REST + application client par rapport à une architecture MVC  ?
- Elle est plus simple à mettre en place.
- Elle permet d'avoir une application client plus légère et plus rapide.
- Elle permet à d'autres clients que les navigateurs d'utiliser l'application.
- Elle permet de mieux gérer les erreurs.

### MongoDB (5 pts)
**Question 12** : Quel type de base de données est MongoDB ?
- Base de données relationnelle
- Base de données NoSQL orientée document
- Base de données en mémoire
- Base de données graph

**Question 13** : Quelle est la signification de BSON dans MongoDB ?
- Binary Script Object Notation
- Binary Serialized Object Notation
- Binary JSON
- Binary Storage Object Naming

**Question 14** : Quelle est la fonction du champ `_id` dans un document MongoDB ?
- Il est toujours obligatoire dans un document.
- Il représente l'identifiant unique du document.
- Il est utilisé pour stocker des données binaires.
- Il est réservé aux commentaires.

**Question 15** : Quelle commande est utilisée pour insérer un document dans une collection MongoDB ?
- `add`
- `insert`
- `create`
- `db.collection.insertOne`

**Question 16** : Qu'est-ce qu'un index composite dans MongoDB ?
- Un index qui stocke des données au format composite.
- Un index qui combine plusieurs champs en un seul index.
- Un index réservé aux opérations de comparaison.
- Un index utilisé exclusivement pour les opérations de tri.

### GraphQL (4 pts)
**Question 17** : Qu'est-ce que GraphQL ?
- Un langage de requête pour les bases de données relationnelles.
- Un protocole de communication pour les microservices.
- Un langage de requête pour les API.
- Un système de gestion de bases de données.

**Question 18** : Quelle est la principale différence entre REST et GraphQL en termes de requêtes ?
- REST utilise des requêtes HTTP, tandis que GraphQL utilise des requêtes SQL.
- REST utilise des points de terminaison définis, tandis que GraphQL permet aux clients de spécifier les données nécessaires.
- REST utilise uniquement des requêtes GET, tandis que GraphQL utilise des requêtes POST.
- REST est plus moderne que GraphQL.

**Question 19** : Quel est l'objet central de toute requête ou mutation GraphQL ?
- `Resolver`
- `Query`
- `Schema`
- `Mutation`

**Question 20** : Qu'est-ce qu'un fragment dans GraphQL ?
- Une partie d'une requête qui peut être réutilisée.
- Un type de données complexe dans le schéma.
- Une mutation complexe.
- Une opération de souscription.


## Bonus : docker et node (2pts additionnels)
**Barème** : 0.25pt par bonne réponse, 0 pt par mauvaise réponse ou réponse non cochée

**Question B-1**. Qu'est-ce qu'un conteneur Docker ?
- Une machine virtuelle
- Une application web
- Une instance en cours d'exécution d'une image
- Un fichier de configuration Docker

**Question B-3**. Comment expose-t-on des ports dans un conteneur Docker lors de sa création ?
- `-e`
- `-expose`
- `-p ou --publish`
- `-port`

**Question B-4**. Quelle commande Docker est utilisée pour lister les conteneurs en cours d'exécution ?
- `docker list`
- `docker ps`
- `docker status`
- `docker running`

**Question B-5**. Qu'est-ce qu'un Dockerfile ?
- Un fichier de configuration pour Docker Compose
- Un fichier de script pour automatiser la création d'images Docker
- Un fichier de journalisation pour les conteneurs Docker
- Un fichier de configuration pour Docker Swarm

**Question B-6**. Qu'est-ce que Node.js ?
- Un navigateur web
- Un serveur web
- Un environnement d'exécution JavaScript côté serveur
- Une bibliothèque JavaScript

**Question B-7**. Quelle commande est utilisée pour initialiser un projet Node.js avec npm ?
- `npm start`
- `npm init`
- `node init`
- `node create`

**Question B-8**. Quel module Node.js est utilisé pour créer un serveur HTTP ?
- `http-server`
- `web-server`
- `http`
- `server`

**Question B-10**. Comment peut-on gérer les variables d'environnement dans une application Node.js ?
- En les déclarant dans le fichier variables.env
- En utilisant le module dotenv
- En les passant en tant qu'arguments de la commande node
- A et B

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
