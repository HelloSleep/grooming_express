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
    request("http://169.254.169.254/latest/meta-data/placement/region", (error, response, body) => {
        if (!error) {
            res.send({ok: true, data: body});
        } else {
            res.send({ok: false, message: error});
        }
    });

    // 로컬 테스팅용
    // res.send({ ok: true, data: 'me-south-1' });
});

module.exports = router;