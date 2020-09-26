require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const db = require('./db');

const app = express();

app.use(express.json());

app.get('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await db.query('select * from restaurants');
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds',
    },
  });
});

app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.status(204).json({
    status: 'success',
  });
});

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
