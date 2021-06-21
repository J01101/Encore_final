var express = require('express');
var router = express.Router();
const bcypt = require('bcryptjs');

var mysql = require("mysql");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "map",
});

db.connect(function (err){
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
})

router.get('/', function (req, res, next) {
    var queryString = "SELECT * FROM ta_data";
    db.query(queryString, (err, map) => {
        if (err) throw err;
        res.send(map);
    });
});

router.get('/:name', function (req, res, next) {
})

module.exports = router;