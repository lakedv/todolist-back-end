const express = require('express');
const db = require('./firestore.js')
const router = express.Router();

router.get('/', async (req, res) => {
  let snapshot = await db.collection('todolist').get()
  let todos = [];

  snapshot.forEach(doc => {
    let data = doc.data();
    todos.push({
      id: doc.id,
      desc: data.desc,
      done: data.done
    })
  })
  res.send(todos);
})

router.get('/:id', async function (req, res) {
  let id = req.params.id;
  let doc = await db.collection('todolist').doc(id).get()
  let todos = {};

  let data = doc.data();
  todos.id = doc.id;
  todos.desc = data.desc;
  todos.done = data.done;

  res.send(todos);
})

router.post('/', (req, res) => {
  let description = req.body.description;

  let todos = {
    id: 99,
    description,
    done: false
  }
  //insertamos un objeto con descripción y sin "terminar"
  /*
  db.todolist.insert(todos, (err, result) => { // <-- funcion de callback 
    // generalmente, en node, los clientes de db te devuelven un callback
    // con un error (que si viene nulo quiere decirque no hubo error)
    // y el resultado de la consulta/operación

    if (err) {
      res.status(404).send({
        error: err
      })
    } else {
      todos.id = result.newId // Supongamos que así llega el nuevo id desdea db
    }
  })
  */

  res.send(todo);
})

router.put('/:id', function (req, res) {
  // get item object match by `id`
  /*let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });*/
  let id = req.params.id

  // check if item found
  if (id) {
    let updated = {
      description: req.body.description, // set value of `title` get from req
      done: req.body.done // set value of `completed` get from req
    };
    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.send(updated)
  }
});

router.delete('/:id', function (req, res) {
  // find item from array of data
  /*let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  */
  let id = req.params.id

  /*if (id) {
    // if item found then find index at which the item is
    // stored in the `data` array
    let targetIndex = data.indexOf(found);

    // splice means delete item from `data` array using index
    //index = conexion a dB
    data.splice(targetIndex, 1);
  }*/

  // return with status 204
  // success status response code 204 indicates
  // that the request has succeeded
  res.json({
    message: 'Deleted'
  });
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;