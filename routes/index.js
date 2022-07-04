const express = require('express');
const request = require('request');
let router = express.Router();

// 하위 라우터들
const items = require('./items');
const countries = require('./countries');
const category = require('./category');

// 하위 라우터들을 적용하기
router.use("/items", items);
router.use("/countries", countries);
router.use("/category", category);

router.get("/region", (req, res, next) => {
    // DB 서버를 127.0.0.1로 설정했을 경우 -> 바레인(me-south-1) 으로 설정한다. (임시)
    if (['127.0.0.1', 'localhost'].indexOf(process.env.DB_HOST) > -1) {
        res.send({ ok: true, data: 'me-south-1' });
    } else {
        request("http://169.254.169.254/latest/meta-data/placement/region", (error, response, body) => {
            if (!error) {
                res.send({ ok: true, data: body });
            } else {
                res.send({ ok: false, message: error });
            }
        });
    }
});

module.exports = router;