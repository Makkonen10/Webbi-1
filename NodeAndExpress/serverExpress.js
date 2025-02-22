// Import the express module
const express = require('express');
const path = require('path');

// Create an instance of express
const app = express();

// Define the port
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Default route for the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});