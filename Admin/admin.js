const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const serviceRoute = require("./controller/service");
const PromoRoute = require("./controller/promo");
const AddonRoute = require("./controller/addon");
const AdminRoute = require("./controller/createa");

const swaggerUi = require("swagger-ui-express");
const { default: axios } = require("axios");

// swaggerDocument = require("./Swagger/addon.json");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// swaggerDocument = require("./Swagger/admin.json");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// swaggerDocument = require("./Swagger/promo.json");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

swaggerDocument = require("./Swagger/service.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/Admin1?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

app.use("/", serviceRoute);
app.use("/", PromoRoute);
app.use("/", AddonRoute);
app.use("/", AdminRoute);

//view -get customer
app.get("/viewcus", (req, res) => {
    axios.get("http://localhost:4545/customer").then((response) => {
        // console.log(response.data);
        var customer = response.data;
        res.send(customer);
    }).catch((err) => {
        console.log(err.message);
    })
})
//post customer and car
app.post("/postcus", (req, res) => {
    axios.post("http://localhost:4545/customer", {
        Name: "Alvee",
        Email: "alvee@gmail.com",
        Password: "aba",
        Car_no: 90,
        Model_no: 2455,
        Address: "a/p-243",
    }).then((response) => {
        console.log(response.data);
        var customer = response.data;
        res.send(customer);
    }).catch((err) => {
        console.log(err.message);
    })
})
//view-get washer
app.get("/viewwash", (req, res) => {
    axios.get("http://localhost:7000/wash").then((response) => {
        // console.log(response.data);
        var washer = response.data;
        res.send(washer);
    }).catch((err) => {
        console.log(err.message);
    })
})
//post washer
app.post("/postwash", (req, res) => {
    axios.post("http://localhost:7000/wash", {
        FirstName: "Adon",
        LastName: "Deol",
        Phone: 7875355124,
        Ratings: 4
    }).then((response) => {
        console.log(response.data);
        var customer = response.data;
        res.send(customer);
    }).catch((err) => {
        console.log(err.message);
    })
})
//leaderboard
app.get("/leaderboard", (req, res) => {
    axios
        .get("http://localhost:4545/leaderboard")
        .then((response) => {
            var leaderboard = response.data;
            res.send(leaderboard);
        })
        .catch((err) => {
            if (err) throw err;
        });
});
module.exports = app.listen(port, (req, res) => {
    console.log("Server up and running at port " + port);
})


