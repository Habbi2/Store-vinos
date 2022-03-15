const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const db = require("./db");
const routes = require("./routes");

//models
const User = require("./models/Users");
const Products = require("./models/Products");
const Cart = require("./models/Cart");

//middleware
app.use(express.json());

app.use(volleyball);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cookieParser());

app.use(
  sessions({
    secret: "vino",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("Escuchando en puerto 3001");
  });
});
