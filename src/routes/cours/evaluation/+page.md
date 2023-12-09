# QCM

## API REST

**Question 1** : Quel est le verbe HTTP utilisé pour récupérer une liste de ressources ?
- POST
- GETALL
- FETCH
- GET

**Question 2** : Soit une route express `route.get('/api/users/:userId', getUser)` qui permet de récupérer un utilisateur par son identifiant. Comment récupérer l'identifiant de l'utilisateur dans la fonction `getUser` ?

- `req.userId`
- `req.query.userId`
- `req.params.userId`
- `req.route.id`

**Question 3** : On souhaite créer une route pour créer un nouveau menu. Quel est le bon code ?

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

**Question 4** : Comment 
<style>
    ul {
        list-style-type: '☐';
        color: #000;

        padding-left: 1rem;
    }
    li::marker {
        color: #000;
        font-size: 1.1rem;
    }
</style>
