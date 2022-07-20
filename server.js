const express = require('express');
const routes = require('./routes');
const db = require('./db');
const { Plant } = require('./models/plant')
const PORT = process.env.PORT || 3001;
const logger = require('morgan');

const app = express();

app.use(logger('dev'))
app.use(express.json())

// app.use() middleware here ^ ///////////////////

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// "_id": "5e38921e9c3bd077f50dc9a2"