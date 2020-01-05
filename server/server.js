const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const basicAuth = require("express-basic-auth");
const atob = require("atob");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const usersBl = require("./bl/usersBL");
const vacationBl = require("./bl/vacationBL");
const tokenBl = require("./bl/tokenBL");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser("sdf"));
const SECRET = "lkdjfosersldmfpsoj;srejter349idoj40uers";
// const auth = basicAuth({
//   users: {
//     admin: "123",
//     user: "456"
//   }
// });
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

app.post("/authenticate", function(req, res) {
  const { user, pass } = tokenBl.splitCredentials(req.headers.authorization);
  if (!user) {
    res.status(403).send();
  } else {
    if (user === "a" && pass === "a") {
      //look for user and password in db
      const token = jwt.sign(
        {
          user: user
        },
        SECRET,
        {
          expiresIn: 50000
        }
      );
      const options = {
        httpOnly: true,
        signed: true
      };
      res.send(token);
    } else {
      res.status(403).send();
    }
  }
});
// app.get("/authenticate", auth, (req, res) => {
//   const options = {
//     httpOnly: true,
//     signed: true
//   };

//   console.log(req);
//   if (req.auth.userName === "admin") {
//     res.cookie("name", "admin", options).send({ screen: "admin" });
//   } else if (req.auth.userName === "user") {
//     res.cookie("name", "user", options).send({ screen: "user" });
//   }
// });
// app.get("/authenticate", (req, res) => {
//   res.send("in auth");
// });
app.get("/read-cookie", (req, res) => {
  console.log(req.signedCookies);
  if (req.signedCookies.name === "admin") {
    res.send({ screen: "admin" });
  } else if (req.signedCookies.name === "user") {
    res.send({ screen: "user" });
  } else {
    res.send({ screen: "auth" });
  }
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("name").end();
});

app.get("/get-data", (req, res) => {
  if (req.signedCookies.name === "admin") {
    res.send("This is admin panel");
  } else if (req.signedCookies.name === "user") {
    res.send("This is user data");
  } else {
    res.end();
  }
});
