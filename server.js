const express = require("express");
const cors = require("cors");
const app = express();


var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to EsiAudit-API application." });
});
//routes
require('./app/routes/bi_db_routes')(app);


const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
