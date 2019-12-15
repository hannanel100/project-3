const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersBl = require('./usersBL');
const vacationBl = require('./vacationBL');
const app = express();

const PORT = 3201;
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());


app.listen(process.env.PORT || PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
);