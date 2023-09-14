const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('.db/knexfile.js')[process.env.NODE_ENV || 'development']);
const bodyParser = require('body-parser');

app.use(bodyParser.json());




app.get('/items', (req, res) => {
  knex('items')
    .select('*')
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({
        message: 'Internal server error',
        error: err,
      })
    );
});


app.post('/items', (req, res) => {
  const { name, description, quantity } = req.body;
  knex('items')
    .insert({ name, description, quantity })
    .returning('*')
    .then((newItem) => res.status(201).json(newItem[0]))
    .catch((err) =>
      res.status(500).json({
        message: 'Internal server error',
        error: err,
      })
    );
});

// Add more routes and database queries as needed

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

