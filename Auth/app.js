const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const axios = require("axios");
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

//swagger
const swaggerUi = require("swagger-ui-express");
// swaggerDocument = require("./swagger.json");
swaggerDocument = require("./authen.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// database connection
const dbURI = "mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/Middle?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));
console.log("server up and running");
// routes
app.get('*', checkUser);
app.get("/wash", checkUser);
app.get("/wash",requireAuth);
app.get('/', (req, res) => res.render('home'));


// app.get('/wash', requireAuth, (req, res) => res.render('wash'));
app.get("/wash", (req, res) => {
  axios.get("http://localhost:4545/customer").then((response) => {
      // console.log(response.data);
      var service = response.data;
      res.send(service);
  }).catch((err) => {
      console.log(err.message);
  })
})

app.use(authRoutes);

module.exports = app;