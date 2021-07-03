const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const mongoose = require("mongoose");
const washerRoute = require("./controller/washer");
const orderRoute = require("./controller/order");
const axios =  require("axios")
const swaggerUi = require("swagger-ui-express");
// swaggerDocument = require("./swagger.json");

swaggerDocument = require("./wash.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect("mongodb+srv://Case-study:case@cluster0.fbzn5.mongodb.net/washer?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

app.use("/", washerRoute);
app.use("/", orderRoute);
//view service
app.get("/viewservice", (req, res) => {
    axios.get("http://localhost:3000/admins").then((response) => {
        // console.log(response.data);
        var service = response.data;
        res.send(service);
    }).catch((err) => {
        console.log(err.message);
    })
})
//view order
app.get("/vieworder", (req, res) => {
    axios.get("http://localhost:4545/order").then((response) => {
        // console.log(response.data);
        var order = response.data;
        res.send(order);
    }).catch((err) => {
        console.log(err.message);
    })
})

module.exports = app.listen(port, (req, res) => {
    console.log(`server is up and running at ${port}`);
})