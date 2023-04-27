const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');


const corsConfig = {
  origin: true,
  credentials: true,
};

// Load environment variables from .env file
dotenv.config();

const app = express();
// Enable cross-origin resource sharing
app.use(cors(corsConfig));
// Parse request bodies as JSON
app.use(bodyParser.json());

// Mount routes
app.use(routes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
