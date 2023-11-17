// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Create the route handler
// 4. Start the server

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 3. Create the route handler
app.get('/api/comments', (req, res) => {
  res.send([1, 2, 3]);
});

// 4. Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));