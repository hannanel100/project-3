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
const basicAuth = require('express-basic-auth');

const auth = basicAuth({
  users: {
    admin: '123',
    user: '456',
  },
});
const PORT = process.env.PORT || 5000;

app
  .use(express.static(path.join(__dirname, '/client/build')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/vacations-client/build/index.html'));
});
app.get('/authenticate', auth, (req, res) => {
  if (req.auth.user === 'admin') {
    res.send('admin');
  } else if (req.auth.user === 'user') {
    res.send('user');
  }
});