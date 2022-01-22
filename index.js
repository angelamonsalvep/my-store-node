const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
});

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'User 1',
      email: 'user1@xxx.com'
    },
    {
      name: 'User 2',
      email: 'user2@xxx.com'
    }
  ]);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'User 1',
    email: 'user1@xxx.com'
  })
});

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'Category 1'
    },
    {
      name: 'Category 2'
    },
    {
      name: 'Category 3'
    }
  ]);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Category 2'
  })
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
