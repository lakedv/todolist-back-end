const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('...');
})

router.get('/:id', function (req, res) {
  let found = data.find(function (item) {
      return item.id === parseInt(req.params.id);
  })
})

router.post('/', function (req, res){
  
})