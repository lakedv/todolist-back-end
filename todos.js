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

router.post('/', async (req, res) => {
  let todos = {};
  todos.desc = req.body.desc;
  todos.done = false;
  let doc = await
    db.collection('todolist').add(todos);
  todos.id = doc.id

  console.log('Added document with ID:', doc.id)
  res.send(todos);
})

router.put('/:id', async function (req, res) {
  let id = req.params.id
  let todos = {};
  let docRef = await db.collection('todolist').doc(id)
  let doc = await docRef.get();
  todos.id = doc.id;

  await docRef.set({
    desc: req.body.desc,
    done: req.body.done
  })
  await docRef.get()
  let data = doc.data();
  todos.desc = data.desc;
  todos.done = data.done;

  return res.json(
    {todos})
}
);

router.delete('/:id', async function (req, res) {
  let id = req.params.id;
  await db.collection('todolist').doc(id).delete();

  res.json({
    message: 'Document Deleted'
  });
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;