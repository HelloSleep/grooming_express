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
    res.send({ ok: true, data: process.env.REGION });
});

module.exports = router;