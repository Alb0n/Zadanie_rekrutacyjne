const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var number_of_rows = 0;


app.post("/update", (req, res) => {
     number_of_rows = req.body.number_of_rows;
     console.log("Liczba wierszy w arkuszu:" + (number_of_rows-1).toString());
     res.send(number_of_rows);
});

app.get("/", (req, res) => {
     res.write("Liczba wierszy w arkuszu: " + (number_of_rows-1).toString());
     res.end();
});



app.listen(port, () => console.log(`Server is listening on port ${port}`));

