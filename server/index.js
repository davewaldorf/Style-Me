const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');


const corsConfig = {
  origin: true,
  credentials: true,
};

dotenv.config();

const app = express();

app.use(cors(corsConfig));
app.use(bodyParser.json());

app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
