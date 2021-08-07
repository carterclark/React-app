const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudDB",
    port:3306,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM movie_reviews;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/api/insert", (req, res)=> {

    const movie_name = req.body.movie_name
    const movie_review = req.body.movie_review

    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?, ?)"
    db.query(sqlInsert, [movie_name, movie_review], (err, result) => {
        console.log(result);
    })
});
 
    // const sqlInsert = "SELECT * FROM movie_reviews;"
    // db.query(sqlInsert, (err, result) => {
    //     res.send("Result: " + result[0].movie_name);
    // })

app.listen(3001, () => {
    console.log("running on port 3001");
});