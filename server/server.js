const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const usersBl = require("./bl/usersBL");
const vacationBl = require("./bl/vacationBL");
const tokenBl = require("./bl/tokenBL");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser("sdf"));
app.use(bodyParser());
const SECRET = "lkdjfosersldmfpsoj;srejter349idoj40uers";

// app.use(function(req, res, next) {
//   const skipEndPoint = [
//     // {
//     //     path: '/login',
//     //     method: 'POST'
//     // },
//     // {
//     //     path: '/cars',
//     //     method: 'GET'
//     // }
//   ];

//   if (
//     skipEndPoint.find(
//       endPoint => endPoint.method === req.method && endPoint.path === req.path
//     )
//   ) {
//     next();
//   } else {
//     try {
//       const token = jwt.verify(
//         tokenBl.splitCredentials(req.headers.authorization),
//         SECRET
//       );
//       next();
//     } catch (ex) {
//       console.log(ex);
//       res.status(403).send();
//     }
//   }
// });

app
  .use(express.static(path.join(__dirname, "/client/build")))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/vacations-client/build/index.html"));
});

app.post("/authenticate", function (req, res) {
  const { user, pass } = tokenBl.splitCredentials(req.headers.authorization);
  if (!user) {
    res.status(403).send();
  } else {
    usersBl.getUser(user, pass, (e, data) => {
      if (e) {
        res.status(403).send();
      }
      else if (data.user_name === 'admin') {
        //apply special admin privelages
        console.log(data.user_name)
      }
      else {
        //regular user
        const userId = data.id;
        const token = jwt.sign(
          {
            user: user
          },
          SECRET,
          {
            expiresIn: 50000
          }
        );
        // const options = {
        //   httpOnly: true,
        //   signed: true
        // };
        res.send({ token, userId });
      }
    });

  }
});

app.post("/signUp", function (req, res) {
  const user = req.body;
  if (!user || user === undefined) {
    res.status(403).send();
  }
  else {
    usersBl.addUser(user, (e, result) => {
      if (e) {
        res.status(403).send(0);
      }
      else {
        res.send(result);
      }
    })
  }


})

app.get('/vacations', (req, res) => {
  vacationBl.getVacations((e, data) => {
    if (e) {
      return res.status(500).send();
    } else {
      return res.send(data);
    }
  })
});
app.post('/vacations/like', (req, res) => {
  const { userId, vacation } = req.body;
  console.log(req.body)
  vacationBl.likeVacation(userId, vacation, (e, data) => {
    if (e) {
      return res.status(500).send();
    } else {
      return res.send(data);
    }
  })
});