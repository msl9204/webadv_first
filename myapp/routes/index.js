var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index");
});

router.post("/form-data", function(req, res, next) {
    console.log(req.body);
    var text_data = req.body.inputbox;
    res.send(text_data);
});

module.exports = router;
