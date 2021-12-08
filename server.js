const app = require("express")();

const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("./index.ejs");
});

app.listen(5000, () => {
    console.log("Listening on port 5000 ....")
})