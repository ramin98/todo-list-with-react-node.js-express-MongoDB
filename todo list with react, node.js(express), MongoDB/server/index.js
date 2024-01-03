const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

mongoose
  .connect('mongodb://127.0.0.1:27017/tasks')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  
app.use(bodyParser.json());
app.use(cors());

const tasksRoute = require('./routes/tasksRoutes');

app.use('/', tasksRoute);

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
