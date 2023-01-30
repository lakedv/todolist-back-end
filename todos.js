const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('lostodos');
})

/*router.get('/:id', function (req, res) {
  let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
  })
})*/
router.get('/:id', function (req, res) {
  let id = req.params.id
  res.send({
    id,
    description: 'desc',
    done: false
  });

})

router.post('/', (req, res) => {
  let description = req.body.description;

  let todo = {
    id: 99,
    description,
    done: false
  }

  //insertamos un objeto con descripción y sin "terminar"
  db.todos.insert(todo, (err, result) => { // <-- funcion de callback 
    // generalmente, en node, los clientes de db te devuelven un callback
    // con un error (que si viene nulo quiere decirque no hubo error)
    // y el resultado de la consulta/operación

    if (err) {
      res.status(404).send({
        error: err
      })
    } else {
      todo.id = result.newId // Supongamos que así llega el nuevo id desdea db
    }
  })

  res.send(todo);
})

router.put('/:id', function (req, res) {
  // get item object match by `id`
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  // check if item found
  if (found) {
    let updated = {
      id: found.id,
      description: req.body.description, // set value of `title` get from req
      done: req.body.done // set value of `completed` get from req
    };
    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', function (req, res) {
  // find item from array of data
  let found = data.find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    // if item found then find index at which the item is
    // stored in the `data` array
    let targetIndex = data.indexOf(found);

    // splice means delete item from `data` array using index
    //index = conexion a dB
    data.splice(targetIndex, 1);
  }

  // return with status 204
  // success status response code 204 indicates
  // that the request has succeeded
  res.sendStatus(204);
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;