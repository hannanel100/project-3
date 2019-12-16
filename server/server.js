// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const usersBl = require('./usersBL');
// const vacationBl = require('./vacationBL');
// const app = express();

// const PORT = 3201;
// const cors = require('cors');

// app.use(cors());
// app.use(express.static(path.join(__dirname, 'client')));
// app.use(bodyParser.json());


// app.listen(process.env.PORT || PORT, () =>
//     console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
// );
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, '/client/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/vacations-client/build/index.html'));
});