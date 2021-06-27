const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const mongoose = require("mongoose");
const washerRoute = require("../Washer/washer");
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

app.get("/view", (req, res) => {
    axios.get("http://localhost:3000/admins").then((response) => {
        // console.log(response.data);
        var service = response.data;
        res.send(service);
    }).catch((err) => {
        console.log(err.message);
    })
})
module.exports = app.listen(port, (req, res) => {
    console.log(`server is up and running at ${port}`);
})