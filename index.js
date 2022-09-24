const express = require('express');
const app = express();
var uc = require('upper-case');
let users = [];
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post("/register", (req, res) => {
    const { firstname, lastname } = req.body;
    users.push(firstname, lastname);
    res.status(200).json({
        "message": "register success",
        "data": users,
    });
});
app.post("/login", (req, res) => {
    const { firstname, lastname } = req.body;
    users.push(firstname, lastname);
    if (firstname != null || lastname != null) {
        res.status(200).json({
            "message": "login success ",
            "data": users,
        });
    } else if (firstname == null, lastname == null) {
        res.status(400).json({
            "message": "login is bad request please re-enter your data",
        });
    }
});
app.listen(8080, (res, req) => {
    console.log("app listen at https://127.0.0.1:8080")
})
