const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');
var connectionString = "postgres://postgres:4qOmV5ZyNq2HnTTw0wdF@testing.cmi6xmxq1wpt.us-east-1.rds.amazonaws.com:5432/production";
const client = new Client({
    connectionString: connectionString
});
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/users', (req, res,next) => {
    client.connect(function(err) {
        client.query(`SELECT * FROM users`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});
app.get('/device', (req, res) => {
    client.connect(function(err) {
        client.query(`SELECT * FROM device`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});
app.post('/device', (req,res) =>{
    console.log(req.body);
    res.send(
        `I received your post request.this is wat you sent me ${req.body.post}`,
    );

    
});
// app.post('/users', (req, res) => {
//     if (req.query.username && req.query.email && req.query.age) {
//         console.log('Request received');
//         con.connect(function(err) {
//             con.query(`INSERT INTO main.users (username, email, age) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.age}')`, function(err, result, fields) {
//                 if (err) res.send(err);
//                 if (result) res.send({username: req.query.username, email: req.query.email, age: req.query.age});
//                 if (fields) console.log(fields);
//             });
//         });
//     } else {
//         console.log('Missing a parameter');
//     }
// });
app.listen(port, () => {
console.log('Node server is running..');
});
