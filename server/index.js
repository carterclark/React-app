const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "project",
    port:3306,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM movie;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

// app.post("/api/insert", (req, res)=> {

//     const movie_name = req.body.movie_name
//     const minute_runtime = req.body.minute_runtime

//     const sqlInsert = "INSERT INTO movie (movie_name, minute_runtime) VALUES (?, ?)"
//     db.query(sqlInsert, [movie_name, minute_runtime], (err, result) => {
//         console.log(result);
//     })
// });
 
    // const sqlInsert = "SELECT * FROM movie;"
    // db.query(sqlInsert, (err, result) => {
    //     res.send("Result: " + result[0].movie_name);
    // })

app.listen(3001, () => {
    console.log("running on port 3001");
});