

const express = require('express');
const router = express.Router();
const db = require('../db/knex'); 

// GET all items
router.get('/items', async (req, res) => {
  try {
    const items = await db('items').select('*');
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET item by ID
router.get('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await db('items').where({ id }).first();
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new item
router.post('/items', async (req, res) => {
  const { name, description, quantity } = req.body;
  try {
    const newItem = await db('items').insert({ name, description, quantity }).returning('*');
    res.status(201).json(newItem[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT/PATCH update item by ID
router.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity } = req.body;
  try {
    const updatedItem = await db('items').where({ id }).update({ name, description, quantity }).returning('*');
    if (updatedItem.length > 0) {
      res.json(updatedItem[0]);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE item by ID
router.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await db('items').where({ id }).del().returning('*');
    if (deletedItem.length > 0) {
      res.json({ message: 'Item deleted successfully' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
