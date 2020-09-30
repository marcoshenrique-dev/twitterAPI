const express = require('express');
const route = require('./routes');

const app = express();

app.use(route);

app.listen(3000, () => console.log('server started at http://localhost:3000 🚀'));
